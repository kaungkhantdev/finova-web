import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { emailSchema } from '@/utils/helpers/validations';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useLoginMutation } from '../services/authApi';
import { useLazyProfileQuery } from '@/features/user/services/usersApi';
import useAuth from '@/contexts/auth/useAuth';

const schema = z.object({
    email: emailSchema,
    password: z.string(),
});

const useLogin = () => {
    const [login, { isLoading, isError, error }] = useLoginMutation();
    const [triggerProfile] = useLazyProfileQuery();
    
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();
    const { setAuthenticatedUser } = useAuth();

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const credentials = {
                email: data.email,
                password: data.password,
            };
            const result = await login(credentials).unwrap();
 
            if (result?.success) {
                // Fetch profile after successful login
                const profileResult = await triggerProfile().unwrap();
                const user = profileResult?.data; // Access first user from array
                // console.log('Fetched user profile:', user, profileResult);
                if (user) {
                    setAuthenticatedUser(user);
                }
                
                toast.success('Login successful!');
                navigate('/');
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
        error 
    };
}

export default useLogin;