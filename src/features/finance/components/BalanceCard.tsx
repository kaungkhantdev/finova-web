import { TrendingUp, TrendingDown, ChartNoAxesColumn } from 'lucide-react';

export const BalanceCard = (
  { 
    from_currency,
    from_currency_symbol,
    original_amount ,
    formatted_original_amount,
  } 
  : 
  { 
    from_currency: string,
    from_currency_symbol: string,
    original_amount: number | string,
    formatted_original_amount: number | string,
  }
) => {
  return (
    <div className="rounded-3xl p-2 w-full text-center bg-white dark:bg-card">
      <div className="rounded-2xl bg-yellow-200 dark:bg-sky-800 p-6">
        <p className="text-sm font-bold mb-2">{from_currency}</p>
        <p className="text-sm mb-2">your balance</p>
        <h2 className="text-4xl font-bold">
          {from_currency_symbol + ' ' + original_amount.toLocaleString()}
        </h2>
        <p className="text-sm mt-2">{ from_currency_symbol + ' ' + formatted_original_amount}</p>
      </div>

      <div className="py-4 grid grid-cols-3">
        <div className="flex flex-col items-center">
          <TrendingUp className="w-4 h-4" />
          <p className="text-xs mt-2">Income</p>
        </div>
        <div className="flex flex-col items-center border-x">
          <ChartNoAxesColumn className="w-4 h-4" />
          <p className="text-xs mt-2">Transaction</p>
        </div>
        <div className="flex flex-col items-center">
          <TrendingDown className="w-4 h-4" />
          <p className="text-xs mt-2">Expense</p>
        </div>
      </div>
    </div>
  );
};