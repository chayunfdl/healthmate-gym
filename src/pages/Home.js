import React, { useEffect, useState } from "react";
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
    </>
  );
};

export default Home;