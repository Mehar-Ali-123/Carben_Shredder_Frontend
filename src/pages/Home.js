import React from "react";
import Hero from "../components/Hero";
import FaqsSection from "../components/FaqsSection";
import GuideSteps from "../components/GuideSteps";
import StartedSection from "../components/StartedSection";
import Testimonial from "../components/Testimonial";
import Goals from "../components/Goals";
import Impact from "../components/Impact";
import OurMission from "../components/OurMission";
import Illustration from "../components/Illustration.js";
import PlaidIntegeration from "../components/PlaidIntegeration.js";
import { Helmet } from "react-helmet-async";
import StartShredding from "../components/StartShredding.js";
import AboutSectionHome from "../components/AboutSectionHome.js";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Carbon Footprint Tracker & Offset Service - The Carbon Shredder
        </title>
        <meta
          name="description"
          content="Track and offset your carbon footprint with The Carbon Shredder. Subscribe for real-time insights & make a positive environmental impact today!"
        />
      </Helmet>
      <Hero />
      {/* <PlaidIntegeration/> */}
      <OurMission OurMission="Our mission is to offer customers ease of mind by providing an easy way to track and offset carbon emissions, tailored to your lifestyle." />
      <GuideSteps />
      <StartedSection />
      <Impact />
      <Testimonial />
      <Goals />
      {/* <Illustration /> */}
      {/* <FaqsSection/> */}
      <AboutSectionHome />
    </>
  );
}
