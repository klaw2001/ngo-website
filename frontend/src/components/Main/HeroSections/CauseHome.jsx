import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import causeImg1 from "../../img/cause-8-200x200.jpg";
const CauseHome = () => {
  const causecards = [
    {
      img: causeImg1,
      title: "New Sustainability",
      progressbar: "60%",
      goal: "1000$",
      raised: "600$",
    },
    {
      img: causeImg1,
      title: "New Sustainability",
      progressbar: "60%",
      goal: "1000$",
      raised: "600$",
    },
    {
      img: causeImg1,
      title: "New Sustainability",
      progressbar: "60%",
      goal: "1000$",
      raised: "600$",
    },
    {
      img: causeImg1,
      title: "New Sustainability",
      progressbar: "60%",
      goal: "1000$",
      raised: "600$",
    },
    {
      img: causeImg1,
      title: "New Sustainability",
      progressbar: "60%",
      goal: "1000$",
      raised: "600$",
    },
    {
      img: causeImg1,
      title: "New Sustainability",
      progressbar: "60%",
      goal: "1000$",
      raised: "600$",
    },
  ];
  return (
    <section className="cause">
      <div className="cause-hero">
        <Container>
          <div className="cause-hero-sec d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-light fw-bold mb-0">HELP US</h1>
            <div className="cause-box" style={{width:'800px'}}>
              <Row className="row-cols-1 row-cols-md-2 p-lg-4 p-md-3 bg-light m-2 p-3">
                {causecards.map((elem, ind) => (
                  <Col key={ind} className="mb-3">
                    <Row className="align-items-center">
                      <Col xs={4} className="">
                        <img src={elem.img} alt="" className="img-fluid pe-0" width={100}/>
                      </Col>
                      <Col xs={8} className="p-0">
                        <h6 className="fw-bold">{elem.title}</h6 >
                        <div className="goal-raised d-flex justify-content-between align-items-center mb-2 ">
                          <p>GOAL : {elem.goal}</p>
                          <p>RAISED : {elem.raised}</p>
                        </div>
                        <button className="donate-btn fs-6">
                            VIEW DETAILS
                        </button>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CauseHome;
