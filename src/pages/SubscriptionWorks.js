import React from "react";
import Hero from "../components/Hero";

export default function SubscriptionWorks() {
  return (
    <>
      <section className="h-96  bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">
            How our carbon subscription works
            </h1>
          </div>
        </div>
      </section>
      {/*
      <section>
        <div className="container mx-auto px-4 pt-20 max-w-5xl">
          <div className=" p-6 mb-8">
            <p className="text-lg text-black">
              <b> Shred Your Carbon Footprint:</b> our monthly carbon offset
              subscription service At Carbon Shredder, we understand the
              importance of taking action against climate change. That's why we
              offer an innovative carbon offset subscription service, allowing
              you to proactively contribute to reducing global carbon emissions.
              The cost to offset is $20 USD per tonne of CO2, excluding taxes
              and payment fees.
            </p>
            <br />
            <p className="text-lg text-black">
              Based on your calculated footprint, you can choose a subscription
              level that suits your goals:
            </p>
          </div>
          {/* Subscription Plans 
        </div>
        <div className="container mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Shredder 
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Basic shredder</h3>
              <p className="text-lg mb-4">
                Ideal for individuals taking their first step in carbon
                offsetting. This plan offsets up to 50% of your estimated
                monthly carbon emissions.
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  Access to the carbon footprint calculator
                </li>
                <li className="mb-2">Personalized dashboard</li>
                <li>Email support for any queries</li>
              </ul>
            </div>
            {/* Standard Shredder 
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Standard shredder</h3>
              <p className="text-lg mb-4">
                Perfect for those committed to fully neutralizing their carbon
                footprint. This plan offsets 100% of your estimated monthly
                emissions.
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Same as the Basic Plan</li>
                <li className="mb-2">
                  with the added benefit of achieving carbon neutrality each
                  month.
                </li>
              </ul>
            </div>
            {/* Ultimate Shredder 
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Ultimate shredder</h3>
              <p className="text-lg mb-4">
                For the environmentally conscious looking to make a greater
                impact. This plan offsets more than your monthly emissions,
                contributing to reducing your overall climate debt.
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Same as the Standard Plan</li>
                <li className="mb-2">Personalized dashboard</li>
                <li>
                  but with the focus on making a more substantial impact by
                  offsetting 200% of your monthly emissions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    */}
      <section className="text-black body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto max-w-5xl">
          <div className="  mb-8">
            <p className="text-lg text-black">
              <b> Shred Your Carbon Footprint:</b> our monthly carbon offset
              subscription service At Carbon Shredder, we understand the
              importance of taking action against climate change. That's why we
              offer an innovative carbon offset subscription service, allowing
              you to proactively contribute to reducing global carbon emissions.
              The cost to offset is $20 USD per tonne of CO2, excluding taxes
              and payment fees.
            </p>
            <br />
            <p className="text-lg text-black">
              Based on your calculated footprint, you can choose a subscription
              level that suits your goals:
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 ">
            <div className=" bg-white shadow-lg rounded-lg w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Basic shredder
                </h1>
                <p className="text-sm text-black my-3 ">
                  Ideal for individuals taking their first step in carbon
                  offsetting. This plan offsets up to 50% of your estimated
                  monthly carbon emissions.
                </p>
                <p className="flex items-start text-black mb-2">
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
                <p className="flex items-start text-black mb-2">
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
                <p className="flex items-start text-black mb-6">
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
              </div>
            </div>
            <div className=" bg-white shadow-lg rounded-lg w-full">
              <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>Standard shredder</span>
                </h1>

                <p className="text-sm text-black my-3">
                  Perfect for those committed to fully neutralizing their carbon
                  footprint. This plan offsets 100% of your estimated monthly
                  emissions.
                </p>
                <p className="flex items-start text-black mb-2">
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
                <p className="flex items-start text-black mb-2">
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
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>Ultimate shredder</span>
                </h1>

                <p className="text-sm text-black my-3">
                  For the environmentally conscious looking to make a greater
                  impact. This plan offsets more than your monthly emissions,
                  contributing to reducing your overall climate debt.
                </p>
                <p className="flex items-start text-black mb-2">
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
                <p className="flex items-start text-black mb-2">
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
                <p className="flex items-start text-black mb-2">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero/>
    </>
  );
}
