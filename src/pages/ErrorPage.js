import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import Header from '../layouts/Header';

const ErrorPage = () => {
    return (
        <>
            <div className="page-wraper">
                <Header />
                <div className="page-content bg-white">		
                    <section className="error-page" data-text="ERROR" style={{backgroundImage: "url("+ IMAGES.BgAppoint+")"}}>
                        <div className="container">
                            <div className="inner-content text-center" data-text="">
                                <div className="dz_error">404</div>
                                <h2 className="error-head">Halaman Ini Memerlukan Login</h2>
                                <p style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
                                        Untuk mengakses konten ini, Anda harus masuk ke akun Anda terlebih dahulu.
                                    </p>
                                <Link to={"/login"} className="btn btn-primary btn-skew"><span>LOGIN SEKARANG</span></Link>
                            </div>
                        </div>
                    </section>
                
                </div>
                <footer className="site-footer style-1 bg-img-fix footer-action" id="footer">
                    <div className="footer-bottom">
                        <div className="text-center"> 
                            <span className="copyright-text">Copyright © 2025 Chayun Fadila - 6026242011. All rights reserved.</span> 
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ErrorPage;