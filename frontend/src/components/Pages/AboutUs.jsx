import React from 'react'
import Topbar from '../Header/Topbar'
import MainNavbar from '../Header/MainNavbar'
import AboutSection from '../Main/OtherSections/AboutSection'
import AboutHome from '../Main/HeroSections/AboutHome'
import AboutCarousel from '../CarouselsComp/AboutCarousel'
import AboutGrid from '../Main/OtherSections/AboutGrid'
import Footer from '../Footer/Footer'
import AboutBannerText from '../Main/OtherSections/AboutBannerText'
import TeamCards from '../Main/OtherSections/TeamCards'

const AboutUs = () => {
  return (
    <>
        <AboutHome/>
        <AboutSection/>
        <AboutCarousel/>
        <AboutGrid/>
        <TeamCards/>
        <AboutBannerText/>
    </>
  )
}

export default AboutUs