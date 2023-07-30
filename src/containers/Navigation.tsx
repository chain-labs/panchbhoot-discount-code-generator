import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Navs } from '../App';

export default function Naviagtion({ changeNav, currentNav }: { changeNav: Function; currentNav: string }) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button
          onClick={() => changeNav(Navs.GENERATE_CODE)}
          className={
            currentNav === Navs.GENERATE_CODE
              ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
        >
          Generate Code
        </button>
        <button
          onClick={() => changeNav(Navs.VIEW_CODES)}
          className={
            currentNav === Navs.VIEW_CODES
              ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          }
        >
          View Discount Codes
        </button>
        <ConnectButton />
      </nav>
    </div>
  );
}
