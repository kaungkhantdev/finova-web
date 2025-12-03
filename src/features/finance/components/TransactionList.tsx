import Loading from '@/components/common/Loading';
import { useGetAllTransaction } from '@/features/transition';
import { TRANSACTION_TYPES } from '@/utils/constants';
import { BanknoteArrowDown, BanknoteArrowUp, ChartArea, Receipt, type LucideIcon } from 'lucide-react';

interface Transaction {
  id: string | number;
  name: string;
  transaction_type_name: string;
  amount: number;
}

interface TransactionConfig {
  icon: LucideIcon;
  bgColor: string;
  darkBgColor: string;
  iconColor: string;
  amountColor: string;
  prefix: string;
}

type TransactionConfigMap = {
  [key: string]: TransactionConfig;
};

const TRANSACTION_CONFIG: TransactionConfigMap = {
  [TRANSACTION_TYPES.INCOME.name]: {
    icon: BanknoteArrowUp,
    bgColor: 'bg-green-100',
    darkBgColor: 'dark:bg-green-900',
    iconColor: 'text-green-600',
    amountColor: 'text-green-500',
    prefix: '+'
  },
  [TRANSACTION_TYPES.EXPENSE.name]: {
    icon: BanknoteArrowDown,
    bgColor: 'bg-red-100',
    darkBgColor: 'dark:bg-red-900',
    iconColor: 'text-red-600',
    amountColor: 'text-red-500',
    prefix: '-'
  }
};

interface TransactionIconProps {
  type: string;
}

function TransactionIcon({ type }: TransactionIconProps) {
  const config = TRANSACTION_CONFIG[type];
  const Icon = config?.icon || Receipt;
  
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${config?.bgColor || 'bg-gray-100'} ${config?.darkBgColor || 'dark:bg-gray-800'}`}>
      <Icon className={`w-4 h-4 ${config?.iconColor || 'text-gray-600'}`} />
    </div>
  );
}

interface TransactionItemProps {
  transaction: Transaction;
}

function TransactionItem({ transaction }: TransactionItemProps) {
  const type = transaction.transaction_type_name?.toLowerCase();
  const config = TRANSACTION_CONFIG[type];
  
  return (
    <div className="bg-white dark:bg-card rounded-2xl p-2 flex items-center justify-between">
      {/* Left Section - Icon and Info */}
      <div className="flex items-center gap-3 flex-1 ml-1">
        <TransactionIcon type={type} />
        
        {/* Name and Type */}
        <div className="flex-1">
          <h3 className="text-[13px]">{transaction.name}</h3>
          <div className="flex items-center gap-1">
            <p className="text-[11px] text-gray-500 capitalize">{type}</p>
          </div>
        </div>
      </div>

      {/* Right Section - Amount */}
      <div className="px-3">
        <p className={config?.amountColor || 'text-gray-900'}>
          {config?.prefix || ''}{transaction.amount}
        </p>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-26 px-4 bg-white dark:bg-card rounded-2xl">
      <div className="flex items-center justify-center mb-6">
        <ChartArea className="w-12 h-12 text-muted-foreground" strokeWidth={1} />
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        No transactions yet
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm text-sm">
        Your transaction history will appear here once you start recording your income and expenses.
      </p>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center py-26 px-4 bg-white dark:bg-card rounded-2xl">
      <div className="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-6">
        <Receipt className="w-12 h-12 text-red-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Failed to load transactions
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">
        We couldn't load your transactions. Please try again later.
      </p>
    </div>
  );
}


export function TransactionList() {
  const { data, isLoading, error } = useGetAllTransaction(true);
  const transactions = data?.data as Transaction[] | undefined;

  if (isLoading) return <Loading />;
  if (error) return <ErrorState />;
  if (!transactions || transactions.length === 0) return <EmptyState />;

  return (
    <div className="w-full">
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
