import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { useCreatePostMutation } from '../services/transitionsApi';

const schema = z.object({
    transaction_type_id: z.number(),
    amount: z.string(),
    account_id: z.number(),
    category_id: z.number(),
    name: z.string(),
    description: z.string().optional(),
});

const useIncomeExpense = () => {
    const [create, { isLoading, isError, error }] = useCreatePostMutation();
    
    const { register, watch, handleSubmit, formState: { errors }, setValue } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const payload = data;
            const result = await create(payload).unwrap();
 
            if (result?.success) {
                toast.success('Transaction added successful!');
            } else {
                toast.error(result?.message || 'Login failed');
            }

        } catch (error) {
            console.error('Login error:', error);
            const errorMessage = 'Something went wrong during login. Please try again.';
            toast.error(errorMessage);
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
        setValue
    };
}

export default useIncomeExpense;