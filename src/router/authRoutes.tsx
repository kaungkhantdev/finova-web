import useAuth from '@/contexts/auth/useAuth';
import { ROUTES } from '@/utils/constants';
import React from 'react';
import { Navigate, Outlet } from 'react-router';

export const AuthRoutes: React.FC = () => {
  const { isAuthenticated, isInitialized } = useAuth();
  
  // Wait for auth to initialize
  if (!isInitialized) {
    return <div>Loading...</div>;
  }
  
  console.log('AuthRoutes - isAuthenticated:', isAuthenticated);
  
  // If authenticated, redirect to home/dashboard
  return isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};