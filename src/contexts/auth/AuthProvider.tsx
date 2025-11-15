import { userActions } from '@/features/user/store';
import type { User } from '@/features/user/type';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from './AuthContext';
import type { RootState } from '@/store';
import { useLazyProfileQuery } from '@/features/user/services/usersApi';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();
  const [triggerProfile] = useLazyProfileQuery();
  
  
  // Get user from Redux store instead of local state
  const user = useSelector((state: RootState) => state.user.user); // Adjust selector based on your store structure

  const setAuthenticatedUser = useCallback((user: User) => {
    dispatch(userActions.setUser(user));
  }, [dispatch]);

  const initialize = useCallback(async () => {
    try {
      const profileResult = await triggerProfile().unwrap();
      const user = profileResult?.data;
      if (user) {
        dispatch(userActions.setUser(user));
      }
    } catch (error) {
      console.error('Failed to initialize user:', error);
      dispatch(userActions.clearUser());
    } finally {
      setIsInitialized(true);
    }
  }, [dispatch, triggerProfile]);

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