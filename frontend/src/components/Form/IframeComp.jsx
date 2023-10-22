import React from "react";

const IframeComp = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.397887165407!2d72.8393402!3d19.221483600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1329cb94453%3A0xdda8c50ba29ffba8!2sJoggers%20Park%20Rd%2C%20Chikoowadi%2C%20Borivali%2C%20Mumbai%2C%20Maharashtra%20400092!5e0!3m2!1sen!2sin!4v1695317915941!5m2!1sen!2sin"
        // width="100"
        className="w-100 mt-5"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default IframeComp;
