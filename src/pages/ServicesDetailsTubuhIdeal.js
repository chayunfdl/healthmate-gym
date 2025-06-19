import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";

const ServicesDetailsTubuhIdeal = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Health Fitness" parentTitle="Services" />
        <div
          className="content-inner "
          style={{ backgroundImage: "url(" + IMAGES.BgImage1 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 order-lg-1">
                <div className="dz-content">
                  <div className="m-b40">
                    <h2 className="title m-b15">
                      Workout Berdasarkan Memperbaiki Tubuh Ideal
                    </h2>
                  </div>
                  <div className="m-b40">
                    <h4 className="m-b15">
                      Membentuk Tubuh Ideal
                    </h4>
                    <ul className="list-check-2 m-b30">
                      <li>
                        7 Menit Latihan Membentuk Tubuh Ideal.
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/1yPqdPZLhEw"
                            title="ideal"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </li>
                      <li>
                        15 Menit Full Body Workout untuk Membentuk dan Memperkuat Tubuh.
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/bwV9QxbtXKc"
                            title="ideal 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </li>
                      <li>
                        30 Menit Low Impact Workout untuk Membentuk Tubuh Ideal.
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/rsKg5NUplRA"
                            title="ideal 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="m-b40">
                    <h4 className="m-b15">
                      Memperbaiki Postur Tubuh
                    </h4>
                    <ul className="list-check-2 m-b30">
                      <li>
                        Latihan singkat ini fokus pada peregangan dan penguatan otot untuk memperbaiki postur tubuh.
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/shMTXv1V0FI"
                            title="postur"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </li>
                      <li>
                        Yoga ini dirancang untuk membantu memperbaiki postur tubuh melalui gerakan yang menenangkan dan memperkuat otot.
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/a49sYqRg-Ns"
                            title="postur 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </li>
                      <li>
                        Latihan pilates ini membantu membenarkan postur tubuh menjadi lebih ideal dengan gerakan yang sederhana namun efektif.
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/0DnXt0p4m08"
                            title="postur 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 m-b30">
                <aside className="side-bar left sticky-top">
                  <div className="widget service_menu_nav">
                    <ul>
                      <li className="active">
                        <Link to="/services-details">Penyakit</Link>
                      </li>
                      <li>
                        <Link to="/services-details-berat-badan">Berat Badan</Link>
                      </li>
                      <li>
                        <Link to="/services-details-tubuh-ideal">Tubuh Ideal</Link>
                      </li>
                    </ul>
                    <svg
                      width="250"
                      height="70"
                      viewBox="0 0 250 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 38L250 0L210 70L0 38Z"
                        fill="url(#paint0_linear_306_1296)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_306_1296"
                          x1="118.877"
                          y1="35.552"
                          x2="250.365"
                          y2="35.552"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="1" stopColor="var(--primary)"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsTubuhIdeal;