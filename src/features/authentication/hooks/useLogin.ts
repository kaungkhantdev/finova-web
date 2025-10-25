import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { emailSchema } from '@/utils/helpers/validations';
import { useNavigate } from 'react-router';
import { AuthContext } from '@/contexts';
import { authApiService } from '../services/authApi';
import { userApiService } from '@/features/user/services/usersApi';
import type { User } from '@/features/user/type';
import { toast } from 'sonner';


const schema = z.object({
    email: emailSchema,
    password: z.string(),
});

const useLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
            resolver: zodResolver(schema),
        });

    // Initialize state and context
    const [data, setData] = useState<z.infer<typeof schema>>();

    // Use navigate for redirection
    const navigate = useNavigate();

    // Access the AuthContext to set the authenticated user
    const { setAuthenticatedUser } = useContext(AuthContext);

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const result = await authApiService.login(data.email, data.password);
 
            if (result && result.data) {
                const userResponse = await userApiService.getUser();
            
                if (userResponse.data) {
                    setAuthenticatedUser(userResponse.data as unknown as User);
                }
                navigate('/');
            } else {
                toast.error(result?.message + 'error ');
            }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Login error:', error);
            toast.error(error?.response?.data?.message + ' Please try again.' || 'Unexpected error occurred.');
        }
    };

    return { register, handleSubmit, data, setData, formState: { errors }, onSubmit };
}

export default useLogin;