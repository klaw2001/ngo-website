import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsCheck2 } from "react-icons/bs";
const AboutGrid = () => {
  const grid = [
    {
      id: 1,
      title: "Our Mission",
      text: "We are on a mission to create a better world through community involvement and support. Join us in making a positive impact.",
      point1: "Supporting communities in need",
      point2: "Empowering individuals for a brighter future",
    },
    {
      id: 2,
      title: "Our Approach",
      text: "We work together with dedicated volunteers to address critical issues and bring about real change. Our approach is collaborative and inclusive.",
      point1: "Collaborating with local organizations",
      point2: "Engaging in sustainable projects",
    },
    {
      id: 3,
      title: "Impactful Contributions",
      text: "Your donations make a significant difference. With your support, we can provide essential help to those who need it most.",
      point1: "Funding education for underprivileged children",
      point2: "Providing access to clean water and healthcare",
    },
    {
      id: 4,
      title: "Our Commitment",
      text: "We are committed to making a positive change. Your contributions help us in our journey to create a world filled with hope and opportunities.",
      point1: "Transparency in fund allocation",
      point2: "Measuring and reporting our impact",
    },
  ];
  
  return (
    <section className="py-5 my-5 about-grid-wrap">
      <div className="about-grid">
        <div className="container">
          <div className="don-title text-md-start text-center">
            <p className="position-relative">A help to those who need it</p>
            <h2 className="mt-2">
              Each donation is an essential help for everyone's life
            </h2>
          </div>
          <Row className="py-5 row-cols-1 row-cols-md-2 row-cols-lg-4">
            {grid.map((elem,ind)=>(
                <Col key={ind} className="about-col">
                    <h1 className="fw-bold">{elem.id}</h1>
                    <h4 className="fw-bold mb-3">{elem.title}</h4>
                    <p className="mb-3">{elem.text}</p>
                    <ul className="list p-0">
                        <li><BsCheck2  className="me-2"/>{elem.point1}</li>
                        <li><BsCheck2  className="me-2"/>{elem.point2}</li>
                    </ul>
                </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
