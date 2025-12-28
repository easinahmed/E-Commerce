import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import Loading from './Loading';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user, isLoading } = useSelector((state: RootState) => state.user);

    if (isLoading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
