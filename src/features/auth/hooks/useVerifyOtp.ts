import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useForgotPasswordMutation, useVerifyOtpMutation } from '../services/authApi';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/utils/constants';

const schema = z.object({
    otp: z.string().length(6, "OTP must be 6 digits")
});

const COUNTDOWN_TIME = 45; // 45 seconds

const useVerifyOtp = () => {
    const { state } = useLocation();
    const [verifyOtp, { isLoading, isError, error }] = useVerifyOtpMutation();
    const [forgotPassword, { isLoading: isResending }] = useForgotPasswordMutation();
    const [countdown, setCountdown] = useState(COUNTDOWN_TIME);
    const [canResend, setCanResend] = useState(false);
    
    const { setValue, watch, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            otp: ''
        }
    });

    const navigate = useNavigate();
    
    useEffect(() => {
        if (!state?.email) {
            navigate(ROUTES.AUTH + '/' + ROUTES.FORGOT_PASSWORD);
        }
    }, [state, navigate]);

    // Countdown timer
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [countdown]);

    const onSubmit = async (data: z.infer<typeof schema>) => {
        try {
            const credentials = {
                email: state.email,
                otp: data.otp,
            };
            const result = await verifyOtp(credentials).unwrap();
 
            if (result?.success) {
                toast.success('OTP verified successfully!');
                navigate(ROUTES.AUTH + '/' + ROUTES.RESET_PASSWORD, { 
                    state: { reset_token: result?.data?.reset_token } 
                });
            } else {
                toast.error(result?.message || 'OTP verification failed');
            }
        } catch (error) {
            console.error('OTP verification error:', error);
            toast.error('Something went wrong. Please try again.');
            navigate(ROUTES.AUTH + '/' + ROUTES.FORGOT_PASSWORD);
        }
    };

    const resendCode = async () => {
        if (!canResend || isResending) return;

        try {
            const credentials = {
                email: state.email,
            };
            const result = await forgotPassword(credentials).unwrap();
 
            if (result?.success) {
                toast.success('OTP code resent successfully!');
                
                // Reset countdown
                setCountdown(COUNTDOWN_TIME);
                setCanResend(false);
                
                // Clear the OTP input
                setValue("otp", "");
            } else {
                toast.error(result?.message || 'Failed to resend OTP');
            }
        } catch (error) {
            console.error('OTP resend error:', error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    return { 
        setValue,
        watch,
        resendCode,
        handleSubmit, 
        formState: { errors }, 
        onSubmit, 
        isLoading, 
        isResending,
        isError, 
        error,
        countdown,
        canResend
    };
}

export default useVerifyOtp;