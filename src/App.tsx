// @ts-nocheck
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import DiscountGeneratorForm from './containers/DiscountGeneratorForm';
import * as ethers from 'ethers';
import { BigNumber, BytesLike } from 'ethers';
import DiscountCodeLists from './containers/DiscountCodeLists';
import Naviagtion from './containers/Navigation';
import { useContractReads, usePublicClient, useWalletClient } from 'wagmi';
import { signMessage } from '@wagmi/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { solidityKeccak256 } from 'ethers/lib/utils';
import { collection, doc, setDoc, getDocs, getCountFromServer } from 'firebase/firestore';
import { db } from './db/firebase';
import panchbhootContractAbi from './panchbhootContractAbi';
import { getContract } from 'viem';
import BulkDiscountGeneratorForm from './containers/BulkDiscountGenerator';

export const DISCOUNT_CODE_MESSAGE = '://Panchabhoot Discount Code';

export const Navs = {
  GENERATE_CODE: 'GENERATE_CODE',
  GENERATE_CODE_BULK: 'GENERATE_CODE_BULK',
  VIEW_CODES: 'VIEW_CODES',
};

function App() {
  const walletClient = useWalletClient();
  const publicClient = usePublicClient();
  const [signer, setSigner] = useState<any>();
  const [existingDiscountCodes, setExisitingDiscountCodes] = useState<any>();
  const [discountSigner, setDiscountSigner] = useState<any>();
  const [nav, setNav] = useState(Navs.GENERATE_CODE_BULK);
  const [isConnected, setIsConnected] = useState(false);

  async function fetchDiscountSigner() {
    const contract = getContract({
      address: import.meta.env.VITE_CONTRACT_ADDRESS,
      abi: panchbhootContractAbi,
      publicClient: publicClient,
    });
    const discountSigner = await contract.read.getDiscountSigner();

    setDiscountSigner(discountSigner);
  }

  useEffect(() => {
    if (isConnected) {
      fetchDiscountSigner();
    }
  }, [signer, walletClient, isConnected]);

  useEffect(() => {
    try {
      if (walletClient !== undefined && signer === undefined) {
        setSigner(walletClient.data);
        setIsConnected(true);
        console.log(walletClient.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, [walletClient, isConnected]);

  async function getDiscountCodes() {
    await getDocs(collection(db, 'discountCodes')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setExisitingDiscountCodes(newData);
      console.log(existingDiscountCodes, newData);
    });
  }

  useEffect(() => {
    if (isConnected) {
      getDiscountCodes();
    }
  }, [isConnected]);

  function setNavigation(navTab: string) {
    if (navTab !== Navs.GENERATE_CODE && navTab !== Navs.VIEW_CODES && navTab !== Navs.GENERATE_CODE_BULK) {
      throw Error('Unknown Navigation');
    }
    console.log(navTab);
    setNav(navTab);
  }

  async function fetchSaleData(saleIndex: number) {
    const contract = getContract({
      address: import.meta.env.VITE_CONTRACT_ADDRESS,
      abi: panchbhootContractAbi,
      publicClient: publicClient,
    });
    const saleData = await contract.read.getSaleCategory([saleIndex]);
    // console.log({ saleData });
    return saleData;
  }

  async function fetchCurrentDiscountCodeIndex() {
    // fetch data from database
    const currentDiscountIndex = (await getCountFromServer(collection(db, 'discountCodes'))).data().count;
    const nextDiscountIndex = currentDiscountIndex + 1;
    console.log(`Current Discount Index is: ${nextDiscountIndex}`);
    return nextDiscountIndex;
  }

  function generateDiscountMessage(
    discountCodeIndex: number,
    discountedPrice: BigNumber,
    receiverAddress: BytesLike,
  ): string {
    console.log({ discountCodeIndex, discountedPrice, receiverAddress });

    return solidityKeccak256(
      ['uint256', 'uint256', 'address', 'string'],
      [discountCodeIndex, discountedPrice, receiverAddress, DISCOUNT_CODE_MESSAGE],
    );
  }

  async function storeDiscountCodeOnFirestore(
    discountCode: string,
    currentDiscountIndex: number,
    discountedPrice: BigNumber,
    discountSignature: BytesLike,
    receiverAddress: BytesLike,
    saleIndex: number,
  ) {
    try {
      await setDoc(doc(db, 'discountCodes', discountCode), {
        discountIndex: currentDiscountIndex,
        discountedPrice: discountedPrice.toString(),
        discountSignature,
        receiverAddress,
        saleIndex,
      });
      console.log('Document written');
      return true;
    } catch (e) {
      console.error('Error adding document: ', e);
      return false;
    }
  }

  async function generateCodeAndStore(
    saleIndex: number,
    discountPercentage: number,
    receiverAddress: BytesLike,
    discountCode: string,
  ) {
    if (signer === undefined || signer === null) {
      throw Error('Signer is undefined');
    }
    // fetch sale index
    const saleData = await fetchSaleData(saleIndex);

    // fetch current discount index
    const currentDiscountIndex = await fetchCurrentDiscountCodeIndex();
    // check if sale is discounted
    if (!saleData.isDiscountEnabled) {
      return {
        status: false,
        message: 'Sale is not dsicounted',
      };
    }
    if (signer.account.address?.toLowerCase() !== discountSigner.toLowerCase()) {
      return {
        status: false,
        message: 'Connected wallet is not discount signer',
      };
    }
    // fetch price
    const salePrice = saleData.price;
    console.log(salePrice);
    if (discountPercentage > 100) {
      throw Error('Discount cannot be more than 100%');
    }
    // calculate discounted price
    const discountedPrice = ethers.BigNumber.from(salePrice.toString())
      .mul(100 - discountPercentage)
      .div(100);
    // generate code
    const discountMessage = generateDiscountMessage(currentDiscountIndex, discountedPrice, receiverAddress);
    const discountSignature = await signMessage({ message: { raw: discountMessage } });
    console.log(discountSignature);
    const discountResposne = {
      discountIndex: currentDiscountIndex,
      discountedPrice,
      discountSignature,
    };
    const discountRawCode = `${discountResposne.discountIndex}-${discountResposne.discountedPrice.toString()}-${
      discountResposne.discountSignature
    }`;
    console.log({
      discountCode,
      currentDiscountIndex,
      discountedPrice: discountedPrice.toString(),
      discountSignature,
      receiverAddress,
      saleIndex,
    });
    // store code
    const status = await storeDiscountCodeOnFirestore(
      discountCode,
      currentDiscountIndex,
      discountedPrice,
      discountSignature,
      receiverAddress,
      saleIndex,
    );
    if (status) {
      // generate message to be displayed and return
      return {
        status: true,
        message: `Code generated and stored on firestore. The Discount Code is: ${discountCode}`,
      };
    } else {
      return {
        status: false,
        message: 'Failed pushing datat to firestore',
      };
    }
  }

  async function generateCodesAndStore(codes, discountPrefix, wallet: ethers.Wallet, setSuccessQueue, successQueue) {
    if (wallet === undefined || wallet === null) {
      throw Error('Signer is undefined');
    }
    for (let index = 0; index < codes.length; index++) {
      const code = codes[index];
      console.log({ code });

      // fetch sale index
      const saleData = await fetchSaleData(code[0]);
      console.log({ saleData });

      // fetch current discount index
      const currentDiscountIndex = await fetchCurrentDiscountCodeIndex();
      console.log({ currentDiscountIndex });

      // check if sale is discounted
      if (!saleData.isDiscountEnabled) {
        return {
          status: false,
          message: 'Sale is not dsicounted',
        };
      }

      if (wallet.address.toLowerCase() !== discountSigner.toLowerCase()) {
        console.log({ wallet: wallet.address, discountSigner });
        return {
          status: false,
          message: 'Connected wallet is not discount signer',
        };
      }
      // fetch price
      const salePrice = saleData.price;
      console.log({ salePrice });
      if (code[1] > 100) {
        throw Error('Discount cannot be more than 100%');
      }
      // calculate discounted price
      const discountedPrice = ethers.BigNumber.from(salePrice.toString())
        .mul(100 - code[1])
        .div(100);
      console.log({ discountedPrice });

      // generate code
      const discountMessage = generateDiscountMessage(currentDiscountIndex, discountedPrice, code[2]);
      console.log({ discountMessage });

      const discountSignature = await wallet.signMessage(ethers.utils.arrayify(discountMessage));
      console.log(discountSignature);
      const discountResposne = {
        discountIndex: currentDiscountIndex,
        discountedPrice,
        discountSignature,
      };
      const discountRawCode = `${discountResposne.discountIndex}-${discountResposne.discountedPrice.toString()}-${
        discountResposne.discountSignature
      }`;
      console.log({
        discountCode: `${discountPrefix.toUpperCase()}-${code[0]}-${code[1]}-${code[2]}`,
        currentDiscountIndex,
        discountedPrice: discountedPrice.toString(),
        discountSignature,
        receiverAddress: code[1],
        saleIndex: code[0],
      });
      // store code
      const status = await storeDiscountCodeOnFirestore(
        `${discountPrefix.toUpperCase()}-${code[0]}-${code[1]}-${code[2]}`,
        currentDiscountIndex,
        discountedPrice,
        discountSignature,
        code[2],
        code[0],
      );
    }
  }

  return (
    <div className={styles['App']}>
      {isConnected && signer?.account.address ? (
        <>
          <Naviagtion changeNav={setNavigation} currentNav={nav} />
          {nav === Navs.GENERATE_CODE ? (
            <DiscountGeneratorForm generateCodeAndStore={generateCodeAndStore} discountSignerAddress={discountSigner} />
          ) : nav === Navs.GENERATE_CODE_BULK ? (
            <BulkDiscountGeneratorForm
              generateCodeAndStore={generateCodesAndStore}
              discountSignerAddress={discountSigner}
            />
          ) : (
            <DiscountCodeLists existingDiscountCodes={existingDiscountCodes} />
          )}
        </>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}

export default App;
