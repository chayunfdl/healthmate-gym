// --- File: src/components/GymFinder.js (Versi dengan Ikon Pin Dihapus) ---

import React, { useState, useEffect } from 'react';

// --- Komponen-komponen UI ---

const StatusDisplay = ({ icon, title, message }) => (
    <div className="text-center py-16 px-6 bg-gray-100 rounded-2xl col-span-full">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{message}</p>
    </div>
);

const GymCardSkeleton = () => (
    <div className="bg-white rounded-lg shadow-md animate-pulse overflow-hidden">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="p-4">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
    </div>
);

// === Komponen BARU: FeaturedGymCard ===
const FeaturedGymCard = ({ gym }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex transition-transform duration-300 hover:shadow-xl">
        <div className="md:w-2/5">
            <img
                src={gym.foto_url || 'https://via.placeholder.com/600x400.png?text=Image+Not+Available'}
                alt={`Foto ${gym.nama}`}
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
            />
        </div>
        <div className="p-6 md:w-3/5 flex flex-col justify-center">
            <p className="text-orange-500 font-semibold text-sm uppercase">Pilihan Terdekat</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1" title={gym.nama}>
                {gym.nama}
            </h3>
            {gym.jarak !== undefined && (
                <p className="text-lg text-gray-600 mt-2">{gym.jarak} km dari lokasi Anda</p>
            )}
            <div className="border-t my-4"></div>
            {/* INI BAGIAN YANG DIUBAH */}
            <p className="text-base text-gray-700">
                <span className="font-semibold text-gray-800">Alamat Lengkap: </span>
                <span>{gym.alamat_lengkap}</span>
            </p>
        </div>
    </div>
);


// === Komponen GymCard (Untuk Gym Lainnya) ===
const GymCard = ({ gym }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col">
        <img
            src={gym.foto_url || 'https://via.placeholder.com/400x250.png?text=Image+Not+Available'}
            alt={`Foto ${gym.nama}`}
            className="w-full h-48 object-cover"
            loading="lazy"
        />
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-gray-900 truncate" title={gym.nama}>
                {gym.nama}
            </h3>
            {gym.jarak !== undefined && (
                 <p className="text-md text-gray-600 mt-1">{gym.jarak} km</p>
            )}
            {/* INI BAGIAN YANG DIUBAH */}
            <p className="text-sm text-gray-700 mt-4">
                <span className="font-semibold text-gray-800">Alamat Lengkap: </span>
                <span>{gym.alamat_lengkap}</span>
            </p>
        </div>
    </div>
);


// === Komponen Utama: GymFinder ===
const GymFinder = () => {
    const [gyms, setGyms] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_BASE_URL = process.env.NODE_ENV === 'production'
        ? 'https://healthmate-backend-new.onrender.com/api'
        : 'http://localhost:5000/api';

    // useEffect untuk fetchLocations tidak berubah
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

    // useEffect untuk fetchGymsByLocation tidak berubah
    useEffect(() => {
        if (!selectedLocation) return;
        const fetchGymsByLocation = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${API_BASE_URL}/gym/search/${selectedLocation}`);
                if (!response.ok) throw new Error(`Gagal mengambil data gym`);
                const data = await response.json();
                setGyms(data);
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
                
                {/* Header dan Kontrol Pencarian tidak berubah */}
                <div className="text-center mb-12">
                    <h5 className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">FIND YOUR GYM</h5>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Temukan Gym di Lokasi Anda</h2>
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

                {/* Konten Utama: Daftar Gym */}
                <div className="mt-12">
                    {/* Status Loading, Error, dan Pesan Awal */}
                    {error && <StatusDisplay icon="😢" title="Terjadi Kesalahan" message={error} />}
                    {!selectedLocation && !error && <StatusDisplay icon="👇" title="Mulai Mencari" message="Silakan pilih lokasi di atas untuk menampilkan daftar gym." />}
                    {loading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <GymCardSkeleton /> <GymCardSkeleton /> <GymCardSkeleton />
                        </div>
                    )}
                    {!loading && selectedLocation && gyms.length === 0 && !error && (
                        <StatusDisplay icon="🤷‍♂️" title="Tidak Ada Hasil" message={`Kami tidak dapat menemukan gym di ${selectedLocation}. Coba lokasi lain.`} />
                    )}
                    
                    {!loading && gyms.length > 0 && (
                        <div>
                            {/* Tampilkan Featured Card untuk gym pertama */}
                            <FeaturedGymCard gym={gyms[0]} />

                            {/* Jika ada lebih dari satu gym, tampilkan sisanya dalam grid */}
                            {gyms.length > 1 && (
                                <>
                                    <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
                                        Gym Lainnya di {selectedLocation}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {/* Gunakan .slice(1) untuk mengambil semua gym KECUALI yang pertama */}
                                        {gyms.slice(1).map((gym) => (
                                            <GymCard key={gym.id} gym={gym} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GymFinder;