import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLazyProfileQuery } from '@/features/user/services/usersApi';
import { userActions } from '@/features/user/store';

interface UseInitializeAuthReturn {
  isInitialized: boolean;
  isLoading: boolean;
  error: Error | null;
}

export const useInitializeAuth = (): UseInitializeAuthReturn => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const dispatch = useDispatch();
  const [triggerProfile] = useLazyProfileQuery();

  useEffect(() => {
    const initialize = async () => {
      try {
        setIsLoading(true);
        const profileResult = await triggerProfile().unwrap();
        const user = profileResult?.data;
        
        if (user) {
          dispatch(userActions.setUser(user));
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to initialize user');
        console.error('Failed to initialize user:', error);
        setError(error);
        dispatch(userActions.clearUser());
      } finally {
        setIsInitialized(true);
        setIsLoading(false);
      }
    };

    initialize();
  }, [dispatch, triggerProfile]);

  return { isInitialized, isLoading, error };
};