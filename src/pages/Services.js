import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Navigation, Phone, Clock, Dumbbell, Globe, Filter } from 'lucide-react';
import ClientSlider from '../components/ClientSlider';
import { IMAGES, SVGICON } from '../constants/theme';
import LatestSlider from '../elements/LatestSlider';
import PageTitle from '../elements/PageTitle';
import WorkoutSlider from '../elements/WorkoutSlider';

const Services = () => {
    const [hover, setHover] = useState(0);
    
    // Enhanced GymFinder Component
    const GymFinder = () => {
        const [gyms, setGyms] = useState([]);
        const [filteredGyms, setFilteredGyms] = useState([]);
        const [searchQuery, setSearchQuery] = useState('');
        const [selectedRating, setSelectedRating] = useState('');
        const [selectedType, setSelectedType] = useState('');
        const [userLocation, setUserLocation] = useState(null);
        const [loading, setLoading] = useState(false);
        const [selectedGym, setSelectedGym] = useState(null);
        const [locationPermission, setLocationPermission] = useState(null); // null, 'granted', 'denied'
        const [showLocationDialog, setShowLocationDialog] = useState(true);
        const [locationError, setLocationError] = useState('');

        // Data gym dummy (dalam implementasi nyata, ini akan datang dari API)
        const gymData = [
            {
                id: 1,
                name: "FitLife Gym Sidoarjo",
                address: "Jl. Raya Sidoarjo No. 123, Sidoarjo",
                rating: 4.5,
                reviews: 128,
                type: "Full Service Gym",
                phone: "+62 31 8945612",
                website: "www.fitlifegym.com",
                hours: "05:00 - 23:00",
                facilities: ["Cardio", "Weight Training", "Group Classes", "Swimming Pool"],
                price: "Rp 150.000/bulan",
                distance: "0.5 km",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
                lat: -7.4476,
                lng: 112.7138
            },
            {
                id: 2,
                name: "Iron Paradise Gym",
                address: "Jl. Veteran No. 45, Sidoarjo",
                rating: 4.2,
                reviews: 89,
                type: "Bodybuilding Gym",
                phone: "+62 31 8945613",
                website: "www.ironparadise.com",
                hours: "06:00 - 22:00",
                facilities: ["Weight Training", "Personal Training", "Supplements Store"],
                price: "Rp 100.000/bulan",
                distance: "1.2 km",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                lat: -7.4486,
                lng: 112.7148
            },
            {
                id: 3,
                name: "Wellness Center Sidoarjo",
                address: "Jl. Pahlawan No. 78, Sidoarjo",
                rating: 4.7,
                reviews: 156,
                type: "Wellness Center",
                phone: "+62 31 8945614",
                website: "www.wellnesscenter.com",
                hours: "05:30 - 22:30",
                facilities: ["Yoga Studio", "Spa", "Nutrition Consultation", "Group Classes"],
                price: "Rp 200.000/bulan",
                distance: "2.1 km",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
                lat: -7.4496,
                lng: 112.7158
            },
            {
                id: 4,
                name: "CrossFit Sidoarjo",
                address: "Jl. Diponegoro No. 34, Sidoarjo",
                rating: 4.3,
                reviews: 67,
                type: "CrossFit Box",
                phone: "+62 31 8945615",
                website: "www.crossfitsidoarjo.com",
                hours: "05:00 - 21:00",
                facilities: ["CrossFit Training", "Olympic Lifting", "Conditioning"],
                price: "Rp 175.000/bulan",
                distance: "1.8 km",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
                lat: -7.4506,
                lng: 112.7168
            },
            {
                id: 5,
                name: "24/7 Fitness Sidoarjo",
                address: "Jl. Ahmad Yani No. 89, Sidoarjo",
                rating: 4.0,
                reviews: 203,
                type: "24 Hour Gym",
                phone: "+62 31 8945616",
                website: "www.247fitness.com",
                hours: "24 Jam",
                facilities: ["Cardio", "Weight Training", "Locker Room"],
                price: "Rp 125.000/bulan",
                distance: "3.2 km",
                image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop",
                lat: -7.4516,
                lng: 112.7178
            },
            {
                id: 6,
                name: "Planet Fitness Sidoarjo",
                address: "Jl. Mayjen Sungkono No. 12, Sidoarjo",
                rating: 3.8,
                reviews: 94,
                type: "Budget Gym",
                phone: "+62 31 8945617",
                website: "www.planetfitness.com",
                hours: "06:00 - 23:00",
                facilities: ["Basic Equipment", "Cardio", "Group Classes"],
                price: "Rp 75.000/bulan",
                distance: "2.8 km",
                image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=300&fit=crop",
                lat: -7.4526,
                lng: 112.7188
            }
        ];

        // Handle location permission
        const requestLocationPermission = () => {
            if (!navigator.geolocation) {
                setLocationError('Geolocation tidak didukung oleh browser Anda');
                setLocationPermission('denied');
                setShowLocationDialog(false);
                return;
            }

            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setLocationPermission('granted');
                    setShowLocationDialog(false);
                    setLocationError('');
                    
                    // Load gym data setelah mendapat lokasi
                    setTimeout(() => {
                        setGyms(gymData);
                        setFilteredGyms(gymData);
                        setLoading(false);
                    }, 1000);
                },
                (error) => {
                    console.log("Error getting location:", error);
                    setLocationPermission('denied');
                    setShowLocationDialog(false);
                    setLoading(false);
                    
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            setLocationError('Izin lokasi ditolak. Silakan aktifkan izin lokasi untuk menggunakan fitur pencarian gym.');
                            break;
                        case error.POSITION_UNAVAILABLE:
                            setLocationError('Informasi lokasi tidak tersedia.');
                            break;
                        case error.TIMEOUT:
                            setLocationError('Permintaan lokasi timeout.');
                            break;
                        default:
                            setLocationError('Terjadi kesalahan yang tidak diketahui saat mengambil lokasi.');
                            break;
                    }
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }
            );
        };

        const denyLocationPermission = () => {
            setLocationPermission('denied');
            setShowLocationDialog(false);
            setLocationError('Untuk menggunakan GymFinder, Anda perlu memberikan izin akses lokasi. Silakan refresh halaman dan berikan izin lokasi.');
        };

        useEffect(() => {
            // Cek apakah user sudah pernah memberikan permission
            if (locationPermission === 'granted') {
                setLoading(true);
                setTimeout(() => {
                    setGyms(gymData);
                    setFilteredGyms(gymData);
                    setLoading(false);
                }, 1000);
            }
        }, [locationPermission]);

        useEffect(() => {
            let filtered = gyms;

            if (searchQuery) {
                filtered = filtered.filter(gym =>
                    gym.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    gym.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    gym.type.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            if (selectedRating) {
                filtered = filtered.filter(gym => gym.rating >= parseFloat(selectedRating));
            }

            if (selectedType) {
                filtered = filtered.filter(gym => gym.type === selectedType);
            }

            setFilteredGyms(filtered);
        }, [searchQuery, selectedRating, selectedType, gyms]);

        const gymTypes = [...new Set(gyms.map(gym => gym.type))];

        const renderStars = (rating) => {
            return Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
            ));
        };

        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Location Permission Dialog */}
                {showLocationDialog && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                            <div className="text-center">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                                    <MapPin className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    Izin Akses Lokasi
                                </h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    GymFinder membutuhkan akses lokasi Anda untuk menemukan gym terdekat dan memberikan rekomendasi terbaik. Data lokasi Anda akan digunakan hanya untuk keperluan pencarian dan tidak akan disimpan.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={requestLocationPermission}
                                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                                    >
                                        Izinkan Akses Lokasi
                                    </button>
                                    <button
                                        onClick={denyLocationPermission}
                                        className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200 font-medium"
                                    >
                                        Tidak, Terima Kasih
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Location Denied Message */}
                {locationPermission === 'denied' && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <MapPin className="h-5 w-5 text-red-400" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">
                                    <strong>Akses Lokasi Diperlukan:</strong> {locationError}
                                </p>
                                <button
                                    onClick={() => setShowLocationDialog(true)}
                                    className="mt-2 text-sm text-red-600 hover:text-red-500 underline"
                                >
                                    Coba Lagi
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header */}
                <header className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                                    <Navigation className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">GymFinder</h1>
                                    <p className="text-gray-600">Temukan gym terbaik di sekitar Anda</p>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                                <MapPin className="w-4 h-4" />
                                <span>
                                    {locationPermission === 'granted' ? 'Lokasi Terdeteksi' : 'Lokasi Tidak Tersedia'}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Filters */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filter & Pencarian
                                </h3>

                                {locationPermission !== 'granted' ? (
                                    <div className="text-center py-8">
                                        <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-500 text-sm mb-4">
                                            Fitur pencarian tidak tersedia tanpa akses lokasi
                                        </p>
                                        <button
                                            onClick={() => setShowLocationDialog(true)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-sm"
                                        >
                                            Aktifkan Lokasi
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {/* Search */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium mb-2">Cari Gym</label>
                                            <div className="relative">
                                                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    placeholder="Nama gym, lokasi, tipe..."
                                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Rating Filter */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium mb-2">Rating Minimum</label>
                                            <select
                                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                value={selectedRating}
                                                onChange={(e) => setSelectedRating(e.target.value)}
                                            >
                                                <option value="">Semua Rating</option>
                                                <option value="4.5">4.5+ ⭐</option>
                                                <option value="4.0">4.0+ ⭐</option>
                                                <option value="3.5">3.5+ ⭐</option>
                                                <option value="3.0">3.0+ ⭐</option>
                                            </select>
                                        </div>

                                        {/* Type Filter */}
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium mb-2">Tipe Gym</label>
                                            <select
                                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="">Semua Tipe</option>
                                                {gymTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Clear Filters */}
                                        <button
                                            onClick={() => {
                                                setSearchQuery('');
                                                setSelectedRating('');
                                                setSelectedType('');
                                            }}
                                            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
                                        >
                                            Reset Filter
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {locationPermission !== 'granted' ? (
                                <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                                    <MapPin className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Akses Lokasi Diperlukan
                                    </h2>
                                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                        Untuk dapat mencari dan menemukan gym terdekat di sekitar Anda, 
                                        aplikasi ini membutuhkan izin akses lokasi dari perangkat Anda.
                                    </p>
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => setShowLocationDialog(true)}
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                                        >
                                            Berikan Izin Lokasi
                                        </button>
                                        <div className="text-sm text-gray-500">
                                            <p>💡 Tips: Pastikan pengaturan lokasi browser Anda aktif</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Results Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {filteredGyms.length} Gym Ditemukan
                                        </h2>
                                        <div className="text-sm text-gray-500">
                                            Diurutkan berdasarkan jarak terdekat
                                        </div>
                                    </div>

                                    {/* Loading */}
                                    {loading && (
                                        <div className="text-center py-12">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                            <p className="text-gray-600">Mencari gym terdekat...</p>
                                        </div>
                                    )}

                                    {/* Gym List */}
                                    <div className="space-y-6">
                                        {filteredGyms.map((gym) => (
                                            <div
                                                key={gym.id}
                                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
                                                onClick={() => setSelectedGym(selectedGym === gym.id ? null : gym.id)}
                                            >
                                                <div className="md:flex">
                                                    <div className="md:w-1/3">
                                                        <img
                                                            src={gym.image}
                                                            alt={gym.name}
                                                            className="w-full h-48 md:h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="md:w-2/3 p-6">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h3 className="text-xl font-bold text-gray-900">{gym.name}</h3>
                                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                                                                {gym.distance}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center mb-2">
                                                            <div className="flex mr-2">
                                                                {renderStars(gym.rating)}
                                                            </div>
                                                            <span className="text-sm text-gray-600">
                                                                {gym.rating} ({gym.reviews} ulasan)
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center text-gray-600 mb-2">
                                                            <MapPin className="w-4 h-4 mr-2" />
                                                            <span className="text-sm">{gym.address}</span>
                                                        </div>

                                                        <div className="flex items-center text-gray-600 mb-2">
                                                            <Clock className="w-4 h-4 mr-2" />
                                                            <span className="text-sm">Buka: {gym.hours}</span>
                                                        </div>

                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                                                {gym.type}
                                                            </span>
                                                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                                                                {gym.price}
                                                            </span>
                                                        </div>

                                                        {/* Expanded Details */}
                                                        {selectedGym === gym.id && (
                                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                                <div className="grid md:grid-cols-2 gap-4">
                                                                    <div>
                                                                        <h4 className="font-semibold mb-2">Fasilitas:</h4>
                                                                        <ul className="text-sm text-gray-600 space-y-1">
                                                                            {gym.facilities.map((facility, index) => (
                                                                                <li key={index} className="flex items-center">
                                                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                                                    {facility}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <div className="flex items-center text-sm">
                                                                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                                                            <span>{gym.phone}</span>
                                                                        </div>
                                                                        <div className="flex items-center text-sm">
                                                                            <Globe className="w-4 h-4 mr-2 text-gray-400" />
                                                                            <span className="text-blue-600">{gym.website}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4 flex space-x-3">
                                                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                                                                        Hubungi Gym
                                                                    </button>
                                                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200">
                                                                        Arah ke Lokasi
                                                                    </button>
                                                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200">
                                                                        Kunjungi Website
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* No Results */}
                                    {!loading && filteredGyms.length === 0 && (
                                        <div className="text-center py-12">
                                            <div className="text-gray-400 mb-4">
                                                <Search className="w-16 h-16 mx-auto" />
                                            </div>
                                            <h3 className="text-xl font-medium text-gray-900 mb-2">
                                                Tidak ada gym yang ditemukan
                                            </h3>
                                            <p className="text-gray-600">
                                                Coba ubah filter pencarian atau kata kunci Anda
                                            </p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8 mt-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p>© 2025 GymFinder. Temukan gym terbaik di sekitar Anda.</p>
                    </div>
                </footer>
            </div>
        );
    };

    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Gym" parentTitle="Services" />
                
                {/* Enhanced GymFinder Section - Replaced with the complete new component */}
                <GymFinder />
                
                {/* Bagian LatestSlider telah dihapus */}
            </div>   
        </>
    );
};

export default Services;