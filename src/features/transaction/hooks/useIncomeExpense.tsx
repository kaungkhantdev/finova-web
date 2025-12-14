import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { useCreateTransactionMutation } from '../services/transactionsApi';

const schema = z.object({
    amount: z.string('Please enter an amount'),
    account_id: z.number('Please select an account'),
    category_id: z.number('Please select a category'),
    name: z.string('Please enter a name'),
    description: z.string().optional(),
});

const useIncomeExpense = ({ transactionTypeId }: { transactionTypeId: number }) => {
    const [create, { isLoading, isError, error }] = useCreateTransactionMutation();
    
    const { register, watch, handleSubmit, formState: { errors }, setValue, reset } = useForm<z.infer<typeof schema>>({
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