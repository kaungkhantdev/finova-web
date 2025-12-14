import { toast } from "sonner";
import { useDeleteTransactionMutation } from "../services/transactionsApi";


const useDeleteTransaction = () => {
    const [ deleteTransaction, { isLoading }] = useDeleteTransactionMutation();

  const onSubmit = async (id: number) => {
    try {
        const payload = { id };
        const result = await deleteTransaction(payload).unwrap();
            
        if (result?.success) {
            toast.success('Transaction deleted successful!');
        } else {
            toast.error(result?.message || 'Transaction deleted failed');
        }
    } catch (error) {
        console.log(error)
    } 
  };

  return { onSubmit, isLoading };
}

export default useDeleteTransaction;