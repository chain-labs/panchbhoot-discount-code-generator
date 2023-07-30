// @ts-nocheck
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import DiscountGeneratorForm from './containers/DiscountGeneratorForm';
import * as ethers from 'ethers';
import { BigNumber, BytesLike } from 'ethers';
import DiscountCodeLists from './containers/DiscountCodeLists';
import Naviagtion from './containers/Navigation';
import { useContractReads, usePublicClient, useWalletClient } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { solidityKeccak256 } from 'ethers/lib/utils';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';
import { db } from './db/firebase';
import panchbhootContractAbi from "./panchbhootContractAbi";
import { getContract } from 'viem'

export const DISCOUNT_CODE_MESSAGE = '://Panchabhoot Discount Code';

export const Navs = {
  GENERATE_CODE: 'GENERATE_CODE',
  VIEW_CODES: 'VIEW_CODES',
};

function App() {
  const walletClient = useWalletClient();
  const publicClient = usePublicClient();
  const [signer, setSigner] = useState<any>();
  const [existingDiscountCodes, setExisitingDiscountCodes] = useState<any>();
  const [discountSigner, setDiscountSigner] = useState<any>();
  const [nav, setNav] = useState(Navs.GENERATE_CODE);
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
    if(isConnected) {
      fetchDiscountSigner();
    }
  }, [signer, walletClient, isConnected])

  useEffect(() => {
    try {
      if (walletClient !== undefined && signer ===undefined) {
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
    if(isConnected) {
      getDiscountCodes();
    }
  }, [isConnected]);

  function setNavigation(navTab: string) {
    if (navTab !== Navs.GENERATE_CODE && navTab !== Navs.VIEW_CODES) {
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
    })
    const saleData = await contract.read.getSaleCategory([saleIndex]);
    console.log(saleData);
    return saleData;
  }

  async function fetchCurrentDiscountCodeIndex() {
    // fetch data from smart contract
    return existingDiscountCodes.length + 1;
  }

  function generateDiscountMessage(
    discountCodeIndex: number,
    discountedPrice: BigNumber,
    receiverAddress: BytesLike,
  ): string {
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
      await setDoc(doc(db, 'discountCodes', existingDiscountCodes.length + 1), {
        discountIndex: currentDiscountIndex,
        discountCode: discountCode,
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
    // calculate discounted price
    const discountedPrice = salePrice.mul(discountPercentage).div(100);
    // generate code
    const discountMessage = generateDiscountMessage(currentDiscountIndex, discountedPrice, receiverAddress);
    const discountSignature = await signer.signMessage({ message: discountMessage });
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

  return (
    <div className={styles['App']}>
      {isConnected && signer?.account.address ? (
        <>
          <Naviagtion changeNav={setNavigation} currentNav={nav} />
          {nav === Navs.GENERATE_CODE ? (
            <DiscountGeneratorForm
              generateCodeAndStore={generateCodeAndStore}
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
