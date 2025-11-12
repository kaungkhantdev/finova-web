import { BanknoteArrowDown, BanknoteArrowUp } from 'lucide-react';

export function TransactionList() {
  const transactions = [
    {
      id: 1,
      name: 'Henrik Jansen',
      type: 'Income',
      amount: '+$428.00',
      isPositive: true,
      avatar: '👨‍💼',
      bgColor: 'bg-amber-100'
    },
    {
      id: 2,
      name: 'Multiplex',
      type: 'Expense',
      amount: '-$124.55',
      isPositive: false,
      avatar: '🎬',
      bgColor: 'bg-black'
    },
    {
      id: 3,
      name: 'Eva Novak',
      type: 'Income',
      amount: '+$5,710.20',
      isPositive: true,
      avatar: '👩‍🦱',
      bgColor: 'bg-pink-100'
    },
    {
      id: 4,
      name: 'Binance',
      type: 'Income',
      amount: '+$1,714.29',
      isPositive: true,
      avatar: '₿',
      bgColor: 'bg-black'
    },
    {
      id: 5,
      name: 'Matteo Ricci',
      type: 'Income',
      amount: '+$536.00',
      isPositive: true,
      avatar: '👨‍🦱',
      bgColor: 'bg-red-100'
    },
    {
      id: 6,
      name: 'Nike',
      type: 'Expense',
      amount: '-$328.96',
      isPositive: false,
      avatar: '👟',
      bgColor: 'bg-black'
    }
  ];

  return (
    <div className="w-full">
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white dark:bg-card rounded-2xl p-2 flex items-center justify-between"
          >
            {/* Left Section - Avatar and Info */}
            <div className="flex items-center gap-3 flex-1 ml-1">
              {/* Avatar */}
              {/* <Avatar className="rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              {
              transaction.isPositive ? (
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all bg-green-100 dark:bg-green-900`}
                >
                  <BanknoteArrowUp className="w-4 h-4" />
                </div>) : (
                  <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all bg-red-100 dark:bg-red-900`}
                >
                  <BanknoteArrowDown className="w-4 h-4" />
                </div>)
              }

              {/* Name and Type */}
              <div className="flex-1">
                <h3 className=" text-[13px]">{transaction.name}</h3>
                <div className="flex items-center gap-1">
                  <p className="text-[11px] text-gray-500">{transaction.type}</p>
                </div>
              </div>
            </div>

            {/* Right Section - Amount */}
            <div className='px-3'>
              <p
                className={` ${
                  transaction.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {transaction.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}