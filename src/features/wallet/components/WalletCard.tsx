import { TrendingUp, TrendingDown, WalletIcon } from 'lucide-react';
import { EditWallet } from './EditWallet';

interface WalletProps {
  wallet: {
    id: number;
    name: string;
    balance: number;
    income: number;
    expense: number;
    change: number;
  };
}

export const WalletCard = ({ wallet }: WalletProps) => {
  return (
    <div className="rounded-3xl bg-white p-2 w-full dark:bg-card">
      <div className="rounded-2xl bg-yellow-200 dark:bg-sky-800 p-6 grid md:grid-cols-6 gap-2">
        <div className="col-span-5">
          <div className="flex gap-2">
            <WalletIcon className="w-4 h-4" strokeWidth={2} />
            <p className="text-sm font-medium mb-2">{wallet.name}</p>
          </div>
          <p className="text-sm mb-2">your balance</p>
          <h2 className="text-4xl font-bold">
            ${wallet.balance.toLocaleString()}
          </h2>

          <div className="text-sm mt-2">
            <span className='text-sm font-medium'>
              Total - $ 50 M
            </span>
          </div>
        </div>
        <div>
          <EditWallet />
        </div>
      </div>

      <div className="flex w-full justify-between px-5 py-2">
        {/* Income */}
        <div className="flex flex-col justify-end">
          <div className="flex items-center text-sm rounded-full w-max mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <h3 className="font-bold mb-1">
            ${wallet.income.toLocaleString()}
          </h3>
          <span className="text-xs">Income</span>
        </div>

        <div className="border-r"></div>

        {/* Expense */}
        <div className="flex flex-col justify-end">
          <div className="flex items-center text-sm rounded-full w-max mb-2">
            <TrendingDown className="w-4 h-4 text-red-600" />
          </div>
          <h3 className="font-bold mb-1">
            ${wallet.expense.toLocaleString()}
          </h3>
          <span className="text-xs">Expenses</span>
        </div>
      </div>
    </div>
  );
};
