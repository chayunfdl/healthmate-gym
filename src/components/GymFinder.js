// --- File: src/components/GymFinder.js (Versi Tanpa API Key) ---

import React, { useState, useEffect } from 'react';

// --- Komponen-komponen UI tidak berubah ---

const StatusDisplay = ({ icon, title, message }) => (
    <div className="text-center py-16 px-6 bg-gray-100 rounded-2xl">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{message}</p>
    </div>
);

const GymCardSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-md p-5 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-300 rounded w-32 mt-4"></div>
    </div>
);

const GymCard = ({ gym, onCardClick, isActive }) => (
    <div 
        onClick={() => onCardClick(gym)}
        className={`bg-white rounded-2xl shadow-md p-5 transition-all duration-300 cursor-pointer ${isActive ? 'ring-2 ring-orange-500 shadow-xl' : 'hover:shadow-lg hover:-translate-y-1'}`}
    >
        <h3 className="text-lg font-bold text-gray-900">{gym.nama}</h3>
        <p className="text-gray-600 mt-1 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{gym.location}</span>
        </p>
        <a
            href={gym.gmaps_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 inline-flex items-center bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors self-start text-sm"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Buka di Peta
        </a>
    </div>
);

// === Komponen Utama: GymFinder ===
const GymFinder = () => {
    const [gyms, setGyms] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeGym, setActiveGym] = useState(null);

    // Variabel API Key sudah tidak diperlukan lagi
    // const GOOGLE_MAPS_API_KEY = "INI TIDAK DIPAKAI";

    const API_BASE_URL = process.env.NODE_ENV === 'production'
        ? 'https://healthmate-backend-new.onrender.com/api'
        : 'http://localhost:5000/api';

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/location`);
                if (!response.ok) throw new Error(`Gagal memuat lokasi`);
                const data = await response.json();
                setLocations(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchLocations();
    }, [API_BASE_URL]);

    useEffect(() => {
        setGyms([]);
        setActiveGym(null); 
        
        if (!selectedLocation) {
            return;
        }

        const fetchGymsByLocation = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE_URL}/gym/search/${selectedLocation}`);
                if (!response.ok) throw new Error(`Gagal mengambil data gym`);
                const data = await response.json();
                setGyms(data);
                if (data.length > 0) {
                    setActiveGym(data[0]);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchGymsByLocation();
    }, [selectedLocation, API_BASE_URL]);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                
                {/* Header dan Kontrol Pencarian */}
                <div className="text-center mb-12">
                    <h5 className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">FIND YOUR GYM</h5>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Temukan Gym Terdekat Anda</h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
                        <label htmlFor="location-select" className="flex items-center mb-4 text-gray-700 font-medium">
                            <span className="text-red-500 mr-2" style={{ fontSize: '20px' }}>📍</span>
                            Pilih Lokasi Anda:
                        </label>
                        <select id="location-select" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all bg-gray-50" disabled={locations.length === 0}>
                            <option value="">-- Pilih Kota/Kabupaten --</option>
                            {locations.map((loc) => (<option key={loc.id} value={loc.name}>{loc.name}</option>))}
                        </select>
                    </div>
                </div>

                {/* Konten Utama (Daftar & Peta) */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        {/* Status Display */}
                        {error && <StatusDisplay icon="😢" title="Terjadi Kesalahan" message={error} />}
                        {!selectedLocation && !error && <StatusDisplay icon="👇" title="Mulai Mencari" message="Silakan pilih lokasi di atas untuk menampilkan daftar gym yang tersedia." />}
                        {loading && (
                             <div className="space-y-4"><h3 className="text-2xl font-bold text-gray-900 animate-pulse">Mencari gym...</h3><GymCardSkeleton /><GymCardSkeleton /><GymCardSkeleton /></div>
                        )}
                        {!loading && selectedLocation && gyms.length === 0 && !error && <StatusDisplay icon="🤷‍♂️" title="Tidak Ada Hasil" message={`Kami tidak dapat menemukan gym di ${selectedLocation}. Coba lokasi lain.`} />}
                        
                        {!loading && gyms.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Hasil di {selectedLocation}
                                </h3>
                                <div className="space-y-6">
                                    {gyms.map((gym) => (
                                        <div key={gym.id}>
                                            <p className="text-gray-700 mb-2 text-base">
                                                Tampilan gym {gym.nama}
                                            </p>
                                            <GymCard 
                                                gym={gym} 
                                                onCardClick={setActiveGym}
                                                isActive={activeGym && activeGym.id === gym.id}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* === Kolom Peta dengan Google Maps iFrame TANPA API KEY === */}
                    <div className="lg:col-span-7 mt-8 lg:mt-0">
                       <div className="h-[600px] lg:sticky lg:top-24 rounded-2xl shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                            {activeGym ? (
                                <iframe
                                    key={activeGym.id} // <-- Menambahkan key agar iframe dirender ulang saat gym berubah
                                    title={`Peta Lokasi ${activeGym.nama}`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    // === INI ADALAH PERUBAHAN UTAMA ===
                                    src={`https://maps.google.com/maps?q=${activeGym.latitude},${activeGym.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                >
                                </iframe>
                            ) : (
                                <p className="text-gray-500 font-medium px-4 text-center">Pilih gym dari daftar untuk melihat lokasi di peta.</p>
                            )}
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GymFinder;