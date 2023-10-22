import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeroHomeImg from "../img/hero-home.jpg";
import Slider1 from "../img/slider2-6.jpg";
import Slider2 from "../img/slider2-5.jpg";
import Slider3 from "../img/slider2-7.jpg";
import { BiCheck } from "react-icons/bi";
import Slider4 from "../img/slider2-4.jpg";
import Slider5 from "../img/slider2-8.jpg";
import Slider6 from "../img/slider2-9.jpg";
import Slider7 from "../img/slider2-1.jpg";
import Slider8 from "../img/bg-yellow.jpg";
import Slider9 from "../img/bg-dark.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../.././App.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Col, Row } from "react-bootstrap";

export default function HomeCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        
        navigation={true}
        // modules={[Autoplay, Navigation]}
        className="mySwiper swiper-car my-5"
      >
        <SwiperSlide>
          <Row >
            <Col xs={6}>
              <img src={Slider1} alt="" />
            </Col>
            <Col xs={6}>
              <Row>
                <Col xs={12}>
                  <img src={Slider2} alt="" />
                </Col>
              </Row>
              <Row xs={2} className="mt-4">
                <Col xs={6}>
                  <div className="about-car d-flex flex-column justify-content-center">
                    <h4 className="text-light">About</h4>
                    <ul className="about-car-list p-0">
                      <li>
                        <BiCheck className="fs-3 me-2" />
                        Lorem Ipsum
                      </li>
                      <li>
                        <BiCheck className="fs-3 me-2" />
                        Lorem Ipsum
                      </li>
                      <li>
                        <BiCheck className="fs-3 me-2" />
                        Lorem Ipsum
                      </li>
                      <li>
                        <BiCheck className="fs-3 me-2" />
                        Lorem Ipsum
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={6}>
                  <img src={Slider3} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row >
            <Col xs={6}>
              <img src={Slider4} alt="" />
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={12}>
                  <img src={Slider5} alt="" />
                </Col>
              </Row>
              <Row xs={2} className="mt-4">
                <Col xs={12} className="h-100">
                  <div className="quote-car about-car d-flex justify-content-center align-items-center flex-column">
                    <h4 className="text-light fw-bold">
                      Life is a long <br /> lesson in humility
                    </h4>
                    <p className="text-light mt-2">James M. Barrie</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <img src={Slider6} alt="" />
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row className="h-100">
            <Col xs={8} className="h-100">
              <div className="last-slide d-flex justify-content-center align-items-center">
                <button className="donate-btn fw-bold text-uppercase">More Details</button>
              </div>
            </Col>
            <Col xs={4}>
              <Row>
                <Col className="last-slide-one d-flex justify-content-center align-items-center">
                  <p className="text-light">
                    Maecenas eget molestie felis, sed facil massa. Fusce cursus,
                    mauris et ultri dapibus, diam sem ulla mcorper
                  </p>
                </Col>
              </Row>
              <Row className="pt-lg-4">
                <Col className="last-slide-two text-light d-flex justify-content-center align-items-center flex-column">
                  <h3 className="fw-bold">Donate More</h3>
                  <h1 className="fw-bold">320+</h1>
                  <p>ASSISTANCE</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
