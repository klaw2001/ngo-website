import React from "react";
import { Col, Row } from "react-bootstrap";
import FormComp from "./FormComp";

const FormWrap = () => {
  return (
    <section>
      <div className="form-wrap">
        <div className="container">
          <Row className="py-5">
            <Col className="col-12 col-lg-4">
              <div className="don-title text-md-start text-center">
                <p className="position-relative">Get in Touch With us</p>
                <h2 className="my-3">Contact Us for any questions !</h2>
                <p className="mb-3">
                  Have a question or need assistance? Our team is here to assist
                  you. Whether it's about our projects, donations, or anything
                  else, feel free to reach out. We're dedicated to making a
                  positive impact and are ready to help you get involved in our
                  mission. 
                </p>

                <button className="donate-btn">DETAILS</button>
              </div>
            </Col>
            <Col className="col-12 col-lg-8">
              <FormComp />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FormWrap;
