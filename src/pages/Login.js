import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IMAGES } from '../constants/theme';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Ambil state loading dan error dari context
    const { login, loading, error } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Please enter username and password');
            return;
        }
        await login(username, password);
    };

    return (
        <div className="page-content">
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="row justify-content-center w-100">
                    <div className="col-md-6 col-lg-5 col-xl-4">
                        <div className="card">
                             <div className="card-header text-center">
                                <Link to="/"><img src={IMAGES.logo} alt="Logo" style={{width: '150px'}}/></Link>
                                <h4 className="mt-3">Login Your Account</h4>
                            </div>
                            <div className="card-body">
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Your Username"
                                        />
                                    </div>
                                    {/* --- INI BAGIAN YANG DIPERBAIKI --- */}
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Your Password"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                            {loading ? 'Signing In...' : 'Sign In'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center">
                                <p className="mb-0">Don't have an account? <Link to="/signup">Sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;