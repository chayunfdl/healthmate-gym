import axios from 'axios';

// Pastikan URL dan Port sesuai dengan backend Anda
const API_URL = 'https://healthmate-backend-new.onrender.com/api'; 

const api = axios.create({
  baseURL: API_URL,
});

// Fungsi untuk mendapatkan semua lokasi yang tersedia
export const getLocations = () => {
  return api.get('/location');
};

// Fungsi untuk mencari gym berdasarkan nama lokasi
export const findGymsByLocation = (location) => {
  // Pastikan endpointnya cocok dengan backend: /api/gym/search/:location
  return api.get(`/gym/search/${location}`);
};