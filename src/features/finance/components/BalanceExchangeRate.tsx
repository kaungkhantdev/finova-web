import { useGetBalanceExchangeRate } from "@/features/wallet";
import { BalanceCard } from "./BalanceCard";
import { ExchangeRateCards } from "./ExchangeRateCards";

const BalanceExchangeRate = () => {
  const { data: balanceData } = useGetBalanceExchangeRate();
  const {
    from_currency = 'USD',
    from_currency_symbol = '$',
    original_amount = '0.00',
    formatted_original_amount = '0.00',
    formatted_conversions = { USD: '0.00', EUR: '0.00', GBP: '0.00'}
  } = balanceData?.data || {};

  return (
    <div>
        <BalanceCard 
          from_currency={from_currency}
          from_currency_symbol={from_currency_symbol}
          original_amount={original_amount}
          formatted_original_amount = {formatted_original_amount}
        />
        <ExchangeRateCards conversions={formatted_conversions} />
    </div>
  );
};

export default BalanceExchangeRate;