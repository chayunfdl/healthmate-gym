import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://healthmate-backend-new.onrender.com/api'
    : 'http://localhost:5000/api';

const handleApiResponse = async (response) => {
    const responseText = await response.text();
    let data;
    try {
        data = responseText ? JSON.parse(responseText) : {};
    } catch (e) {
        throw new Error(responseText || "An unknown error occurred.");
    }
    if (!response.ok) {
        const errorMessage = data.message || data.error || (Array.isArray(data.errors) ? data.errors[0].msg : null);
        throw new Error(errorMessage || `Request failed with status ${response.status}`);
    }
    return data;
};

export const AuthProvider = ({ children }) => {
    // Gunakan 'authToken' sebagai key agar konsisten dengan yang Anda berikan
    const [token, setToken] = useState(localStorage.getItem('authToken')); 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                setToken(storedToken);
            }
            // Hentikan loading setelah pengecekan selesai
            setLoading(false);
        };
        verifyToken();
    }, []);

    const login = async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await handleApiResponse(response);
            setToken(data.token);
            setUser(data.user || null); // Simpan info user jika ada
            localStorage.setItem('authToken', data.token);
            navigate('/home'); // <-- UBAH KE /home
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    const signup = async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            await handleApiResponse(response); // Cukup periksa apakah sukses
            alert('Registration successful! Please log in.');
            navigate('/login'); // Arahkan ke login setelah daftar
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        navigate('/login'); // <-- UBAH KE /login
    };

    // isAuthenticated dihitung berdasarkan keberadaan token
    const isAuthenticated = !!token;

    const value = {
        token, user, isAuthenticated, loading, error,
        login, signup, logout,
    };
    
    // Hapus kondisi loading yang lama, biarkan routing yang mengatur
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};