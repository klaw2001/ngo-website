import React from "react";
import { CiMail, CiClock2 } from "react-icons/ci";
import { Button, Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Topbar = () => {
  return (
    <>
      <div className="top-navbar position-relative">
        <Container>
          <div className="top-nav d-flex justify-content-between align-items-center py-2 new">
            <div className="d-flex align-items-center">
              <span className="me-2">
                <CiMail className="me-1 fs-5 mb-1"/>
                info@donations.com
              </span>
              <span>
                <CiClock2 className="me-1 fs-5 mb-1"/>
                Mon - Sat: 08.00 am - 05:00
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">
              Connect with us on social media:
              </span>
              <div className="d-flex social-icons">
                <span>
                  <FaFacebookF className="mb-1"/>
                </span>
                <span>
                  <FaYoutube className="mb-1"/>
                </span>
                <span>
                  <FaTwitter className="mb-1"/>
                </span>
                <span>
                  <FaInstagram className="mb-1"/>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Topbar;
