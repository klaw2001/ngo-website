import React from 'react'
import Topbar from '../Header/Topbar'
import MainNavbar from '../Header/MainNavbar'
import CauseHome from '../Main/HeroSections/CauseHome'
import CounterCause from '../Main/OtherSections/CounterCause'
import CauseCards from '../Main/OtherSections/CauseCards'
import DonateCause from '../Main/OtherSections/DonateCause'
import Footer from '../Footer/Footer'

const Cause = () => {
  return (
    <>
        <CauseHome/>
        <CounterCause/>
        <CauseCards/>
        <DonateCause/>
    </>
  )
}

export default Cause