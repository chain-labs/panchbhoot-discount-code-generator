/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BytesLike, Wallet, ethers } from 'ethers';
import { useEffect, useRef, useState } from 'react';

import readXlsxFile from 'read-excel-file';
import { CircleCheckFill, CircleXFill } from 'akar-icons';
import { getContract } from 'viem';
import panchbhootContractAbi from '../panchbhootContractAbi';
import { publicClient } from './ConnectWallet';
import toast from 'react-hot-toast';

export default function BulkDiscountGeneratorForm({
  discountSignerAddress,
  generateCodeAndStore,
}: {
  discountSignerAddress: BytesLike;
  generateCodeAndStore: Function;
}) {
  const [discountCodes, setDiscountCodes] = useState([]);
  const [discountFiles, setDiscountFiles] = useState();
  const [discountPercentage, setDiscountPercentage] = useState();
  const [privateKey, setPrivateKey] = useState('');
  const [discountPrefix, setDiscountPrefix] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [saleIndex, setSaleIndex] = useState();
  const [successQueue, setSuccessQueue] = useState([]);
  const [message, setMessage] = useState('');

  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
  const [isCodeGenerated, setIsCodeGenerated] = useState(false);

  function handleDiscountCodeEvent(event: any) {
    const value: File = event.target.files[0];
    setDiscountFiles(value);
    readXlsxFile(value).then((rows) => {
      const codes = rows.slice(1);
      setDiscountCodes(codes);
    });
  }

  useEffect(() => {
    console.log({ discountCodes });
  }, [discountCodes]);

  function handleDiscountPercentageEvent(event: any) {
    const value = event.target.value;
    setDiscountPercentage(value);
  }

  function handleReceiverAddressEvent(event: any) {
    const value = event.target.value;
    setReceiverAddress(value);
  }

  function handleSaleIndexEvent(event: any) {
    const value = event.target.value;
    setSaleIndex(value);
  }

  async function handleGenerateCode(discount) {
    setIsCodeGenerated(false);
    setIsGeneratingCode(true);
    const provider = new ethers.providers.AlchemyProvider('goerli', import.meta.env.VITE_ALCHEMY_ID);
    const wallet = new ethers.Wallet(privateKey, provider);
    console.log({ provider, wallet });
    await generateCodeAndStore(discountCodes, discountPrefix, wallet, setSuccessQueue, successQueue);
    setIsGeneratingCode(false);
    setIsCodeGenerated(true);
  }

  useEffect(() => {
    if (isCodeGenerated) {
      setDiscountCodes([]);
      inputFileRef.current.value = '';
      toast.success(`Succesfully created ${discountCodes.length} discount codes!`);
    }
  }, [isCodeGenerated]);

  const inputFileRef = useRef(null);

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Panchbhoot Discount Code Generator</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Using this form you can generate new Discount Codes. You need to be connected with Discount Signer account.
            The Discount Signer account address is: {discountSignerAddress as string}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="discountPrefix" className="block text-sm font-medium leading-6 text-gray-900">
                Discount Prefix*
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={discountPrefix}
                    onChange={(e) => setDiscountPrefix(e.target.value)}
                    name="discountPrefix"
                    id="discountPrefix"
                    className="block flex-1 uppercase border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="PANCH-DIWALI"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="discountPrefix" className="block text-sm font-medium leading-6 text-gray-900">
                Enter your Private Key*
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                    name="privateKey"
                    id="privateKey"
                    className="block flex-1 uppercase border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="*private key*"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="discountCode" className="block text-sm font-medium leading-6 text-gray-900">
                Discount Code Excel Sheet*
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    ref={inputFileRef}
                    type="file"
                    onChange={handleDiscountCodeEvent}
                    name="discountCode"
                    id="discountCode"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Visualize Table of Discount Codes */}
          {
            <div className="relative overflow-x-auto mt-8">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                      Receiver Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Discount %
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Sale Index
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {discountCodes.length
                    ? discountCodes?.map((entry, index) => (
                        <tr className="bg-white dark:bg-gray-800" key={`${entry[2]}-${entry[1]}`}>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {entry[2]}
                          </th>
                          <td className="px-6 py-4">{entry[1]}</td>
                          <td className="px-6 py-4">{entry[0]}</td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleGenerateCode}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline disabled:cursor-not-allowed disabled:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={!discountPrefix && !discountCodes.length}
        >
          {isGeneratingCode ? 'Generating Code...' : 'Generate Code'}
        </button>
      </div>
      {/* {isCodeGenerated ? (
        <>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Status: {success.toString()} <br />
            Message: {message}
          </p>
        </>
      ) : (
        <></>
      )} */}
    </form>
  );
}
