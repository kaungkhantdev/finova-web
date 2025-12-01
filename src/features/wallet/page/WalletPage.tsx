import { Button } from "@/components/ui/button";
import { WalletCard } from "../components/WalletCard";
import { WalletHeader } from "../components/WalletHeader";

const Wallet = () => {
  const wallets = [
    { id: 1, name: 'K Bank', balance: 83172.64, income: 16281.48, expense: 16281.48, change: 6.7 },
    { id: 2, name: 'SCB', balance: 42100.55, income: 8500.20, expense: 4200.40, change: 4.2 },
    { id: 3, name: 'Bangkok Bank', balance: 91000.12, income: 25000.00, expense: 11000.00, change: 8.1 },
    { id: 4, name: 'Krungthai', balance: 31200.22, income: 9100.11, expense: 7200.33, change: 2.4 },
  ];

  return (
    <div className="md:p-8 lg:py-6 lg:pl-0 lg:pr-6 2xl:flex items-center justify-center w-full 2xl:min-h-screen">
      <div>
        <WalletHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wallets.map((wallet) => (
            <WalletCard key={wallet.id} wallet={wallet} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button size={'lg'} className="mt-6 rounded-full">Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
