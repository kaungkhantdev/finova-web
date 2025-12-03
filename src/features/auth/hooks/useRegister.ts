import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { emailSchema } from '@/utils/helpers/validations';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useRegisterMutation } from '../services/authApi';
import { useLazyProfileQuery } from '@/features/user/services/usersApi';
import { useCreateWalletMutation } from '@/features/wallet/services/walletApi';
import { useAuth } from './useAuth';

const schema = z
  .object({
    email: emailSchema,
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    c_password: z.string().min(6, 'Confirm password must be at least 6 characters long'),
    currency_id: z.number('Please select a currency'),
    wallet_name: z.string().min(3, 'Wallet name must be at least 3 characters long'),
  })
  .refine((data) => data.password === data.c_password, {
    path: ['c_password'],
    message: 'Passwords do not match',
  });

const useRegister = () => {
    const [registerFn, { isLoading, isError, error }] = useRegisterMutation();
    const [ create ] = useCreateWalletMutation();
    const [triggerProfile] = useLazyProfileQuery();
    
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();
    const { setAuthenticatedUser } = useAuth();

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const credentials = {
                email: data.email,
                password: data.password,
                name: data.name,
                currency_id: data.currency_id,
            };
            const result = await registerFn(credentials).unwrap();
 
            if (result?.success) {
                // Fetch profile after successful login
                const profileResult = await triggerProfile().unwrap();
                const user = profileResult?.data; // Access first user from array
                // console.log('Fetched user profile:', user, profileResult);
                if (user) {
                    setAuthenticatedUser(user);

                    // create wallet
                    await create({
                        name: data.wallet_name,
                    }).unwrap();
                }
                
                toast.success('Register successful!');
                navigate('/');
            } else {
                toast.error(result?.message || 'Register failed');
            }

        } catch (error) {
            console.error('Register error:', error);
            const errorMessage = 'Something went wrong during Register. Please try again.';
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
        setValue,
        watch
    };
}

export default useRegister;