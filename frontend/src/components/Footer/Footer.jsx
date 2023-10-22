import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CiLocationOn, CiPhone, CiMail, CiClock2 } from "react-icons/ci";
import Gall1 from "../img/gall1.jpg";
import Gall2 from "../img/gall2.jpg";
import Gall3 from "../img/gall3.jpg";
import Gall4 from "../img/gall4.jpg";
import Gall5 from "../img/gall5.jpg";
import Gall6 from "../img/gall6.jpg";
import Gall7 from "../img/gall7.jpg";
import Gall8 from "../img/gall8.jpg";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer text-light pt-5 pb-2">
      <Container>
        <Row className="mb-5 row-cols-lg-4 row-cols-1 row-cols-md-2">
          <Col className="px-4 mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4">ABOUT US</h4>
            <p>
              We are dedicated to making a positive change in the world. Our mission is to create a better future through community involvement and support. Join us in our journey.
            </p>
            <div className="social-footer-icons d-flex my-3">
              <div className="icon-box bg-primary text-light px-2 fs-4">
                <BiLogoFacebookCircle className="mb-2 pt-1" />
              </div>
              <div className="icon-box bg-info text-light px-2 fs-4">
                <BiLogoTwitter className="mb-2 pt-1" />
              </div>
              <div className="icon-box bg-danger text-light px-2 fs-4">
                <BiLogoYoutube className="mb-2 pt-1" />
              </div>
            </div>
          </Col>
          <Col className="px-4 mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4">CONTACT US</h4>
            <ul className="footer-list p-0">
              <li>
                <CiLocationOn /> 111 8th Ave, New York, USA
              </li>
              <li>
                <CiPhone /> Office +1-202-555-0153
              </li>
              <li>
                <CiMail /> info@example.com
              </li>
              <li>
                <CiClock2 /> Mon - Sat: 8 am - 6 pm (Closed on Sundays)
              </li>
            </ul>
          </Col>
          <Col className="px-4 mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4">SUBSCRIBE</h4>
            <p>
              Stay updated with our latest news and events by subscribing to our newsletter. Be part of our journey to create a better world.
            </p>
            <input
              type="text"
              className="form-control my-3 rounded-0"
              placeholder="Enter Your Email"
            />
            <button type="submit" className="donate-btn">
              SUBSCRIBE
            </button>
          </Col>
          <Col className="px-4 mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4">GALLERY</h4>
            <div className="footer-img">
              <img src={Gall1} alt="" width={50} className="w-75 w-lg-auto" />
              <img src={Gall2} alt="" width={50} className="w-75 w-lg-auto" />
              <img src={Gall3} alt="" width={50} className="w-75 w-lg-auto" />
              <img src={Gall4} alt="" width={50} className="w-75 w-lg-auto" />
              <img src={Gall5} alt="" width={50} className="w-75 w-lg-auto" />
              <img src={Gall6} alt="" width={50} className="w-75 w-lg-auto" />
              <img src={Gall7} alt="" width={50} className="w-75 w-lg-auto" />
              <img src={Gall8} alt="" width={50} className="w-75 w-lg-auto" />
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col xs={12} md='6' className="text-center text-md-start">
            © <a href="#">Company Name</a>, All Rights Reserved.
          </Col>
          <Col xs={12} md='6' className="text-center text-md-end">
            Developed and Designed By{" "}
            <a href="https://hrishikeshnetke.in" className="text-light">
              Hrishikesh Netke
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Footer;
