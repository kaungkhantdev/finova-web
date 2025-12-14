import Loading from '@/components/common/Loading';
import { ROUTES } from '@/utils/constants';
import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '@/features/auth';

export const AuthRoutes: React.FC = () => {
  const { isAuthenticated, isInitialized } = useAuth();
  
  // Wait for auth to initialize
  if (!isInitialized) {
    return <Loading />;
  }
  
  console.log('AuthRoutes - isAuthenticated:', isAuthenticated);
  
  // If authenticated, redirect to home/dashboard
  return isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};