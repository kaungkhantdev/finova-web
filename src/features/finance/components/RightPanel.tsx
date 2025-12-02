import { TrendingUp, TrendingDown } from 'lucide-react';
import { ChartPieDonutText } from './ChartPieDonutText';
import { RightPanelHeader } from './RightPanelHeader';
import { AddExpense, AddIncome, useGetAmountPercentage } from '@/features/transition';
import { TRANSACTION_TYPES } from '@/utils/constants';
import Loading from '@/components/common/Loading';
import useAuth from '@/contexts/auth/useAuth';
import useGetMonthlyComparison from '@/features/transition/hooks/useGetMonthlyComparison';

export const RightPanel = () => {
  const { user } = useAuth();
  const { data, changeTransactionType, isLoading } = useGetAmountPercentage(TRANSACTION_TYPES.INCOME.id.toString());
  const { data: monthlyComparisonData } = useGetMonthlyComparison();

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 lg:py-6 flex items-center justify-center dark:bg-card bg-white w-full 2xl:min-h-screen rounded-3xl lg:rounded-none">
      <div>
        <RightPanelHeader
          currencySymbol={user?.currency_symbol}
          dailyAmount={data?.data?.daily_amount?.daily_amount}
          weeklyAmount={data?.data?.weekly_amount?.weekly_amount}
          monthlyAmount={data?.data?.monthly_amount?.monthly_amount}
          handleChangeTransactionType={changeTransactionType}
        />
        <ChartPieDonutText data={data?.data} />

        <div className="flex space-x-6 justify-between mt-8 lg:mt-16">
          {/* Income */}
          <div className="flex flex-col justify-end">
            <div className="flex items-center mb-4">
              <span className="text-green-600 mr-2">+ {monthlyComparisonData?.data?.income_change_percent} %</span>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">{user?.currency_symbol + ' ' + monthlyComparisonData?.data?.income_difference}</h3>
            <span className="text-sm text-gray-500">Monthly income - month diff</span>
            <div className="mt-4">
                <AddIncome/>
            </div>
          </div>

          {/* Expense */}
          <div className="flex flex-col justify-end">
            <div className="flex items-center mb-4">
              <span className="text-red-600 mr-2">-  {monthlyComparisonData?.data?.expense_change_percent} %</span>
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-xl font-bold">{user?.currency_symbol + ' ' + monthlyComparisonData?.data?.expense_difference}</h3>
            <span className="text-sm text-gray-500">Monthly expense - month diff</span>
            <div className="mt-4">
                <AddExpense/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
