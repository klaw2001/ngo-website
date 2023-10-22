import React from "react";
import HeroHomeImg from "../../img/hero-home.jpg";
import { Container } from "react-bootstrap";
const HeroHome = () => {
  return (
    <>
      <div className="hero">
        <Container>
          <div className="hero-box h-100 d-flex justify-content-around align-items-center">
            <div className="hero-text my-auto h-100 pt-5">
              <h3 className="text-light">
                WORLD MEETING <br /> VOLUNTEERS <br /> 2023
              </h3>
              <h1 className=" text-light  fw-bold">
                FREE <br /> WATER
              </h1>
              <button className="donate-btn bg-warning text-dark fs-5">VIEW EVENTS</button>
            </div>
            <div className="animation-box">
              <p className="before animate-p position-relative text-light fs-5">Congo - Park Vivago</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroHome;
