import React from "react";
import { Link } from "react-router-dom";

// Data untuk ikon info
const contactDetails = [
  {
    icon: "fa-solid fa-location-dot",
    text: "Kampus I: Kampus ITS Keputih, Sukolilo, Surabaya 60111, Jawa Timur",
  },
  {
    icon: "fa-solid fa-phone",
    text: "chaiiii.0110@gmail.com",
  },
];

// Data untuk ikon sosial media
const socialMedia = [
  { icon: "fab fa-instagram", link: "https://www.instagram.com/" }
];

const ContectInfo = () => {
  return (
    <>
      {/* CSS untuk layout dan styling. Anda bisa memindahkannya ke file .css terpisah. */}
      <style>{`
        .contact-section-container {
          display: flex;
          flex-wrap: wrap; /* Agar responsif di layar kecil */
          gap: 3rem; /* Jarak antara kolom info dan peta */
          padding: 2rem;
          max-width: 1400px;
          margin: 4rem auto;
        }

        .info-column {
          flex: 1;
          min-width: 320px; /* Lebar minimum sebelum kolom turun ke bawah */
        }
        
        .map-column {
          flex: 1.5; /* Membuat kolom peta sedikit lebih lebar */
          min-width: 320px;
          min-height: 450px; /* Pastikan peta punya tinggi */
          display: flex;
        }

        .info-column h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .info-column h2 span {
          color: #00bcd4; /* Warna biru-cyan seperti di gambar */
        }
        
        .info-column .subtitle {
            color: #555;
            margin-bottom: 2.5rem;
        }

        .contact-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2.5rem;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
          color: #555;
        }

        .contact-list i {
          font-size: 1.5rem;
          color: #00bcd4;
        }
        
        .socials-title {
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }

        .socials-list {
            list-style: none;
            padding: 0;
            margin: 0 0 2.5rem 0;
            display: flex;
            gap: 1rem;
        }

        .socials-list a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: #00bcd4;
            color: white;
            border-radius: 5px;
            font-size: 1.5rem;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        .socials-list a:hover {
            background-color: #0097a7;
        }

        /* Styling untuk Kotak Jam Operasional */
        .opening-hours-box {
          background-color: #212121; /* Warna hitam/abu tua */
          color: white;
          padding: 2rem;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .hours-text p {
          margin: 0 0 1rem 0;
          line-height: 1.5;
          font-size: 0.9rem;
        }
        .hours-text p strong {
          font-weight: bold;
          font-size: 1rem;
          display: block;
        }

        .more-here-btn-wrapper {
          align-self: flex-end; /* Posisikan di bagian bawah flex container */
        }

        .more-here-btn {
          position: relative;
          background-color: #00bcd4;
          color: white;
          padding: 0.8rem 2rem 0.8rem 1.5rem;
          text-decoration: none;
          font-weight: bold;
          border-radius: 4px;
          overflow: hidden; /* Penting untuk efek miring */
        }

        .more-here-btn::after {
          content: '';
          position: absolute;
          top: -20%;
          right: -15px;
          width: 30px;
          height: 140%;
          background-color: #0097a7;
          transform: skewX(-20deg);
        }

        /* Styling untuk Peta */
        .map-column iframe {
          width: 100%;
          height: 100%;
          border: 0;
          border-radius: 8px;
        }
      `}</style>
      
      <div className="contact-section-container">
        
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="info-column">
          <h2>Contact <span>Info</span></h2>
          <ul className="contact-list">
            {contactDetails.map((item, index) => (
              <li key={index}>
                <i className={item.icon}></i>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="socials-title">Our Socials</h3>
          <ul className="socials-list">
            {socialMedia.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="opening-hours-box">
            <div className="hours-text">
              <p><strong>Monday – Friday:</strong>07:00 – 21:00</p>
              <p><strong>Saturday:</strong>07:00 – 16:00</p>
            </div>
            <div className="hours-text">
               <p><strong>Sunday Closed:</strong></p>
               <div className="more-here-btn-wrapper">
                 <Link to="/more-info" className="more-here-btn">
                   More Here
                 </Link>
               </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Google Maps */}
        <div className="map-column">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.671372545924!2d112.79391321477497!3d-7.278311694745916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1674421571%3A0x8672cb41151a65bf!2sInstitut%20Teknologi%20Sepuluh%20Nopember!5e0!3m2!1sen!2sid!4v1672900123456!5m2!1sen!2sid" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
    </>
  );
};

export default ContectInfo;