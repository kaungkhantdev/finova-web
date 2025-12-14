import { useState } from "react";
import { useGetAmountPercentageQuery } from "../services/transactionsApi"
import { TRANSACTION_TYPES } from "@/utils/constants";

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

    const changeTransactionType = async (type: string) => {
        const typeId = type == TRANSACTION_TYPES.INCOME.name ? TRANSACTION_TYPES.INCOME.id : TRANSACTION_TYPES.EXPENSE.id;
        setTransactionTypeId(typeId.toString());
    }
    
    return { changeTransactionType, onSubmit, data, error, isLoading, isSuccess, refetch };
}

export default useGetAmountPercentage