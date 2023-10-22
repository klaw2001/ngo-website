import React from "react";

const AboutBannerText = () => {
  return (
    <section>
      <div className="about-banner">
        <div className="container">
          <div className="about-banner-text d-flex justify-content-center flex-column align-items-center text-light">
            <h4 className="fw-bold">
              Each donation is an essential help which improves everyone's life
            </h4>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec lobortis diam. Pellentesque nec enim ipsum. Fusce ex nisi,
              efficitur vel odio eu, egestas mattis .
            </p>
            <button className="donate-btn">MORE INFO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerText;
