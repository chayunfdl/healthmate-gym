import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../constants/theme";
import MainBanner3 from "../components/MainBanner3";
import ModalVideo from "react-modal-video";
import HomebannerCard from "../elements/HomebannerCard";
import { useLocation } from "react-router-dom";
import ContectInfo from "../components/ContectInfo";

const Home = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    const body = document.querySelector("body");  
    body.setAttribute("data-theme-color", 'color_3'); 
    // Menghapus localStorage untuk menghindari konflik dengan tema lain
    // localStorage.setItem("theme", "color_3");
    // localStorage.setItem("themeInd", 2);
  }, [location]);

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={open}
        videoId="X_9VoqR5ojM"
        onClose={() => setOpen(false)}
      />
      <div className="page-content bg-white">
        {/* Main Banner Section */}
        <div className="main-bnr-two">
          <div
            className="banner-inner"
            style={{
              backgroundImage: `url(${IMAGES.BackgroundBg15})`,
              backgroundSize: " cover",
            }}
          >
            <MainBanner3 open={setOpen} />
          </div>
        </div>
        
        {/* Home Banner Cards - Hanya 2 kartu */}
        <section className="clearfix section-wrapper1">
          <div className="container">
            <HomebannerCard />
          </div>
        </section>

        {/* Contact Info Section */}
        <section
          className="content-inner-2 theme-bg contact-section style-2"
          style={{
            backgroundImage: ` url(${IMAGES.BgImage10})`,
            backgroundPosition: " center",
          }}
        >
          <div className="container">
            <ContectInfo />
          </div>
        </section>
        
        {/* Google Maps */}
        <div className="map z-index-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28896.531392443423!2d75.81462525569334!3d25.133445080066668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x537f208422eb8f28!2sW3ITEXPERTS%20-%20Software%20Development%20Company%20in%20kota!5e0!3m2!1sen!2sin!4v1669897446044!5m2!1sen!2sin"
            style={{
              border: "0",
              marginBottom: "-7px",
              width: "100%",
              height: "400px",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;