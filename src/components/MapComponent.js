// --- File: src/components/MapComponent.js ---

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- Ikon Kustom untuk Marker di Peta ---
// Ikon default (biru)
const defaultIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Ikon aktif (emas) untuk marker yang dipilih
const activeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


/**
 * Komponen 'helper' untuk mengontrol peta.
 * Hooks seperti 'useMap' hanya bisa digunakan oleh komponen anak dari <MapContainer>.
 */
const MapController = ({ gyms, activeGymId }) => {
    const map = useMap();

    // Efek untuk menyesuaikan batas peta agar semua marker terlihat saat daftar gym berubah
    useEffect(() => {
        if (gyms && gyms.length > 0) {
            const bounds = new L.LatLngBounds(gyms.map(gym => [gym.latitude, gym.longitude]));
            map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
        }
    }, [gyms, map]);

    // Efek untuk terbang (flyTo) ke marker yang aktif
    useEffect(() => {
        if (activeGymId) {
            const activeGym = gyms.find(g => g.id === activeGymId);
            if (activeGym) {
                map.flyTo([activeGym.latitude, activeGym.longitude], 15, { 
                    animate: true, 
                    duration: 1 
                });
            }
        }
    }, [activeGymId, gyms, map]);

    return null; // Komponen ini tidak merender UI apapun
}


/**
 * Komponen utama untuk menampilkan peta Leaflet.
 * Menerima props dari komponen induk (GymFinder).
 */
const MapComponent = ({ gyms, activeGymId, setActiveGymId }) => {
    // useRef untuk menyimpan referensi ke setiap popup marker
    const popupRefs = useRef({});

    // Efek untuk membuka popup secara otomatis ketika marker menjadi aktif
    useEffect(() => {
        // Tutup semua popup yang mungkin sedang terbuka
        Object.values(popupRefs.current).forEach(ref => {
            if (ref && ref.isPopupOpen()) {
                ref.closePopup();
            }
        });
        
        // Buka popup untuk marker yang aktif
        if (activeGymId && popupRefs.current[activeGymId]) {
            popupRefs.current[activeGymId].openPopup();
        }
    }, [activeGymId]);

    return (
        // Wrapper div dengan styling untuk posisi dan tampilan
        <div className="h-[600px] lg:sticky lg:top-24 rounded-2xl shadow-lg overflow-hidden">
            <MapContainer 
                center={[-7.2575, 112.7521]} // Center di Surabaya sebagai default
                zoom={12} 
                scrollWheelZoom={true} 
                className="h-full w-full z-0"
            >
                {/* Komponen controller yang tidak terlihat */}
                <MapController gyms={gyms} activeGymId={activeGymId} />
                
                {/* Layer dasar peta dari OpenStreetMap */}
                <TileLayer
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Looping untuk membuat marker untuk setiap gym */}
                {gyms.map(gym => (
                    <Marker
                        key={gym.id}
                        position={[gym.latitude, gym.longitude]}
                        icon={gym.id === activeGymId ? activeIcon : defaultIcon}
                        ref={el => popupRefs.current[gym.id] = el}
                        eventHandlers={{
                            click: () => {
                                // Set gym ini sebagai yang aktif saat marker diklik
                                setActiveGymId(gym.id);
                            },
                        }}
                    >
                        {/* Konten yang muncul saat marker diklik */}
                        <Popup>
                            <div className="font-bold">{gym.nama}</div>
                            <p>{gym.location}</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;