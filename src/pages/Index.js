import { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

// Layouts
import Header, { Mainheader } from "./../layouts/Header";
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

// Halaman baru untuk otentikasi
import Login from "./Login";
import Signup from "./Signup";

// Komponen baru untuk rute terlindungi
import ProtectedRoute from "../components/ProtectedRoute";

function Index() {
  // BrowserRouter sudah dipindah ke index.js
  
  return (
    <Routes>
      {/* Rute Publik (bisa diakses tanpa login) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/error-404" element={<ErrorPage />} />
      <Route path="/under-maintenance" element={<UnderConstruction />} />
      
      {/* Rute yang tidak memerlukan layout utama */}
      <Route path="/appointment" element={<Appointment />} />
      
      {/* Rute Terlindungi (memerlukan login) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
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
        </Route>
      </Route>
      
      {/* Fallback route jika tidak ada yang cocok */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

// Layout utama untuk halaman-halaman yang dilindungi
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
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Index;