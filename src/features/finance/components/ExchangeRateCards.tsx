import { Euro, DollarSign, PoundSterling } from 'lucide-react';

const getCurrencyIcon = (currency: string) => {
  switch(currency) {
    case 'EUR':
      return <Euro className="w-4 h-4 text-green-600 dark:text-green-400" />;
    case 'USD':
      return <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />;
    case 'GBP':
      return <PoundSterling className="w-4 h-4 text-green-600 dark:text-green-400" />;
    default:
      return <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />;
  }
};

export const ExchangeRateCards = ({ conversions } : { conversions: Record<string, string | number> }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {Object.entries(conversions).map(([currency, rate], index) => (
        <div key={index} className="rounded-3xl bg-white dark:bg-card p-2">
          <div className="flex items-center justify-between mb-4">
            <div className="mb-2 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              {getCurrencyIcon(currency)}
            </div>
          </div>
          <div className="px-2">
            <p className="text-xs mb-1">{currency}</p>
            <p>{typeof rate === 'number' ? rate.toLocaleString() : rate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};