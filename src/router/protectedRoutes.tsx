import { useAuth } from '@/features/authentication';
import { ROUTES } from '@/utils/constants';
import React from 'react';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.AUTH + "/" + ROUTES.LOGIN} replace />;
};
