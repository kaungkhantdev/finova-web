import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useResetPasswordMutation } from '../services/authApi';
import { useEffect } from 'react';
import { ROUTES } from '@/utils/constants';

const schema = z
  .object({
    new_password: z.string().min(6, 'Password must be at least 6 characters long'),
    c_password: z.string().min(6, 'Confirm password must be at least 6 characters long'),
  })
  .refine((data) => data.new_password === data.c_password, {
    path: ['c_password'],
    message: 'Passwords do not match',
  });

const useResetPassword = () => {
    const { state } = useLocation();
    const [resetPassword, { isLoading, isError, error }] = useResetPasswordMutation();
    
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();
    useEffect(() => {
        if (!state?.reset_token) {
            navigate(ROUTES.AUTH + '/' + ROUTES.FORGOT_PASSWORD);
        }
    }, [state, navigate]);


    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const credentials = {
                reset_token: state.reset_token,
                new_password: data.new_password,
            };
            const result = await resetPassword(credentials).unwrap();
 
            if (result?.success) {
                navigate(ROUTES.AUTH + '/' + ROUTES.LOGIN)
                toast.success('Reset Password successful!');
            } else {
                toast.error(result?.message || 'Reset Password failed');
            }

        } catch (error) {
            console.error('Reset Password error:', error);
            const errorMessage = 'Something went wrong during Reset Password. Please try again.';
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

export default useResetPassword;