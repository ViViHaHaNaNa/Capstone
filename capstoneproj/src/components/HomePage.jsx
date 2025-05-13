import { useState } from 'react'
import './styles.css'
import { HeroSection } from './HeroSection'
import MenuSection from './MenuSection'
import { AboutUs } from './AboutUs'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'
import {BookingForm} from './BookingForm'

export function HomePage() {
  const [availableTimes,setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])
  return (
    <>
      <HeroSection/>
      <MenuSection />
      <Testimonials/>
      <AboutUs/>
    </>
  )
}

