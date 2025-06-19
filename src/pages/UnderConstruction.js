import React from "react";
import { IMAGES } from "../constants/theme";

const UnderConstruction = () => {
  return (
    <>
      <div className="page-wraper">
        <section
          className="under-construction"
          style={{
            backgroundImage: "url(" + IMAGES.BgAppoint + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="inner-construction">
            <img className="warning-img" src={IMAGES.watning} alt="" />
            <h1 className="dz-head">UNDER CONSTRUCTION</h1>
            <p>
              PLEASE SORRY FOR THE{" "}
              <span className="text-primary">DISTURBANCES</span>
            </p>
          </div>
          <img className="shape1 rotate-360" src={IMAGES.circlesvg1} alt="" />
          <img className="shape2 rotate-360" src={IMAGES.circlesvg1} alt="" />
          <img className="shape3 dzmove1" src={IMAGES.circlesvg2} alt="" />
          <img className="shape4 dzmove2" src={IMAGES.circlesvg2} alt="" />
          <img className="shape5 dzmove2" src={IMAGES.circlesvg2} alt="" />
          <img className="girl-img" src={IMAGES.footergril1} alt="" />
        </section>
      </div>
    </>
  );
};

export default UnderConstruction;
