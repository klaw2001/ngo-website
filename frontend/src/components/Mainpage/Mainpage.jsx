import React from "react";
import Topbar from "../Header/Topbar";
import MainNavbar from "../Header/MainNavbar";
import HeroHome from "../Main/HeroSections/HeroHome";
import HomeIconRow from "../Main/IconRows/HomeIconRow";
import DonationCards from "../Main/OtherSections/DonationCards";
import DonationInput from "../Main/OtherSections/DonationInput";
import EventSection from "../Main/OtherSections/EventSection";
import HomeCarousel from "../CarouselsComp/HomeCarousel";
import InfoSection from "../Main/OtherSections/InfoSection";
import Footer from "../Footer/Footer";
import AboutSection from "../Main/OtherSections/AboutSection";

const Mainpage = () => {
  return (
    <>
      <header>
        <Topbar />
        <MainNavbar />
      </header>
      <main>
        <HeroHome />
        <HomeIconRow/>
        <DonationCards/>
        <DonationInput/>
        <EventSection/>
        <InfoSection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Mainpage;
