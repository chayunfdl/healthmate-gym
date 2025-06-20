import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IMAGES } from '../constants/theme';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Ambil state loading dan error dari context
    const { signup, loading, error } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert('Please fill all fields');
            return;
        }
        // Fungsi signup sekarang async
        await signup(name, email, password);
    };

    return (
        <div className="page-content">
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                 <div className="row justify-content-center w-100">
                    <div className="col-md-6 col-lg-5 col-xl-4">
                        <div className="card">
                             <div className="card-header text-center">
                                <Link to="/"><img src={IMAGES.logo} alt="Logo" style={{width: '150px'}}/></Link>
                                <h4 className="mt-3">Create an Account</h4>
                            </div>
                            <div className="card-body">
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="hello@example.com"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Create a Password"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                            {loading ? 'Creating Account...' : 'Sign Up'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center">
                                <p className="mb-0">Already have an account? <Link to="/login">Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;