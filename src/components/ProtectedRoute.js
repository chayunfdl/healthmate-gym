// src/components/ProtectedRoute.js

import { Navigate, useLocation } from "react-router-dom";

// Fungsi sederhana untuk memeriksa status login.
// Di dunia nyata, ini bisa lebih kompleks (misal: validasi token ke server).
const isAuthenticated = () => {
  // Kita periksa apakah ada 'userToken' di localStorage.
  // Ini adalah cara paling umum untuk menyimpan status login di client-side.
  return localStorage.getItem('userToken') !== null;
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // Jika pengguna TIDAK terotentikasi...
  if (!isAuthenticated()) {
    // ...arahkan (redirect) mereka ke halaman login.
    // 'replace' mencegah pengguna kembali ke halaman sebelumnya dengan tombol 'back' browser.
    // 'state={{ from: location }}' menyimpan halaman yang ingin mereka tuju,
    // agar setelah login bisa langsung diarahkan ke sana.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Jika pengguna SUDAH terotentikasi, tampilkan konten yang seharusnya (children).
  return children;
};

export default ProtectedRoute;