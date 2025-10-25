import { userApiService } from '@/features/user/services/userApi';
import { userActions } from '@/features/user/store';
import type { User } from '@/features/user/type';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from './AuthContext';
import type { RootState } from '@/store';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();
  
  // Get user from Redux store instead of local state
  const user = useSelector((state: RootState) => state.user.user); // Adjust selector based on your store structure

  const setAuthenticatedUser = useCallback((user: User) => {
    dispatch(userActions.setUser(user));
  }, [dispatch]);

  const initialize = useCallback(async () => {
    try {
      const result = await userApiService.getUser();
      if (result) {
        dispatch(userActions.setUser(result.data));
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Failed to initialize user:', error);
      throw new Error(error);
    } finally {
      setIsInitialized(true);
    }
  }, [dispatch]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isInitialized,
        setAuthenticatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};