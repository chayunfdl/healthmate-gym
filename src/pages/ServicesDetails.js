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
                <div className="dz-media m-b30">
                  <img src={IMAGES.bloglarg1} alt="" />
                </div>
                <div className="dz-content">
                  <div className="m-b40">
                    <h2 className="title m-b15">
                      Providing world class services
                    </h2>
                    <p>
                      We are an independent gym that is committed to working
                      with you to gain the results you want. Whether your aim is
                      to loose weight tone up build bulk or gain weight we can
                      put together a gym programme or recommend the right
                      classes for you to attend in our studios.
                    </p>
                    <p>
                      We offer the best support and service you can imagine. Use
                      our support forum if you have any questions and our team
                      will respond. We have thousands of solved threads and a
                      customer satisfaction of 97%. We do care that your site
                      runs great!
                    </p>
                  </div>

                  <div className="m-b40">
                    <h4 className="m-b15">
                      Learn About Fitness From These Mistakes
                    </h4>
                    <ul className="list-check-2 m-b30">
                      <li>
                        We are an independent gym that is committed to working
                      </li>
                      <li>
                        Whether your aim is to loose weight tone up build bulk
                        or gain weight
                      </li>
                      <li>
                        We have thousands of solved threads and a customer
                        satisfaction
                      </li>
                    </ul>
                    <p>
                      We offer the best support and service you can imagine. Use
                      our support forum if you have any questions and our team
                      will respond. We have thousands of solved threads and a
                      customer satisfaction of 97%. We do care that your site
                      runs great!
                    </p>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-xl-6 m-b30">
                      <h4 className="m-b10">Start Online Courses ?</h4>
                      <p>
                        We are an independent gym that is committed to working
                        with you to gain the results you want.
                      </p>
                      <p className="m-b0">
                        Whether your aim is to loose weight tone up build bulk
                        or gain weight we can put together a gym programme or
                        recommend the right classes for you to attend in our
                        studios members benefit.
                      </p>
                    </div>
                    <div className="col-xl-6 m-b30">
                      <div className="dz-media">
                        <img
                          src={IMAGES.bloggrid1}
                          className="img-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 m-b30">
                <aside className="side-bar left sticky-top">
                  <div className="widget service_menu_nav">
                    <ul>
                      <li className="active">
                        <Link to={"#"}>Motivation</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Workout</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Online Courses</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Fat Loss</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Perfect Diet</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Health Coach</Link>{" "}
                      </li>
                      <li>
                        <Link to={"#"}>Weight Gain</Link>{" "}
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