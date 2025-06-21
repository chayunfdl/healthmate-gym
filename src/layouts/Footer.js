import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Mendapatkan tahun saat ini untuk ditampilkan di copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            {/* <!-- Bagian Bawah Footer --> */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="text-center"> 
                        <span className="copyright-text">
                            Copyright © {currentYear} Chayun Fadila - 6026242011. All rights reserved.
                        </span> 
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;