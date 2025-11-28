import { useGetBalanceAndExchangeRateQuery } from "../services/walletApi";

const useGetBalanceExchangeRate = () => {
    const { data, error, isLoading, isSuccess, refetch } = useGetBalanceAndExchangeRateQuery(); 

    const onSubmit = async () => {
        try {
            await refetch();
        } catch (err) {
            console.log(err);
        }
    }
    return { onSubmit, data, error, isLoading, isSuccess, refetch };
}

export default useGetBalanceExchangeRate;