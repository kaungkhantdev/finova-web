import { useGetAllCurrencyNoPaginationQuery } from "../services/currencyApi";

const useGetAllCurrencyNoPagination = () => {
    const { data, isLoading, isError, error, refetch } = useGetAllCurrencyNoPaginationQuery();

    const onSubmit = async () => {
        const result = await refetch().unwrap();
        console.log(result)
    };

    return { onSubmit, data, isLoading, isError, error };
}

export default useGetAllCurrencyNoPagination;