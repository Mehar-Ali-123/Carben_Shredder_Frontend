import React from "react";
import Hero from "../components/Hero"

export default function CalculatorWorks() {
  return (
    <>
      <section className="h-96  bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">
              How our carbon footprint calculator works
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <p className="text-xl font-bold mb-8">
          Our Carbon Footprint Calculator is a meticulously designed tool that
          not only estimates your current carbon footprint but also accounts for
          past emissions based on your age. Here's how it operates:
        </p>
        <div className="grid grid-cols-1 gap-8 border-l-2 pl-16 relative">
    
          {/* Step 1: Gathering Personal Information */}
          <div className="bg-white rounded-lg shadow-lg p-8  ">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>
            <div className="flex flex-row gap-5">
              <div className="basis-4/12">
                <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 1</p> 
                  <h1 className="text-2xl font-semibold ">
                    Gathering Personal Information
                  </h1>
                </div>
              </div>
              <div className="basis-8/12">
                <div className="flex items-center mb-2">
                  <div className="mr-4 flex-shrink-0">
                      {/* <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg> */}
                  </div>
                  <p className="text-lg text-black">
                    <b> Age and location:</b> Initially, the calculator requires
                    your age and country of residence. Your age is crucial in
                    estimating your past emissions. The calculator uses
                    age-specific data to determine the average emissions you
                    likely produced in each stage of your life. This approach
                    provides a historical perspective on your carbon footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Step 2: Understanding Your Lifestyle */}
          <div className="bg-white rounded-lg shadow-lg p-8 ">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>
            <div className="flex flex-row gap-5">
              <div className="basis-4/12">

              <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 2</p> 
                  <h1 className="text-2xl font-semibold ">
                  Understanding Your Lifestyle
                  </h1>
                </div>
             
              </div>
              <div className="basis-8/12">
                {/* Commute */}
                <div className="flex items-center mb-2">
                  <div className="mr-4 flex-shrink-0">
                        {/* <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg> */}
                  </div>
                  <p className="text-lg text-black">
                    <b> Commute:</b> Your primary mode of transportation and its
                    frequency help in adjusting your current carbon footprint.
                  </p>
                </div>
                {/* Travel */}
                <div className="flex items-center mb-2">
                  <div className="mr-4 flex-shrink-0">
                    {/* <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg> */}
                  </div>
                  <p className="text-lg text-black">
                    <b> Travel:</b> Your travel habits, including the types of
                    travel and their frequency, are considered for their
                    environmental impact.
                  </p>
                </div>
                {/* Food */}
                <div className="flex items-center mb-2">
                  <div className="mr-4 flex-shrink-0">
                     {/* <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg> */}
                  </div>
                  <p className="text-lg text-black">
                    <b> Food: </b>The calculator evaluates your diet to estimate
                    the emissions related to your food consumption.
                  </p>
                </div>
                {/* Home */}
                <div className="flex items-center mb-2">
                  <div className="mr-4 flex-shrink-0">
                   {/* <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg> */}
                  </div>
                  <p className="text-lg text-black">
                    <b> Home:</b> It assesses your home energy usage to
                    determine the carbon footprint from your living environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3: Calculation */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>
            <div className="flex flex-row gap-5">
              <div className="basis-4/12">

              <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 3</p> 
                  <h1 className="text-2xl font-semibold ">
                  Calculation
                  </h1>
                </div>
            
              </div>
              <div className="basis-8/12">
                <p className="text-lg text-black">
                  <b> Emission Factors: </b> Each response is linked to specific
                  emission factors that represent the average emissions (in kg
                  CO2 equivalent) associated with each activity or choice.
                </p>
                <p className="text-lg text-black">
                  <b> Baseline and Adjustments:</b> The tool starts with a
                  baseline of average per capita emissions for your country. It
                  then adjusts this baseline based on your age, historical
                  emissions data, and current lifestyle choices.
                </p>
              </div>
            </div>
          </div>
          {/* Step 4: Estimating past and present emissions */}
          <div className="bg-white rounded-lg shadow-lg p-8 ">
            <span className="absolute -left-[14px] h-6 w-6 rounded-full bg-primary"></span>

            <div className="flex flex-row gap-5">
              <div className="basis-4/12">
              <div>
                  <p className="text-lg pb-3 font-normal text-primary">Step 4</p> 
                  <h1 className="text-2xl font-semibold ">
                  Estimating past and present emissions
                  </h1>
                </div>
          
              </div>
              <div className="basis-8/12">
                <p className="text-lg text-black">
                  <b> Combining historical and current data: </b>The calculator
                  not only provides an estimate of your current annual carbon
                  footprint but also integrates the historical emissions based
                  on your age.
                </p>
                <p className="text-lg text-black">
                  <b> Final Footprint: </b>The result is a comprehensive
                  estimation of your total carbon footprint, expressed in
                  equivalent tons of carbon dioxide (tCO2e).
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Understanding Your Impact */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Understanding Your Impact
          </h2>
          <p className="text-lg text-black">
            Your carbon footprint represents the total amount of greenhouse
            gases, both direct and indirect, that are emitted due to your
            lifetime and current lifestyle choices. It underscores the
            importance of sustainable decisions at every stage of life.
          </p>
        </div>
      </div>
      <Hero/>
    </>
  );
}
