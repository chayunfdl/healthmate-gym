import React from 'react';
import { Link } from 'react-router-dom';
import GymFinder from '../components/GymFinder'; // Import komponen utama kita

// Ini adalah komponen banner yang mungkin ada di tema Anda, 
// kita buat versi sederhananya di sini.
const PageBanner = ({ title, breadcrumb }) => (
    <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{backgroundImage: "url(images/background/bg3.jpg)"}}>
        <div className="container">
            <div className="dz-bnr-inr-entry">
                <h1>{title}</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{breadcrumb}</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
);


function FindGym() {
  return (
    <>
      <PageBanner title="Cari Gym Terdekat" breadcrumb="Cari Gym" />
      
      <section className="content-inner">
        <div className="container">
            {/* Di sinilah kita menempatkan komponen pencarian gym */}
            <GymFinder />
        </div>
      </section>
    </>
  );
}

export default FindGym;