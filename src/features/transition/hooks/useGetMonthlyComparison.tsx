import { useGetMonthlyComparisonQuery } from "../services/transitionsApi";

const useGetMonthlyComparison = () => {
    const { data, error, isLoading, isSuccess, refetch } = useGetMonthlyComparisonQuery();
    const onSubmit = async () => {
        try {
            await refetch();
        } catch (error) {
            console.error("Error fetching amount percentage:", error);
        }
    }

    return { onSubmit, data, error, isLoading, isSuccess, refetch };
}

export default useGetMonthlyComparison