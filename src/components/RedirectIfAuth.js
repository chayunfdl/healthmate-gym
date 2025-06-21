// --- File: src/components/RedirectIfAuth.js ---

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RedirectIfAuth = () => {
    const { isAuthenticated } = useAuth();

    // Jika sudah terotentikasi, arahkan ke halaman utama (/home)
    if (isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    // Jika belum terotentikasi, izinkan akses ke halaman login/signup
    return <Outlet />;
};

export default RedirectIfAuth;