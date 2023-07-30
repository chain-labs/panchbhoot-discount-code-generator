import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  goerli,
  polygonMumbai,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const supportedChains = [goerli, mainnet, polygon, polygonMumbai, optimism, arbitrum, zora];
let directedChain = [];
for (const chain in supportedChains) {
    if(supportedChains[chain].network == import.meta.env.VITE_NETWORK){
        directedChain.push(supportedChains[chain]);
    }
}
export const { chains, publicClient } = configureChains(
    directedChain,
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID?import.meta.env.VITE_ALCHEMY_ID : "undefined" }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'panchbhoot discount codes',
  projectId: '17adc180d0d7f711cf37b1ebad9dad68',
  chains
});
 export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})