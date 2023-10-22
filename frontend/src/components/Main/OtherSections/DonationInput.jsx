import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SupImg from "../../img/map.png";

const DonationInput = () => {
  const [donationAmount, setDonationAmount] = useState("100$"); // Default value is "100$"

  // Function to handle button clicks and update the input value
  const handleButtonClick = (amount) => {
    setDonationAmount(amount);
  };

  return (
    <section className="support">
      <div className="donation-input-wrap py-5">
        <Container>
          <div className="donation-input d-flex justify-content-between align-items-center">
            <div className="support-us-box bg-light">
              <div className="support-text text-center p-5">
                <h4 className="mb-2 fw-bold">Support Us</h4>
                <p className="mb-3">
                  Your support is crucial in our mission to improve lives and
                  create a better future. <br /> Join us in making a positive
                  impact today.
                </p>

                <div className="d-input d-flex justify-content-center w-100">
                  <div className="bg-dark text-light p-3 fw-bold">$</div>
                  <input
                    type="text"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    className="text-center fw-bold fs-3"
                    width={210}
                  />
                </div>
                <div className="btn-group-donation my-4">
                  <button onClick={() => handleButtonClick("100$")}>
                    100$
                  </button>
                  <button onClick={() => handleButtonClick("150$")}>
                    150$
                  </button>
                  <button onClick={() => handleButtonClick("200$")}>
                    200$
                  </button>
                  <button onClick={() => setDonationAmount("")}>CUSTOM</button>
                </div>
                <button className="donate-btn fw-bold">DONATE NOW</button>
              </div>
            </div>
            <div className="support-donation-text px-5 text-light">
              <h1 className="fw-bold">
                10 Surgeons <br /> 21 Healed
              </h1>
              <p className="fs-3 mb-3">[ New professionals every year ]</p>
              <img src={SupImg} alt="" className="img-fluid" width={150} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default DonationInput;
