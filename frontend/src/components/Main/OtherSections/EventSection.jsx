import React from "react";
import { Container } from "react-bootstrap";
import EveOne from "../../img/eve1.jpg";
import EveTwo from "../../img/eve-2.jpg";
import EveThree from "../../img/eve3.jpg";
import { CiCalendarDate } from "react-icons/ci";

const EventSection = () => {
  const events = [
    {
      img: EveOne,
      time: "8:00 AM",
      title: "Live Testimonials",
      date: "01 May 2025",
      text: "Join us for a morning of inspiring live testimonials from our dedicated members. Hear their stories of positive impact and community involvement.",
    },
    {
      img: EveTwo,
      time: "8:00 AM",
      title: "Presentation",
      date: "29 May 2025",
      text: "Discover the latest insights and initiatives in our field with an engaging presentation. Learn how we're making a difference and how you can be part of it.",
    },
    {
      img: EveThree,
      time: "8:00 AM",
      title: "Presentation",
      date: "15 May 2025",
      text: "Join us for an informative presentation on the importance of community involvement and our upcoming projects. Be part of our mission for a better future.",
    },
  ];

  return (
    <section className="my-5">
      <div className="events-wrapper">
        <Container>
          <div className="event-wrap">
            <div className="don-title text-center">
              <p className="position-relative">Promotion of the association</p>
              <h2 className="my-3">Discover Our Upcoming Events</h2>
              <p>
                Join us in exploring a series of exciting events designed to
                make a positive impact. Connect with  <br />like-minded individuals and
                be a part of our mission for a better future.
              </p>
            </div>
            <div className="events-table mt-lg-5 mx-lg-4 mt-5">
              <div className="events-header d-flex justify-content-between align-items-center text-light pt-2 px-3">
                <h5>EVENTS</h5>
                <h5>IN SHORT</h5>
                <span>
                  <CiCalendarDate className="fs-2 mb-2" />
                </span>
              </div>
            </div>
            <div className="event-data don-box mx-lg-4 px-lg-3 py-lg-4 py-4">
              {events.map((elem, ind) => (
                <div className="event-box d-flex justify-content-between align-items-lg-center mx-4 mb-4 flex-column flex-lg-row flex-sm-column align-items-sm-start">
                  <div className="event-img d-flex align-items-center">
                    <div className="event-inner-box position-relative">
                      <img src={elem.img} alt="" width={100} />
                      <p className="time-box bg-dark text-light fs-6 px-2">
                        {elem.time}
                      </p>
                    </div>
                    <div className="event-title-box">
                      <h4 className="fw-bold fs-5">{elem.title}</h4>
                      <p className="">{elem.date}</p>
                    </div>
                  </div>
                  <div className="event-para px-lg-5 px-sm-0 py-md-4 px-sm-0 py-4">
                    <p className="fs-6">{elem.text}</p>
                  </div>
                  <div className="event-button">
                    <button
                      className={`donate-btn fw-bold ${
                        ind === 0
                          ? "bg-info"
                          : ind === 1
                          ? "bg-primary"
                          : "bg-warning"
                      } `}
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default EventSection;
