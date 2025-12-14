import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { emailSchema } from '@/utils/helpers/validations';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useForgotPasswordMutation } from '../services/authApi';
import { ROUTES } from '@/utils/constants';

const schema = z.object({
    email: emailSchema,
});

const useForgotPassword = () => {
    const [ forgotPassword, { isLoading, isError, error }] = useForgotPasswordMutation();
    
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const credentials = {
                email: data.email,
            };
            const result = await forgotPassword(credentials).unwrap();
 
            if (result?.success) {
                toast.success('Forgot Password successful!');
                navigate(ROUTES.AUTH+'/'+ROUTES.VERIFY_OTP, { state: { email: data.email } } );
            } else {
                toast.error(result?.message || 'Forgot Password failed');
            }
        } catch (error) {
            console.error('Forgot Password error:', error);
            const errorMessage = 'Something went wrong during Forgot Password. Please try again.';
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

export default useForgotPassword;