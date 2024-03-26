import React from 'react'
import Hero from '../components/Hero'
import FaqsSection from '../components/FaqsSection'
import GuideSteps from '../components/GuideSteps'
import StartedSection from '../components/StartedSection'
import Testimonial from '../components/Testimonial'
import Goals from '../components/Goals'
import Impact from '../components/Impact'
import OurMission from '../components/OurMission'
import Illustration from "../components/Illustration.js"

export default function Home() {
  return (
    <>
    <Hero/>
    <OurMission OurMission="Our mission is to offer you a comprehensive platform for tracking
              and offsetting carbon emissions, tailored to your lifestyle. We
              want to provide real-time insights into the carbon costs
              associated with your decisions. Join us on our journey to improve
              the accuracy of our carbon footprint estimates and provide you
              with the right information to make informed decisions based on the
              true (carbon included) cost of products and services"/>
    <GuideSteps/>
    <StartedSection/>
    <Impact/>
    <Testimonial/>
    <Goals/>
    <Illustration/>
    <FaqsSection/>
    </>
  )
}
