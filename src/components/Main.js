import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import WhyCooseUs from './WhyCooseUs'
import Testimonials from './Testimonials'
import Contact from './Contact'

function Main() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HowItWorks/>
        <WhyCooseUs/>
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default Main