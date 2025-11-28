import { useState } from "react";
import { useGetAmountPercentageQuery } from "../services/transitionsApi"

const useGetAmountPercentage = (initialTypeId: string) => {
    const [transactionTypeId, setTransactionTypeId] = useState(initialTypeId);
    const { data, error, isLoading, isSuccess, refetch } = useGetAmountPercentageQuery({ transactionTypeId });

    const onSubmit = async () => {
        try {
            await refetch();
        } catch (error) {
            console.error("Error fetching amount percentage:", error);
        }
    }

    const changeTransactionType = async (tTypeId: string) => {
        setTransactionTypeId(tTypeId);
    }
    
    return { changeTransactionType, onSubmit, data, error, isLoading, isSuccess, refetch };
}

export default useGetAmountPercentage