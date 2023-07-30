import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains, wagmiConfig } from './containers/ConnectWallet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} initialChain={chains[0]}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
