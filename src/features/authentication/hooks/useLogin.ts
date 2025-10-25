import { 
    // use, 
    // useContext, 
    useState 
} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { emailSchema } from '@/utils/helpers/validations';
// import { useNavigate } from 'react-router';
// import { AuthContext } from '@/contexts';
// import type { User } from '@/features/user/type';
import { toast } from 'sonner';
import { useLoginMutation } from '../services/authApi';

const schema = z.object({
    email: emailSchema,
    password: z.string(),
});

const useLogin = () => {
    const [login, { isLoading, isError, error }] = useLoginMutation()
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
            resolver: zodResolver(schema),
        });

    // Initialize state and context
    const [data, setData] = useState<z.infer<typeof schema>>();

    // Use navigate for redirection
    // const navigate = useNavigate();

    // // Access the AuthContext to set the authenticated user
    // const { setAuthenticatedUser } = useContext(AuthContext);

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            console.log('Submitting login with data:', data);
            const credentials = {
                email: data.email,
                password: data.password,
            };
            const result = await login(credentials).unwrap();
            console.log('Login successful:', result);
 
            // if (result && result.data) {
            //     const userResponse = await userApiService.getUser();
            
            //     if (userResponse.data) {
            //         setAuthenticatedUser(userResponse.data as unknown as User);
            //     }
            //     navigate('/');
            // } else {
            //     toast.error(result?.message + 'error ');
            // }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Login error:', error);
            toast.error(error?.response?.data?.message + ' Please try again.' || 'Unexpected error occurred.');
        }
    };

    return { register, handleSubmit, data, setData, formState: { errors }, onSubmit, isLoading, isError, error };
}

export default useLogin;