// components/ProtectedRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/auth/authService';

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <h2>Access Denied</h2>;
  }

  return <>{children}</>;
};

export const PublicRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
  const user = getCurrentUser();

  if (user) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return <>{children}</>;
};
