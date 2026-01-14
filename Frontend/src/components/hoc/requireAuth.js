import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

/**
 * Higher Order Component that protects routes requiring authentication
 * Redirects to home page if user is not authenticated
 */
export default function requireAuth(Component) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return <Component {...props} />;
  };
}

