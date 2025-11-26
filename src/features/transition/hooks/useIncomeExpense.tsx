import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { useCreateTransactionMutation } from '../services/transitionsApi';

const schema = z.object({
    amount: z.string(),
    account_id: z.number(),
    category_id: z.number(),
    name: z.string(),
    description: z.string().optional(),
});

const useIncomeExpense = ({ transactionTypeId }: { transactionTypeId: number }) => {
    const [create, { isLoading, isError, error, reset }] = useCreateTransactionMutation();
    
    const { register, watch, handleSubmit, formState: { errors }, setValue } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            console.log('data', data);

            const payload = {
                ...data,
                transaction_type_id: transactionTypeId
            };
            const result = await create(payload).unwrap();
            console.log('result', result)
 
            if (result?.success) {
                toast.success('Transaction added successful!');
            } else {
                toast.error(result?.message || 'Transaction adding failed');
            }

        } catch (error) {
            console.error('Transaction adding error:', error);
            const errorMessage = 'Something went wrong during Transaction adding. Please try again.';
            toast.error(errorMessage);
        } finally {
            reset();
      
            // Also manually clear using setValue as backup
            setValue('name', '');
            setValue('amount', '');
            setValue('category_id', 0);
            setValue('description', '');
        }
    };

    return { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        onSubmit, 
        isLoading, 
        isError, 
        error,
        watch,
        setValue,
    };
}

export default useIncomeExpense;