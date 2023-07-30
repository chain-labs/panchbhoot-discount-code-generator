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
import { BytesLike } from 'ethers';
import { useState } from 'react';

export default function DiscountGeneratorForm({
  discountSignerAddress,
  generateCodeAndStore,
}: {
  discountSignerAddress: BytesLike;
  generateCodeAndStore: Function;
}) {
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState();
  const [receiverAddress, setReceiverAddress] = useState('');
  const [saleIndex, setSaleIndex] = useState();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
  const [isCodeGenerated, setIsCodeGenerated] = useState(false);

  function handleDiscountCodeEvent(event: any) {
    const value = event.target.value;
    setDiscountCode(value);
  }

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

  async function handleGenerateCode() {
    setIsCodeGenerated(false);
    setIsGeneratingCode(true);
    setSuccess(false);
    setMessage('');
    const returnData = await generateCodeAndStore(saleIndex, discountPercentage, receiverAddress, discountCode);
    setSuccess(returnData.status);
    setMessage(returnData.message);
    setIsGeneratingCode(false);
    setIsCodeGenerated(true);
  }

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
              <label htmlFor="discountCode" className="block text-sm font-medium leading-6 text-gray-900">
                Discount Code (It should be a unique string. eg. PANCH-JOHN-1-75)
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={handleDiscountCodeEvent}
                    name="discountCode"
                    id="discountCode"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="PANCH-JOHN-1-75"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="saleIndex" className="block text-sm font-medium leading-6 text-gray-900">
                Sale Index
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    value={saleIndex}
                    onChange={handleSaleIndexEvent}
                    name="saleIndex"
                    id="saleIndex"
                    autoComplete="saleIndex"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="discountPercentage" className="block text-sm font-medium leading-6 text-gray-900">
                Discount Percentage
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    value={discountPercentage}
                    onChange={handleDiscountPercentageEvent}
                    name="discountPercentage"
                    id="discountPercentage"
                    autoComplete="discountPercentage"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="25"
                  />
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="receiverAddress" className="block text-sm font-medium leading-6 text-gray-900">
                Receiver Address
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={receiverAddress}
                    onChange={handleReceiverAddressEvent}
                    name="receiverAddress"
                    id="receiverAddress"
                    autoComplete="receiverAddress"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="0xabcdef12...."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleGenerateCode}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isGeneratingCode ? 'Generating Code...' : 'Generate Code'}
        </button>
      </div>
      {isCodeGenerated ? (
        <>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Status: {success.toString()} <br/>
            Message: {message}
          </p>
        </>
      ) : (
        <></>
      )}
    </form>
  );
}
