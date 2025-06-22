// src/components/ProtectedRoute.js

import { Navigate, useLocation } from "react-router-dom";

// Fungsi sederhana untuk memeriksa status login.
// Di dunia nyata, ini bisa lebih kompleks (misal: validasi token ke server).
const isAuthenticated = () => {
<<<<<<< HEAD
  // Kita periksa apakah ada 'authToken' di localStorage.
  // Kunci ini HARUS SAMA dengan yang disimpan saat login di AuthContext.
  return localStorage.getItem('authToken') !== null;
=======
  // Kita periksa apakah ada 'userToken' di localStorage.
  // Ini adalah cara paling umum untuk menyimpan status login di client-side.
  return localStorage.getItem('userToken') !== null;
>>>>>>> bc357043876ef1872fac18b13f6e8f1fc376e795
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