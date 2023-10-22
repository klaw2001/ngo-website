import React from "react";
import Cause1 from "../../img/cause1-300x300.jpg";
import Cause2 from "../../img/cause2-300x300.jpg";
import Cause3 from "../../img/cause3-300x300.jpg";
import Cause5 from "../../img/cause-5-300x300.jpg";
import Cause8 from "../../img/cause-8-300x300.jpg";
import { Col, Container, Row } from "react-bootstrap";
const CauseCards = () => {
  const causecard = [
    { img: Cause1, title: "medical aid", goal: 1500 },
    { img: Cause2, title: "ethical support", goal: 3457 },
    { img: Cause3, title: "new fundraiser", goal: 34500 },
    { img: Cause5, title: "urgent help", goal: 5000 },
    { img: Cause8, title: "free volunteering", goal: 1000 },
    { img: Cause1, title: "new sustainability", goal: 1340 },
  ];

  return (
    <section className="py-5">
      <div className="cause-cards">
        <Container>
          <div className="cause-card-sec">
            <div className="don-title text-center">
              <p className="position-relative">A help to those who need it</p>
              <h2 className="mt-2">
                Each donation is essential to help others always
              </h2>
            </div>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
              {causecard.map((elem, ind) => (
                <Col key={ind} className="position-relative cause-col">
                  <img src={elem.img} alt="" className="w-100"/>
                  <div className="cause-inner-text position-absolute text-light" style={{left:"30px",bottom:"15px"}}>
                    <h5 className="text-capitalize fw-bold">{elem.title}</h5>
                    <p>GOAL : {elem.goal}$</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CauseCards;
