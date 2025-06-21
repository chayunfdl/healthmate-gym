import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";
import PageTitle from "../elements/PageTitle";

const ServicesDetails = () => {
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
                      Workout Berdasarkan Penyakit
                    </h2>
                  </div>

                  <div className="m-b40">
                    <h4 className="m-b15">
                      Penyakit Jantung
                    </h4>
                    <ul className="list-check-2 m-b30">
                      <li>
                        Senam Jantung untuk Pemula: Video ini menampilkan latihan ringan 
                        yang cocok untuk penderita hipertensi dan penyakit jantung, dengan 
                        gerakan sederhana yang dapat dilakukan di rumah.
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/YyFDQgLoynQ"
                            title="Senam Jantung"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </li>
                      <li>
                        Olahraga yang Tepat untuk Penderita Penyakit Jantung: Video ini 
                        membahas jenis olahraga yang aman dan bermanfaat bagi penderita penyakit 
                        jantung, disertai penjelasan dari dokter.
                                                <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/gVqj5TwbrWc"
                            title="Senam Jantung 2"
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
                      Stroke
                    </h4>
                    <p className="m-b0">
                        Olahraga Tepat Pasca Stroke: Video ini memberikan panduan latihan fisik yang aman dan efektif 
                        bagi penyintas stroke untuk membantu pemulihan fungsi tubuh.
                      <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/OHRgNlLTlds"
                            title="Stroke"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </p>
                  </div>
                  <div className="m-b40">
                    <h4 className="m-b15">
                      Osteoarthritis & Nyeri Sendi
                    </h4>
                    <p className="m-b0">
                        4 Jenis Olahraga untuk Kesehatan Otot dan Sendi: Video ini menjelaskan empat jenis olahraga yang 
                        bermanfaat untuk menjaga kesehatan otot dan sendi, serta mencegah osteoarthritis.
                      <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/EcDdcxy2L6s"
                            title="Osteoarthritis & Nyeri Sendi"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </p>
                  </div>
                  <div className="m-b40">
                    <h4 className="m-b15">
                      Gangguan Kecemasan
                    </h4>
                    <p className="m-b0">
                        Olahraga yang Cocok untuk Pasien Cemas: Video ini membahas jenis olahraga yang dapat 
                        membantu mengurangi gejala kecemasan dan meningkatkan kesehatan mental.
                      <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/G-Cm4XctN7M"
                            title="Gangguan Kecemasan"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </p>
                  </div>
                    <div className="m-b40">
                    <h4 className="m-b15">
                      Parkinson
                    </h4>
                    <p className="m-b0">
                        Parkinson's Disease Exercises: Brain and Body: Video ini menampilkan latihan 
                        yang dirancang khusus untuk penderita Parkinson, membantu meningkatkan koordinasi dan keseimbangan.
                      <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '15px' }}>
                          <iframe
                            src="https://www.youtube.com/embed/pWqext64kxM"
                            title="Parkinson"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          ></iframe>
                        </div>
                      </p>
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

export default ServicesDetails;