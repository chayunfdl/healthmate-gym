// --- START OF FILE HomebannerCard.js ---

import React from "react";
import { Link } from "react-router-dom";

// PERBAIKAN: Tambahkan garis miring '/' di depan setiap link
const cards = [
  { icon: "flaticon-fitness", title: "Health Fitness", link: "/services-details" }, // <-- DITAMBAHKAN '/'
  { icon: "flaticon-user", title: "Gym", link: "/services" },                   // <-- DITAMBAHKAN '/'
];

const HomebannerCard = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        {cards.map((item, ind) => (
          <div
            className="col-xl-3 col-sm-6 mb-xl-0 mb-4 wow fadeInUp"
            key={ind}
          >
            <div className="icon-bx-wraper style-4 bg-white">
              <div className="icon-bx m-b20">
                <div className="icon-cell text-primary">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="icon-content">
                <h4 className="dz-title m-b10">
                  {/* Link ini sekarang akan mengarah ke path yang benar */}
                  <Link to={item.link}>{item.title}</Link>
                </h4>
                {/* Link ini juga sekarang akan mengarah ke path yang benar */}
                <Link to={item.link} className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomebannerCard;
// --- END OF FILE HomebannerCard.js ---