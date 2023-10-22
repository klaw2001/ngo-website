import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider1 from "../../img/slider2-1.jpg";

const InfoSection = () => {
  return (
    <>
      <section className="mt-5">
        <Row className="m-0">
          <Col xs={12} lg="8" className="p-0">
            <img src={Slider1} alt="" className="img-fluid" />
          </Col>
          <Col xs={12} lg="4" className="p-0">
            <div className="info-text p-4 p-md-5 align-items-start justify-content-center text-light d-flex flex-column">
              <p className="before">Empower Change with Every Contribution</p>
              <h2 className="my-4">Make a Meaningful Impact on Our Causes</h2>
              <p>
                Your support is invaluable. Every donation contributes to our
                mission of creating a better world. We are dedicated to making a
                positive change, and we invite you to join us on this journey.
              </p>
              <div className="progress-wrap my-4 w-100">
                <div className="progress-div rounded">
                  <div className="inner-prog-div-1 bg-light rounded d-flex justify-content-between align-items-center p-2">
                    <span className="text-dark text-truncate">Recurring Donations</span>
                    <span className="text-dark">45%</span>
                  </div>
                </div>
                <div className="progress-div rounded mt-3">
                  <div
                    className="inner-prog-div-1 bg-light rounded d-flex justify-content-between align-items-center p-2"
                    style={{ width: "86%" }}
                  >
                    <span className="text-dark">One-Time Donations</span>
                    <span className="text-dark">86%</span>
                  </div>
                </div>
              </div>
              <button className="donate-btn bg-warning fw-bold mt-2">
                Learn More
              </button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default InfoSection;
