import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../img/paral-6-1.jpg";
import PrfImg from "../../img/avatar-150x150.png";
import Sign from "../../img/signature.png";
const AboutSection = () => {
  const abouttext = [
    {
      para: "Empowering Communities",
      title: "We're dedicated to making a positive impact",
      para1:
        "At our core, we believe in the power of community involvement. Our mission is to create a brighter future for everyone, one step at a time.",
      para2:
        "With a team of dedicated volunteers and supporters, we aim to address critical issues and bring about real change.",
      para3:
        "Join us in our journey to make a difference. Your support is essential for creating a world filled with hope and opportunities.",
      para4:
        "Together, we can achieve greatness and bring about positive transformation."
    },
  ];
  
  return (
    <>
      <div className="about-section my-5 ">
        <Container>
          <Row className="align-items-lg-center">
            <Col xs={12} lg='4'>
              <img src={AboutImg} alt="" style={{width:'100%' , height:"500px" , objectFit:'cover'}}/>
            </Col>
            <Col xs={12} lg='8'>
              {abouttext.map((about) => (
                <div className="px-4 py-3 py-lg-0 text-md-start text-center align-items-lg-start align-items-center justify-content-center text-dark d-flex flex-column">
                  <p className="before">{about.para}</p>
                  <h2 className="my-3">{about.title}</h2>
                  <div className="about-para mt-3">
                    <p>{about.para1}</p>
                    <p>{about.para2}</p>
                    <p>{about.para3}</p>
                    <p>{about.para4}</p>
                  </div>
                  <div className="signature d-flex flex-column  flex-md-row justify-content-md-around justify-content-center align-items-center w-100 mt-5">
                    <div className="sign-prof d-flex justify-content-between align-items-center">
                        <img src={PrfImg} alt="" className="img-fluid me-2" width={50} />
                        <div className="prf-text text-start">
                            <h6 className="fw-bold mb-0">Hannah Smith</h6>
                            <p>Expert Volunteers For Years</p>
                        </div>
                    </div>
                    <img src={Sign} alt="" className="img-fluid my-3 my-md-0" width={150} />
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutSection;
