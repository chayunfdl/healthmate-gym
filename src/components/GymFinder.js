import React, { useState } from 'react';

const GymFinder = () => {
    const [searchRadius, setSearchRadius] = useState('5 km');
    const [gyms] = useState([
        {
            id: 1,
            name: 'Fitness First Sidoarjo',
            rating: 4.5,
            distance: '1.2 km',
            address: 'Jl. Raya Sidoarjo No. 123, Sidoarjo, Jawa Timur',
            phone: '(031) 894-5678',
            website: 'www.fitnessfirst.co.id',
            rank: '#1',
            reviews: [
                {
                    author: 'Sari Wulandari',
                    rating: 4,
                    comment: 'Tempatnya strategis dan parkiran luas. Harga membership juga terjangkau...',
                    timeAgo: '1 minggu yang lalu'
                }
            ],
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop'
        },
        {
            id: 2,
            name: 'Gold\'s Gym Sidoarjo',
            rating: 4.3,
            distance: '2.5 km',
            address: 'Jl. Ahmad Yani No. 45, Sidoarjo, Jawa Timur',
            phone: '(031) 765-4321',
            website: 'www.goldsgym.co.id',
            rank: '#2',
            reviews: [
                {
                    author: 'Budi Santoso',
                    rating: 5,
                    comment: 'Fasilitas lengkap, trainer profesional. Recommended!',
                    timeAgo: '3 hari yang lalu'
                }
            ],
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop'
        },
        {
            id: 3,
            name: 'Celebrity Fitness',
            rating: 4.2,
            distance: '3.1 km',
            address: 'Mall Delta Plaza Lt. 3, Sidoarjo, Jawa Timur',
            phone: '(031) 987-6543',
            website: 'www.celebrityfitness.co.id',
            rank: '#3',
            reviews: [
                {
                    author: 'Maya Indah',
                    rating: 4,
                    comment: 'Lokasi di mall sangat nyaman, AC dingin, peralatan modern.',
                    timeAgo: '5 hari yang lalu'
                }
            ],
            image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=250&fit=crop'
        }
    ]);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                style={{ fontSize: '14px' }}
            >
                ★
            </span>
        ));
    };

    return (
        <section className="py-16 bg-white border-b-4 border-gray-200">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Search Header */}
                <div className="text-center mb-12">
                    <h5 className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
                        FIND NEARBY
                    </h5>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Daftar Gym Terdekat
                    </h2>
                    
                    {/* Search Interface */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
                        <div className="flex items-center mb-4">
                            <span className="text-red-500 mr-2" style={{ fontSize: '20px' }}>📍</span>
                            <span className="text-gray-700 font-medium">Radius pencarian:</span>
                        </div>
                        <select 
                            value={searchRadius}
                            onChange={(e) => setSearchRadius(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="1 km">1 km</option>
                            <option value="3 km">3 km</option>
                            <option value="5 km">5 km</option>
                            <option value="10 km">10 km</option>
                            <option value="15 km">15 km</option>
                        </select>
                        <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                            Cari Ulang
                        </button>
                    </div>
                </div>

                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        🏆 Daftar Gym Terdekat
                        <span className="ml-2 bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
                            {gyms.length} ditemukan
                        </span>
                    </h3>
                </div>

                {/* Gym Cards */}
                <div className="space-y-6">
                    {gyms.map((gym) => (
                        <div key={gym.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow mx-2 md:mx-4">
                            <div className="md:flex">
                                {/* Image */}
                                <div className="md:w-1/3 h-64 md:h-auto">
                                    <img 
                                        src={gym.image} 
                                        alt={gym.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Content */}
                                <div className="md:w-2/3 p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center">
                                            <span className="bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded mr-3">
                                                {gym.rank}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900">{gym.name}</h3>
                                        </div>
                                        <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                            {gym.distance}
                                        </span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center mb-4">
                                        <div className="flex mr-2">
                                            {renderStars(gym.rating)}
                                        </div>
                                        <span className="text-gray-600 font-medium">({gym.rating})</span>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-2 text-pink-500" style={{ fontSize: '16px' }}>📍</span>
                                            <span className="text-sm">{gym.address}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-2 text-red-500" style={{ fontSize: '16px' }}>📞</span>
                                            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                                                {gym.phone}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <span className="mr-2 text-blue-500" style={{ fontSize: '16px' }}>🌐</span>
                                            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                                                {gym.website}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Latest Review */}
                                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 font-medium text-sm">📝 Review Terbaru:</span>
                                        </div>
                                        {gym.reviews.map((review, index) => (
                                            <div key={index} className="border-l-4 border-orange-300 pl-4">
                                                <div className="flex items-center mb-1">
                                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
                                                        {review.author.charAt(0)}
                                                    </div>
                                                    <span className="font-medium text-gray-900 text-sm">{review.author}</span>
                                                </div>
                                                <div className="flex mb-1">
                                                    {renderStars(review.rating)}
                                                </div>
                                                <p className="text-gray-600 text-sm mb-1">{review.comment}</p>
                                                <span className="text-gray-400 text-xs">{review.timeAgo}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button className="flex-1 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center">
                                            <span className="mr-2" style={{ fontSize: '16px' }}>🗺️</span>
                                            Lihat di Peta
                                        </button>
                                        <button className="flex-1 border-2 border-orange-500 text-orange-500 font-semibold py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-center">
                                            🧭 Petunjuk Arah
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8 mb-8">
                    <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Muat Lebih Banyak Gym
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GymFinder;