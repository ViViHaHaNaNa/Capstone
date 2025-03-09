import { useState } from 'react'
import './styles.css'
import { HeroSection } from './HeroSection'
import MenuSection from './MenuSection'
import { AboutUs } from './AboutUs'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'

export function HomePage() {

  return (
    <>
      <HeroSection/>
      <MenuSection />
      <Testimonials/>
      <AboutUs/>
    </>
  )
}

