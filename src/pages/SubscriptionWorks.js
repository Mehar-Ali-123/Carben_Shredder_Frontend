import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function SubscriptionWorks() {
  return (
    <> 
      <section className="h-80 md:96 bg-primary bg-opacity-10 mt-5  md:mt-15 lg:mt-0">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase mb-10 ">
            How our carbon subscription works
            </h1>
          </div>
        </div>
      </section>
     
      <section className=" text-[#101110] body-font overflow-hidden">
        <div className="container px-5 py-0 pb-10 md:py-24 mx-auto max-w-5xl">
          <div className="  mb-8">
            <p className="text-lg  text-[#101110] text-center">
              <b> Shred Your Carbon Footprint:</b> our monthly carbon offset
              subscription service At Carbon Shredder, we understand the
              importance of taking action against climate change. That's why we
              offer an innovative carbon offset subscription service, allowing
              you to proactively contribute to reducing global carbon emissions.
              The cost to offset is $20 USD per tonne of CO2, excluding taxes
              and payment fees.
            </p>
            <br />
            <p className="text-lg  text-[#101110] text-center">
              Based on your calculated footprint, you can choose a subscription
              level that suits your goals:
            </p>
          </div>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 px-0 md:px-36 lg:px-0">
            <div className=" bg-white shadow-lg rounded-lg w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col justify-between  relative overflow-hidden">
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200  leading-none  text-center">
                  <span> Basic shredder </span>
                </h1>
                <p className="text-sm  text-[#101110] my-3  text-center ">
                  Ideal for individuals taking their first step in carbon
                  offsetting. This plan offsets up to 50% of your estimated
                  monthly carbon emissions.
                </p>
                <p className="flex items-start  text-[#101110] mb-2">
                  <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Access to the carbon footprint calculator
                </p>
                <p className="flex items-start  text-[#101110] mb-2">
                  <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Personalized dashboard
                </p>
                <p className="flex items-start  text-[#101110] mb-6">
                  <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Email support for any queries
                </p>
                <Link to="/calculator">
                  <button className="flex gap-3 justify-center items-center bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full">
                    Start Plan
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button> 
                </Link>
              </div>
            </div>
            <div className=" bg-white shadow-lg rounded-lg w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col justify-between  relative overflow-hidden">
                <h1 className="text-5xl text-gray-900  leading-none  text-center flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>Standard shredder</span>
                </h1>

                <p className="text-sm  text-[#101110] my-3  text-center">
                  Perfect for those committed to fully neutralizing their carbon
                  footprint. This plan offsets 100% of your estimated monthly
                  emissions.
                </p>
                <p className="flex items-start  text-[#101110] mb-2">
                  <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Same as the Basic Plan
                </p>
                <p className="flex items-start  text-[#101110] mb-2">
                  <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  with the added benefit of achieving carbon neutrality each
                  month.
                </p>
                <Link to="/calculator">
                  <button className="flex gap-3 justify-center items-center bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full">
                    Start Plan
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button> 
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden justify-between ">
                <h1 className="text-5xl text-gray-900  leading-none  text-center flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>Ultimate shredder</span>
                </h1>

                <p className="text-sm  text-[#101110] my-3  text-center">
                  For the environmentally conscious looking to make a greater
                  impact. This plan offsets more than your monthly emissions,
                  contributing to reducing your overall climate debt.
                </p>
                <p className="flex items-start  text-[#101110] mb-2">
                  <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Same as the Standard Plan
                </p>
                <p className="flex items-start  text-[#101110] mb-2">
                  <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Personalized dashboard
                </p>
                <p className="flex items-start  text-[#101110] mb-2">
                  <span className="w-4 h-4 mt-1 mr-2 inline-flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  but with the focus on making a more substantial impact by
                  offsetting 200% of your monthly emissions.
                </p>
                <Link to="/calculator ">
                  <button className="flex gap-3 justify-center items-center bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full ">
                    Start Plan
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button> 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
    </>
  );
}
