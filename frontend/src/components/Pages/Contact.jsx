import React from 'react'
import Topbar from '../Header/Topbar'
import MainNavbar from '../Header/MainNavbar'
import ContactHome from '../Main/HeroSections/ContactHome'
import FormWrap from '../Form/FormWrap'
import Footer from '../Footer/Footer'
import IframeComp from '../Form/IframeComp'
const Contact = () => {
  return (
    <>
        <ContactHome/>
        <FormWrap/>
        <IframeComp/>
    </>
  )
}

export default Contact