import React from "react"; 
import Hero from "../components/Hero";
import { LiaSlideshare } from "react-icons/lia";
import { GrGrow } from "react-icons/gr";

export default function About() {
  return (
    <>
      <section className=" h-96 bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 ">About us</h1>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
            {/* Our commitment to best practices */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Our mission</h2>
              <p className="text-md mb-4">
                At Carbon Shredder, we are not just a service; we are a
                mission-driven movement. Our goal is to revolutionize the way
                individuals and communities engage with their carbon footprint.
                We're dedicated to developing a real-time carbon tracking
                subscription service that not only informs but empowers action
                towards a more sustainable world.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Why real-time tracking matters
              </h2>
              <p className="text-md mb-4">
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
              <h1 className="text-[40px]  mb-5">About Us</h1>
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
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
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
                <h2 className=" text-xl   font-medium mb-3">
                  Continuous improvement
                </h2>
                <p className="leading-relaxed text-base ">
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
                <h2 className=" text-xl   font-medium mb-3">Direct impact</h2>
                <p className="leading-relaxed text-base ">
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
                <h2 className=" text-xl  font-medium mb-3">
                  A Collective Effort
                </h2>
                <p className="leading-relaxed text-base ">
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
        <div className="  flex justify-center ">
        <div className="  w-[95%] lg:w-[70%] grid grid-cols-1 md:grid-cols-3  place-items-center gap-10">
            <div className="  duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-primary w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-80 hover:h-80   hover:bg-[#B2D650]">
              <h3 className="text-xl text-center">Stay informed</h3>
              <div className="gap-4 relative">
                <br />
                <br />
                <h4 className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center  group-hover:-translate-y-8 group-hover:scale-150  group-hover:mt-6 ">
                  <svg
                    className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    enable-background="new 0 0 48 48"
                    viewBox="0 0 48 48"
                    id="stay-at-home"
                  >
                    <path d="M39 12.27c-.198 0-.395-.059-.564-.175l-5-3.42C33.163 8.489 33 8.18 33 7.85V3.5C33 1.57 34.57 0 36.5 0S40 1.57 40 3.5v7.77c0 .371-.205.711-.533.884C39.32 12.232 39.16 12.27 39 12.27zM35 7.323l3 2.052V3.5C38 2.673 37.327 2 36.5 2S35 2.673 35 3.5V7.323zM26 41H16c-.552 0-1-.447-1-1s.448-1 1-1h8.829c-.413-1.164-1.525-2-2.829-2h-6c-.552 0-1-.447-1-1s.448-1 1-1h6c2.757 0 5 2.243 5 5C27 40.553 26.552 41 26 41z"></path>
                    <path
                      d="M27,46H16c-0.552,0-1-0.447-1-1s0.448-1,1-1h10.783l9.469-4.304C36.707,39.489,37,39.033,37,38.534
		c0-0.442-0.213-0.833-0.585-1.072c-0.371-0.239-0.815-0.271-1.219-0.089l-7.783,3.537C27.284,40.97,27.143,41,27,41h-3
		c-0.552,0-1-0.447-1-1s0.448-1,1-1h2.783l7.585-3.447c1.018-0.464,2.188-0.379,3.128,0.228C38.438,36.386,39,37.415,39,38.534
		c0,1.282-0.754,2.453-1.92,2.982l-9.666,4.394C27.284,45.97,27.143,46,27,46z"
                    ></path>
                    <path d="M16 48H6c-.552 0-1-.447-1-1V34c0-.553.448-1 1-1h10c.552 0 1 .447 1 1v13C17 47.553 16.552 48 16 48zM7 46h8V35H7V46zM40.93 18.16c-.601 0-1.195-.187-1.72-.542L24 7.211 8.794 17.615C7.854 18.26 6.643 18.331 5.635 17.8 4.626 17.269 4 16.23 4 15.09c0-1.014.5-1.959 1.338-2.527L23.435.175c.341-.233.79-.233 1.13 0l18.1 12.39C43.5 13.131 44 14.076 44 15.09 44 16.783 42.623 18.16 40.93 18.16zM24 5c.197 0 .395.058.564.175l15.77 10.79C41.008 16.418 42 16.012 42 15.09c0-.345-.177-.679-.461-.872L24 2.212 6.465 14.215C6.177 14.411 6 14.745 6 15.09c0 .402.212.753.567.94.354.186.764.163 1.097-.065L23.436 5.175C23.605 5.058 23.803 5 24 5z"></path>
                    <path
                      d="M23.998,33c-0.253,0-0.507-0.096-0.701-0.287l-8.493-8.356C13.641,23.211,13,21.688,13,20.064
		c0-1.623,0.641-3.146,1.804-4.292C15.966,14.63,17.507,14,19.143,14s3.177,0.63,4.338,1.773l0.517,0.508l0.517-0.508
		c2.392-2.354,6.285-2.354,8.677,0h0C34.358,16.92,35,18.444,35,20.064s-0.642,3.145-1.809,4.292l-8.492,8.356
		C24.505,32.904,24.251,33,23.998,33z M19.143,16c-1.108,0-2.15,0.426-2.936,1.199C15.429,17.964,15,18.982,15,20.064
		c0,1.083,0.429,2.101,1.207,2.866l7.792,7.666l7.791-7.666C32.57,22.162,33,21.144,33,20.064c0-1.08-0.43-2.098-1.211-2.866
		c0,0,0,0,0,0c-1.618-1.594-4.253-1.594-5.871,0l-1.218,1.198c-0.389,0.383-1.014,0.383-1.402,0l-1.218-1.198
		C21.293,16.426,20.25,16,19.143,16z"
                    ></path>
                  </svg>
                </h4>
              </div>
              <div className="invisible group-hover:visible absolute duration-300 -left-64 mt-14 group-hover:left-0 p-5 w-full text-center">
                <p className="text-md">
                  Follow our progress and stay up-to-date with the latest
                  developments in real-time carbon tracking and offsetting.
                </p>
              </div>
            </div>
            <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-primary w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-80 hover:h-80   hover:bg-[#B2D650]">
              <h3 className="text-xl text-center"> Engage & share</h3>
              <div className="gap-4 relative">
                <br />
                <br />
                <h4 className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center  group-hover:-translate-y-8 group-hover:scale-150  group-hover:mt-6 ">
                  <LiaSlideshare  width="38"
                    height="38" className="fill-white" />
                </h4>
              </div>
              <div className="invisible group-hover:visible absolute duration-300 -left-64 mt-14 group-hover:left-0 p-5 w-full text-center">
                <p className="text-md">
                 
                  Your journey with Carbon Shredder is a story worth sharing.
                  Engage with our community, spread the word, and inspire others
                  to join the movement.
                </p>
              </div>
            </div> 
            <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-primary w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-80 hover:h-80   hover:bg-[#B2D650]">
              <h3 className="text-xl text-center"> Grow with us</h3>
              <div className="gap-4 relative">
                <br />
                <br />
                <h4 className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center  group-hover:-translate-y-8 group-hover:scale-150    group-hover:mt-2 ">
                  <GrGrow className="fill-white w-10 h-10" />
                </h4>
              </div>
              <div className="invisible group-hover:visible absolute duration-300 -left-64 mt-7 group-hover:left-0 p-5 w-full text-center">
                <p className="text-md"> 
                  Your journey with Carbon Shredder is a story worth sharing. As
                  we grow and evolve, so will the ways in which we can
                  collectively make a difference. Your support, feedback, and
                  engagement are crucial in shaping the future of Carbon
                  Shredder.
                </p>
              </div>
            </div> 
          </div>
        </div>
          <p className=" mt-16   text-2xl max-w-4xl mx-auto text-center">
            We believe that change is not only necessary but possible. Join us
            on this journey to a more sustainable future, one footprint at a
            time.
          </p>
        </div>
      </section>
      <Hero />
    </>
  );
}
