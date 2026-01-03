import React from 'react'
import HeroSection from './HeroSection'
import Awards from './Awards'
import Stats from './Stats'
import Education from './Education'
//import OpenAccount from '../OpenAccount'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Pricing from './Pricing'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Awards />
    <Stats />
    <Pricing />
    <Education />
    <Footer />
    </>
  )
}

export default HomePage
