import { formatEther } from 'ethers/lib/utils';

export default function DiscountCodeLists({ existingDiscountCodes }: { existingDiscountCodes: any }) {
  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Panchbhoot Discount Codes</h2>
        <ul className="divide-y divide-gray-100">
          {existingDiscountCodes &&
            existingDiscountCodes.map((code: any) => (
              <li key={code.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{code.discountCode}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Receiver: {code.receiverAddress}</p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Discounted Price: {formatEther(code.discountedPrice)} ETH
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">Discount Index: {code.id}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">Sale Index: {code.saleIndex}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
