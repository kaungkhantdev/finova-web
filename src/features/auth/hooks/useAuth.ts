import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '@/features/user/store';
import type { User } from '@/features/user/type';
import type { RootState } from '@/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const isInitialized = useSelector((state: RootState) => state.user.isInitialized);
  
  const setAuthenticatedUser = useCallback(
    (user: User) => {
      dispatch(userActions.setUser(user));
    },
    [dispatch]
  );

  return {
    user,
    isAuthenticated: !!user,
    isInitialized,
    setAuthenticatedUser,
  };
};