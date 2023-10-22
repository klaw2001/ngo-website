import React from "react";
import DonImg1 from "../../img/cause1-1024x575.jpg";
import DonImg2 from "../../img/cause2-1024x575.jpg";
import { Container, ProgressBar } from "react-bootstrap";

const DonationCards = () => {
  const doncards = [
    {
      img: DonImg1,
      title: "New Sustainability",
      text: "Help us promote sustainable practices and protect the environment for a greener future.",
      progressbar: "60%",
      goal: "1000$",
      raised: "600$",
    },
    {
      img: DonImg2,
      title: "Free Volunteering",
      text: "Contribute to our cause and enable volunteers to make a meaningful impact in our community.",
      progressbar: "66%",
      goal: "1000$",
      raised: "668$",
    },
  ];
  return (
    <>
      <section className="my-5 position-relative">
        <div className="donation-sec">
          <Container>
            <div className="donation-cards position-relative z-4">
              <div className="don-title text-center">
                <p className="position-relative">A help to those who need it</p>
                <h2 className="mt-2">
                  Each donation is an essential help for everyone's life
                </h2>
              </div>
              <div className="don-cards d-flex  py-4 mx-sm-0">
                {doncards.map((elem, ind) => (
                  <div className="don-box" key={ind}>
                    <div className="image-box position-relative mb-5">
                      <img src={elem.img} alt="" className="img-fluid mw-100" />
                      <button
                        className={`donate-btn fw-bold ${
                          ind === 0 ? "bg-primary" : "bg-warning"
                        } don-card-btn`}
                      >
                        DONATE NOW
                      </button>
                    </div>
                    <div className="don-card-text px-4 mb-3">
                      <h4 className="fw-bold mb-2">{elem.title}</h4>
                      <p className="mb-4">{elem.text}</p>
                      <div className="progress-bar mb-4">
                        <ProgressBar
                          now={parseInt(elem.progressbar)} // Parse the percentage as an integer
                          label={`${elem.progressbar}`} // Display the percentage as a label
                          // className='bg-success'
                        />
                      </div>
                      <div className="goal-raised d-flex justify-content-between align-items-center mb-4">
                        <p>GOAL : {elem.goal}</p>
                        <p>RAISED : {elem.raised}</p>
                      </div>
                      {/* Add the closing div for the button container */}
                      <button
                        className={`donate-btn ${
                          ind === 0 ? "bg-primary" : "bg-warning"
                        }`}
                      >
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                ))}
                <div className="don-box new-box">
                  <div className="vol-card w-100 h-100 text-center d-flex flex-column justify-content-center align-items-center">
                    <p className="text-light fs-6">Become a</p>
                    <h3 className="fs-1 text-light fw-bold">Volunteer</h3>
                    <div className="brush-btn  w-100">
                      <button className="">Click Here</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default DonationCards;
