// --- File: src/pages/Services.js (Versi Final yang Diperbaiki) ---

import React from 'react';
import PageTitle from '../elements/PageTitle';
import GymFinder from '../components/GymFinder'; // <-- Impor komponen GymFinder yang benar

const Services = () => {
    return (
        <>
            {/* 
              Catatan: Header utama (dengan logo dan menu navigasi) 
              biasanya datang dari komponen Layout utama di file App.js atau Layout.js.
              Kode di bawah ini adalah untuk KONTEN HALAMAN di bawah header tersebut.
            */}
            <div className="page-content bg-white">
                
                {/* Bagian ini akan menampilkan judul "Gym" dan breadcrumb "Services > Gym" */}
                <PageTitle activePage="Gym" parentTitle="Services" />
                
                {/* 
                  Di sini kita memanggil komponen GymFinder yang telah kita bangun.
                  Komponen ini akan menampilkan form pencarian dan daftar gym.
                */}
                <GymFinder />
                
            </div>   
        </>
    );
};

export default Services;