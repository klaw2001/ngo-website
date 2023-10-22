import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CounterCause = () => {
  const counter = [
    { number: 13, title: "specialists", text: "some text" },
    { number: 45, title: "specialists", text: "some text" },
    { number: 67, title: "specialists", text: "some text" },
    { number: 38, title: "specialists", text: "some text" },
  ];
  return (
    <section>
      <div className="counter-cause">
        <Container>
          <div className="counter-sec w-75 m-auto py-lg-5">
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-center gx-5 text-light">
              {counter.map((elem, ind) => (
                <Col>
                  <Row className="align-items-center gx-5">
                    <Col xs={3} className="p-0">
                      <h1 className="pe-2">{elem.number}</h1>
                    </Col>
                    <Col xs={9}>
                      <h5 className="text-uppercase">{elem.title}</h5>
                      <p>{elem.text}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CounterCause;
