// --- File: src/components/GymFinder.js (Versi Lengkap yang Sudah Diperbaiki) ---

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix untuk ikon marker default Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Placeholder gambar untuk gym (tidak berubah)
const placeholderImages = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
];

// Komponen StatusDisplay (tidak berubah)
const StatusDisplay = ({ message }) => (
    <div className="text-center py-10">
        <p className="text-gray-600 text-lg">{message}</p>
    </div>
);

// Komponen ChangeMapView (tidak berubah)
const ChangeMapView = ({ gyms }) => {
    const map = useMap();
    useEffect(() => {
        if (gyms && gyms.length > 0) {
            const bounds = new L.LatLngBounds(gyms.map(gym => [gym.latitude, gym.longitude]));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [gyms, map]);
    return null;
}

const GymFinder = () => {
    const [gyms, setGyms] = useState([]);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // --- PERBAIKAN KRUSIAL: URL API dibuat dinamis ---
    const API_BASE_URL = process.env.NODE_ENV === 'production'
        ? 'https://healthmate-backend-new.onrender.com/api' // URL Backend Anda di Render (tanpa slash di akhir)
        : 'http://localhost:5000/api'; // URL untuk pengembangan lokal (tanpa slash di akhir)

    // Mengambil daftar lokasi
    useEffect(() => {
        const fetchLocations = async () => {
            setLoading(true);
            setError(null);
            try {
                // Path sekarang hanya '/location', bukan '/api/location'
                const response = await fetch(`${API_BASE_URL}/location`);
                if (!response.ok) throw new Error(`Gagal memuat lokasi: Server merespons dengan status ${response.status}`);
                const data = await response.json();
                if (Array.isArray(data)) setLocations(data);
                else throw new Error("Format data lokasi dari server tidak sesuai.");
            } catch (err) {
                setError(err.message || "Terjadi kesalahan saat menghubungi server.");
            } finally {
                setLoading(false);
            }
        };
        fetchLocations();
    }, [API_BASE_URL]);

    // Mengambil data gym berdasarkan lokasi
    useEffect(() => {
        if (!selectedLocation) {
            setGyms([]);
            return;
        }
        const fetchGymsByLocation = async () => {
            setLoading(true);
            setError(null);
            setGyms([]);
            try {
                // Path sekarang hanya '/gym/search/...', bukan '/api/gym/search/...'
                const response = await fetch(`${API_BASE_URL}/gym/search/${selectedLocation}`);
                if (!response.ok) throw new Error(`Gagal mengambil data gym: Server merespons dengan status ${response.status}`);
                const data = await response.json();
                if (Array.isArray(data) && data.every(item => item.hasOwnProperty('latitude') && item.hasOwnProperty('longitude') && item.hasOwnProperty('gmaps_url'))) {
                    setGyms(data);
                } else if (data.length > 0) {
                    throw new Error("Data gym dari server tidak lengkap (kurang koordinat atau url gmaps).");
                } else {
                    setGyms([]);
                }
            } catch (err) {
                setError(err.message || "Terjadi kesalahan saat menghubungi server.");
            } finally {
                setLoading(false);
            }
        };
        fetchGymsByLocation();
    }, [selectedLocation, API_BASE_URL]);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Search Header (tidak ada perubahan) */}
                <div className="text-center mb-12">
                    <h5 className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
                        FIND GYM
                    </h5>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Daftar Gym Berdasarkan Lokasi
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
                        <div className="flex items-center mb-4">
                            <span className="text-red-500 mr-2" style={{ fontSize: '20px' }}>📍</span>
                            <span className="text-gray-700 font-medium">Pilih Lokasi:</span>
                        </div>
                        <select 
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading || locations.length === 0}
                        >
                            <option value="">-- Pilih Lokasi --</option>
                            {locations.map((loc) => (
                                <option key={loc.id} value={loc.name}>{loc.name}</option>
                            ))}
                        </select>
                         {loading && <p className="text-sm text-gray-500 mt-2">Memuat...</p>}
                    </div>
                </div>

                {/* Conditional Content (tidak ada perubahan) */}
                {error && <StatusDisplay message={error} />}
                {!loading && !error && !selectedLocation && <StatusDisplay message="Silakan pilih lokasi untuk melihat daftar gym dan peta." />}
                {!loading && !error && selectedLocation && gyms.length === 0 && <StatusDisplay message={`Tidak ada gym yang ditemukan di ${selectedLocation}.`} />}
                
                {/* Layout Utama (tidak ada perubahan) */}
                {!loading && !error && gyms.length > 0 && (
                    <div className="flex flex-col gap-12 mt-8">
                        {/* Bagian 1: Daftar Hasil Pencarian */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                    🏆 Hasil Pencarian {selectedLocation && `di ${selectedLocation}`}
                                    <span className="ml-3 bg-blue-500 text-white text-base px-3 py-1 rounded-full">
                                        {gyms.length} ditemukan
                                    </span>
                                </h3>
                            </div>
                            <div className="space-y-5">
                                {gyms.map((gym, index) => (
                                    <div key={gym.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300">
                                        <img
                                            src={placeholderImages[index % placeholderImages.length]}
                                            alt={`Tampilan gym ${gym.nama}`}
                                            className="w-full sm:w-56 h-48 sm:h-auto object-cover"
                                        />
                                        <div className="p-6 flex flex-col justify-between flex-grow">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{gym.nama}</h3>
                                                <p className="text-gray-600 mt-1">{gym.location}</p>
                                            </div>
                                            <a
                                                href={gym.gmaps_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors self-start"
                                            >
                                                Buka di Peta
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bagian 2: Peta Leaflet di bawah daftar */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Lokasi di Peta</h3>
                            <div className="rounded-2xl shadow-lg overflow-hidden h-[500px] lg:h-[600px]">
                                <MapContainer 
                                    center={[-7.5, 112.0]}
                                    zoom={8} 
                                    scrollWheelZoom={true} 
                                    className="h-full w-full z-0"
                                >
                                    <ChangeMapView gyms={gyms} />
                                    <TileLayer
                                        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {gyms.map(gym => (
                                        <Marker key={gym.id} position={[gym.latitude, gym.longitude]}>
                                            <Popup>
                                                <div className="font-bold">{gym.nama}</div>
                                                <p>{gym.location}</p>
                                                <a 
                                                    href={gym.gmaps_url}
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline mt-1 block"
                                                >
                                                    Lihat di Google Maps
                                                </a>
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GymFinder;