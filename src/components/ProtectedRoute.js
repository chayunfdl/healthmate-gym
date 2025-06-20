import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Jika tidak terotentikasi, arahkan ke halaman login
        return <Navigate to="/login" replace />;
    }

    // Jika terotentikasi, render komponen anak (dalam kasus kita, MainLayout)
    return <Outlet />;
};

export default ProtectedRoute;