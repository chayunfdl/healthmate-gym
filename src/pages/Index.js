import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
//layouts
import Header, { Mainheader } from "./../layouts/Header";
import Footer from "./../layouts/Footer";
import Footer2 from "../layouts/Footer2";
//Pages
import Home from "./Home"; // Ini sekarang adalah Home yang sudah dimodifikasi dari Home3
// import AboutUs from "./AboutUs"; // REMOVED - Component doesn't exist
// import Team from "./Team"; // REMOVED - Component doesn't exist
import Faq from "./Faq";
// import Schedule from "./Schedule"; // REMOVED - Component doesn't exist
import ErrorPage from "./ErrorPage";
import UnderConstruction from "./UnderConstruction";
// import ComingSoon from "./ComingSoon"; // REMOVED - Component doesn't exist
import Services from "./Services";
import ServicesDetails from "./ServicesDetails";
import ServicesDetailsBeratBadan from "./ServicesDetailsBeratBadan";
import ServicesDetailsTubuhIdeal from "./ServicesDetailsTubuhIdeal";
import BlogGrid from "./BlogGrid";
import BlogLargeSidebar from "./BlogLargeSidebar";
import BlogListSidebar from "./BlogListSidebar";
import BlogDetail from "./BlogDetail";
import Appointment from "./Appointment";
// import WeightCalculator from "./WeightCalculator"; // REMOVED - Component doesn't exist
import ContactUs from "./ContactUs";
import Header2 from "../layouts/Header2";

function Index() {
  var baseName = "/";
 
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/error-404" exact element={<ErrorPage />} />
        <Route path="/under-maintenance" exact element={<UnderConstruction />}/>
        <Route path="/appointment" exact element={<Appointment />} />
        {/* <Route path="/coming-soon" exact element={<ComingSoon />} /> */} {/* REMOVED - Component doesn't exist */}
        <Route element={<MainLayout />}>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about-us" exact element={<AboutUs />} /> */} {/* REMOVED - Component doesn't exist */}
          {/* <Route path="/team" exact element={<Team />} /> */} {/* REMOVED - Component doesn't exist */}
          <Route path="/faq" exact element={<Faq />} />
          {/* <Route path="/schedule" exact element={<Schedule />} /> */} {/* REMOVED - Component doesn't exist */}
          <Route path="/services" exact element={<Services />} />
          <Route path="/services-details" exact element={<ServicesDetails />} />
          <Route path="/services-details-berat-badan" exact element={<ServicesDetailsBeratBadan />} />
          <Route path="/services-details-tubuh-ideal" exact element={<ServicesDetailsTubuhIdeal />} />
          <Route path="/blog-grid" exact element={<BlogGrid />} />
          <Route
            path="/blog-large-sidebar"
            exact
            element={<BlogLargeSidebar />}
          />
          <Route
            path="/blog-list-sidebar"
            exact
            element={<BlogListSidebar />}
          />
          <Route path="/blog-details" exact element={<BlogDetail />} />
          {/* <Route
            path="/weight-calculator"
            exact
            element={<WeightCalculator />}
          /> */} {/* REMOVED - Component doesn't exist */}
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  const [headerFix, setheaderFix] = useState(false);
 
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
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
      <Outlet />
    </div>
  );
}

export default Index;