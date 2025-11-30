import { Link } from 'react-router';
import { TransactionList } from './TransactionList';
import { ROUTES } from '@/utils/constants';

export const RecentTransactions = () => (
  <div>
    <div className="flex justify-between mb-4 text-sm">
      <h3>Recent Transactions</h3>
      <Link to={ROUTES.TRANSACTION} className="cursor-pointer text-blue-500">View All</Link>
    </div>
    <TransactionList />
  </div>
);
