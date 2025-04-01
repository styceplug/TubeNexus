import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Choose from '../components/Choose'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Choose />
      <Pricing />
      <Testimonials />
    </>
  )
}

export default HomePage
