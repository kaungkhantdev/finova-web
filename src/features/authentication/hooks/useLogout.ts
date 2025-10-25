import { useNavigate } from 'react-router';
import { authApiService } from '../services/authApi';
import { userActions } from '@/features/user/store';
import { useDispatch } from 'react-redux';

const useLogout = () => {
    // Use navigate for redirection
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async () => {
        console.log('logout')
        const result = await authApiService.logout();
        
        if (result && result.status.toString() == 'success') {
            dispatch(userActions.clearUser());
            navigate('/');
        }
    };

    return { onSubmit };
}

export default useLogout;