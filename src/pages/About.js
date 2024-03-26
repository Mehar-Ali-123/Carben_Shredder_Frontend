import React from "react";
// import PageHeader from "../assets/images/page-header.jpg";
// import AboutImage from "../assets/images/about-image.jpg";
import OurMission from "../components/OurMission";
import Goals from "../components/Goals";
import FounderProfile from "../components/FounderProfile";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <section className=" h-96 bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">Our mission</h1>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="grid grid-cols-2 gap-10 pt-20">
            {/* Our commitment to best practices */}
            <div className="bg-white rounded-lg shadow-lg p-6 ">
              <h2 className="text-2xl font-semibold mb-4">Our mission</h2>
              <p className="text-lg mb-4">
                At Carbon Shredder, we are not just a service; we are a
                mission-driven movement. Our goal is to revolutionize the way
                individuals and communities engage with their carbon footprint.
                We're dedicated to developing a real-time carbon tracking
                subscription service that not only informs but empowers action
                towards a more sustainable world.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 ">
              <h2 className="text-2xl font-semibold mb-4">
                Why real-time tracking matters
              </h2>
              <p className="text-lg mb-4">
                Understanding your carbon footprint in real-time is a
                game-changer. It transforms abstract numbers into tangible,
                actionable insights. With real-time tracking, you can
                immediately see the impact of your lifestyle changes, making the
                journey towards carbon neutrality more interactive, responsive,
                and effective.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/**
      <OurMission OurMission="Our vision is crystal clear: to be at the forefront of a global movement towards carbon neutrality. We envision a future where individuals and businesses are equipped to make informed choices that positively impact the environment. Through our cutting-edge carbon credit platform and user-friendly app, we are reshaping the way people engage with their carbon footprint. Our goal is to contribute to a healthier, greener planet for generations to come." />
      <Goals />
      <FounderProfile />
      <Hero />
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-20 py-20">
            <div className="basis-full md:basis-6/12 my-auto">
              <h1 className="text-[40px] text-black mb-5">About Us</h1>
              <p className="text-lg ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente itaque accusamus minima dolore quos ad cum, tenetur
                eaque distinctio consequuntur hic rem commodi, nesciunt officia,
                sint esse eius consequatur? Porro consequatur officiis similique
                asperiores ipsum dolor corrupti. Suscipit animi illo in
                obcaecati asperiores nostrum voluptates enim dolores praesentium
                eum laudantium porro natus facere necessitatibus, quaerat
                repudiandae vitae corporis? Ab, voluptatem.
              </p>
            </div>
            <div className="basis-full md:basis-6/12">
              <img src={AboutImage} className="rounded" alt="" /> 
            </div>
          </div>
        </div>
      </section>*/}
      <section className="bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium  text-gray-900 mb-4">
              Investing in our mission
            </h1>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-xl   font-medium mb-3">
                  Continuous improvement
                </h2>
                <p className="leading-relaxed text-base text-black">
                  We allocate 10% of our margin towards enhancing our model and
                  app. This investment ensures that our tools are not only
                  cutting-edge but also user-friendly and accurate. As our
                  technology evolves, so does your ability to make more
                  informed, impactful decisions.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-xl   font-medium mb-3">
                  Direct impact
                </h2>
                <p className="leading-relaxed text-base text-black">
                  The remaining 90% goes directly to carbon offsets. This high
                  level of commitment maximizes your contribution to vital
                  environmental projects. When you subscribe to our service,
                  you're not just offsetting your carbon footprint; you're
                  actively participating in a global effort to combat climate
                  change.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-xl  font-medium mb-3">
                  A Collective Effort
                </h2>
                <p className="leading-relaxed text-base text-black">
                  our journey at Carbon Shredder is about collective action.
                  Every subscription, every piece of feedback, every shared
                  story adds up to a significant impact. By joining us, you
                  become part of a community that values sustainability,
                  transparency, and action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium  mb-2 text-gray-900">
              Be part of the change
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="border border-gray-200 bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium  mb-2">
                Stay informed
              </h2>
              <p className="leading-relaxed text-base">
                Follow our progress and stay up-to-date with the latest
                developments in real-time carbon tracking and offsetting.
              </p>
            </div>

            <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6 ">
              <h2 className="text-lg text-gray-900 font-medium  mb-2">
                Engage and share
              </h2>
              <p className="leading-relaxed text-base">
                Your journey with Carbon Shredder is a story worth sharing.
                Engage with our community, spread the word, and inspire others
                to join the movement.
              </p>
            </div>

            <div className="border border-gray-200 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-lg text-gray-900 font-medium  mb-2">
                Grow with us
              </h2>
              <p className="leading-relaxed text-base">
                As we grow and evolve, so will the ways in which we can
                collectively make a difference. Your support, feedback, and
                engagement are crucial in shaping the future of Carbon Shredder.
              </p>
            </div>
          </div>
          <p className=" mt-16 text-black  text-2xl max-w-4xl mx-auto text-center">
            We believe that change is not only necessary but possible. Join us
            on this journey to a more sustainable future, one footprint at a
            time.
          </p>
        </div>
      </section>
      <Hero/>
    </>
  );
}
