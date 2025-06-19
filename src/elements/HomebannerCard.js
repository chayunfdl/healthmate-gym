import React from "react";
import { Link } from "react-router-dom";

// Hanya 2 kartu yang akan ditampilkan
const cards = [
  { icon: "flaticon-fitness", title: "Health Fitness", link: "services-details" },
  { icon: "flaticon-user", title: "Gym", link: "services" },
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
                  <Link to={item.link}>{item.title}</Link>
                </h4>
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