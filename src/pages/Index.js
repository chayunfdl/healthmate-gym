// src/routes/Index.js

import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
=======
import { Route, Routes, Outlet } from "react-router-dom";
>>>>>>> bc357043876ef1872fac18b13f6e8f1fc376e795

// Layouts
import { Mainheader } from "./../layouts/Header";
import Footer from "./../layouts/Footer";
// Pages
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import UnderConstruction from "./UnderConstruction";
import Services from "./Services";
import FindGym from "./FindGym";
import ServicesDetails from "./ServicesDetails";
import ServicesDetailsBeratBadan from "./ServicesDetailsBeratBadan";
import ServicesDetailsTubuhIdeal from "./ServicesDetailsTubuhIdeal";
import BlogGrid from "./BlogGrid";
import BlogLargeSidebar from "./BlogLargeSidebar";
import BlogListSidebar from "./BlogListSidebar";
import BlogDetail from "./BlogDetail";
import Appointment from "./Appointment";
import ContactUs from "./ContactUs";

// Halaman Otentikasi
import Login from "./Login";
import Signup from "./Signup";

// Komponen Rute Terlindungi
import ProtectedRoute from "../components/ProtectedRoute";

function Index() {
  return (
    <Routes>
<<<<<<< HEAD
      {/* == 1. RUTE PUBLIK (UNTUK OTENTIKASI) == */}
      {/* Hanya bisa diakses jika belum login. */}
      {/* Path utama untuk login sekarang adalah /login */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/under-maintenance" element={<UnderConstruction />} />

      {/* == 2. RUTE TERLINDUNGI (SEMUA HALAMAN APLIKASI) == */}
      {/* Semua rute di dalam sini WAJIB login. */}
      {/* Jika belum login dan mencoba akses, akan diarahkan ke /login oleh ProtectedRoute. */}
=======
      {/* == RUTE PUBLIK == */}
      {/* Bisa diakses siapa saja, kapan saja, tanpa login */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/under-maintenance" element={<UnderConstruction />} />

      {/* == RUTE TERLINDUNGI == */}
      {/* Semua rute di dalam sini akan dicek oleh ProtectedRoute */}
>>>>>>> bc357043876ef1872fac18b13f6e8f1fc376e795
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
<<<<<<< HEAD
        {/* Halaman Home sekarang ada di path root '/' dan '/home' */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Semua halaman lainnya juga dilindungi */}
=======
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
>>>>>>> bc357043876ef1872fac18b13f6e8f1fc376e795
        <Route path="/services" element={<Services />} />
        <Route path="/find-gym" element={<FindGym />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        <Route path="/services-details-berat-badan" element={<ServicesDetailsBeratBadan />} />
        <Route path="/services-details-tubuh-ideal" element={<ServicesDetailsTubuhIdeal />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-large-sidebar" element={<BlogLargeSidebar />} />
        <Route path="/blog-list-sidebar" element={<BlogListSidebar />} />
        <Route path="/blog-details" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/appointment" element={<Appointment />} />
      </Route>

<<<<<<< HEAD
      {/* == 3. RUTE FALLBACK / CATCH-ALL == */}
=======
      {/* == RUTE FALLBACK / CATCH-ALL == */}
>>>>>>> bc357043876ef1872fac18b13f6e8f1fc376e795
      {/* Tampil jika URL tidak cocok dengan rute mana pun di atas */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

<<<<<<< HEAD
// Layout utama untuk halaman-halaman yang dilindungi (TIDAK PERLU DIUBAH)
=======
// Layout utama untuk halaman-halaman yang dilindungi
>>>>>>> bc357043876ef1872fac18b13f6e8f1fc376e795
function MainLayout() {
  const [headerFix, setheaderFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setheaderFix(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-wraper">
      <header className="site-header mo-left header header-transparent style-1">
        <div
          className={`sticky-header mt-3 main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <Mainheader />
        </div>
      </header>
      <div className="page-content bg-white">
        {/* Outlet akan merender komponen anak sesuai URL (misal: Home, Services, dll.) */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Index;