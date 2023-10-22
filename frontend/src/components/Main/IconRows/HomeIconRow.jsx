import React from "react";
import Icon1 from "../../img/icon-1.png";
import Icon2 from "../../img/icon-2.png";
import Icon3 from "../../img/icon-3.png";
import Icon4 from "../../img/icon-4.png";
import { Container } from "react-bootstrap";

const HomeIconRow = () => {
  const iconrows = [
    { img: Icon1, title: "MEDICINES", text: "We Provide Health" },
    { img: Icon2, title: "MEDICAL AID", text: "We Prevent Last Momemts" },
    { img: Icon3, title: "DONATIONS", text: "We Support You" },
    { img: Icon4, title: "SKILLED", text: "We Are Readyyy!" },
  ];

  return (
    <section className="h-100 py-5">
      <div className="home-icon-row">
        <Container>
          <div className="icon-row">
            {iconrows.map((elem, ind) => (
              <div className="icon-box d-flex align-items-center justify-content-center" key={ind}>
                <div className="icon-img">
                  <img src={elem.img} alt="icon" className="img-fluid me-3" width={65} />
                </div>
                <div className="icon-text">
                  <h4 className="fw-bold">{elem.title}</h4>
                  <p>{elem.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeIconRow;
