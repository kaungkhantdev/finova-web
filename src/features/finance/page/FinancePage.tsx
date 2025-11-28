import BalanceExchangeRate from "../components/BalanceExchangeRate";
import { GreetingHeader } from "../components/GreetingHeader";
import { RateChart } from "../components/RateChart";
import { RecentTransactions } from "../components/RecentTransactions";
import { RightPanel } from "../components/RightPanel";

const FinancePage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-8 lg:p-0">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="lg:py-6 flex items-center justify-center w-full 2xl:min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
              <GreetingHeader />

              {/* Balance & Exchange Rates */}
              <div className="md:col-span-2">
                <BalanceExchangeRate />
              </div>

              {/* Recent Transactions */}
              <div className="md:col-span-3">
                <RecentTransactions />
              </div>

              {/* Rate Chart */}
              <div className="md:col-span-5">
                <RateChart />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <RightPanel />
      </div>
    </div>
  );
};

export default FinancePage;
