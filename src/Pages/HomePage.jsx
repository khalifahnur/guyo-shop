import AboutSection from '@/components/HomeSection/AboutSection'
import AvailableFeatures from '@/components/HomeSection/AvailableFeatures'
import FeatureSection from '@/components/HomeSection/FeatureSection'
import IntroSection from '@/components/HomeSection/IntroSection'
import Testimonials from '@/components/HomeSection/Testimonial'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <IntroSection />
        <AvailableFeatures />
        <FeatureSection />
        <Testimonials />
        <AboutSection />
    </div>
    
  )
}

export default HomePage