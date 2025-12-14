import { CreateWallet } from './CreateWallet';

export const WalletHeader = ({ title }:  { title?: string }) => (
  <div className="mb-4 flex justify-between items-center w-full">
    <h1 className="text-lg font-medium ">{ title ?? 'Wallets'}</h1>
    <CreateWallet />
  </div>
);
