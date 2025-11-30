import { useGetByDaysQuery } from "../services/transitionsApi";

const useGetByDays = ({ days }: { days: string }) => {
    const { data, error, isLoading, isSuccess, refetch } = useGetByDaysQuery({ days });
    const onSubmit = async () => {
        try {
            await refetch();
        } catch (error) {
            console.error("Error fetching by date:", error);
        }
    }

    return { onSubmit, data, error, isLoading, isSuccess, refetch };
}

export default useGetByDays