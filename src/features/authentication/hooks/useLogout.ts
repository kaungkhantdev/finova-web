import { useNavigate } from 'react-router';
import { userActions } from '@/features/user/store';
import { useDispatch } from 'react-redux';
import { ROUTES } from '@/utils/constants';
import { useLogoutMutation } from '../services/authApi';
import { baseApi } from '@/services/api/baseApi';

const useLogout = () => {
    // Use navigate for redirection
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [logout, { isLoading, isError, error }] = useLogoutMutation();

    const onSubmit = async () => {
        console.log('logout')
        const result = await logout().unwrap();
        dispatch(baseApi.util.resetApiState());
        
        if (result && result.success) {
            dispatch(userActions.clearUser());
            navigate(`${ROUTES.AUTH+"/"+ROUTES.LOGIN}`);
        }
    };

    return { onSubmit, isLoading, isError, error };
}

export default useLogout;