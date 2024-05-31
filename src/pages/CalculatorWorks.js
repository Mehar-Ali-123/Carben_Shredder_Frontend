import React, { useState } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CalculatorWorks() {
  const [activeTab, setActiveTab] = useState("Single purchase");
  return (
    <>
      <Helmet>
        <title>
          Calculate Your Carbon Footprint | Carbon Footprint Calculator
        </title>
        <meta
          name="description"
          content="Use our Carbon Footprint Calculator to estimate your environmental impact. Understand past and present emissions. Join us in reducing carbon footprint today!."
        />
      </Helmet>

      <section className="h-48 md:h-56 md:96 bg-primary bg-opacity-10 mt-12  md:mt-15 lg:mt-0">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase mb-10 ">
              How our carbon footprint calculator works
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 pt-10 max-w-5xl">
        <p className="text-xl text-center font-bold mb-8 text-[#101110]">
          Our carbon footprint calculator is a meticulously designed tool that
          not only estimates your current carbon footprint but also accounts for
          past emissions based on your age. Here's how it operates:
        </p>

        <div className="flex justify-center mt-10">
          <ul
            className="flex  list-none flex-row flex-wrap  border-2 border-primary rounded-3xl w-auto overflow-hidden text-[9px] sm:text-[15px]"
            role="tablist"
          >
            <li role="presentation">
              <button
                className={`block   border-transparent px-2 md:px-7 p-3 font-medium  leading-tight ${
                  activeTab === "Single purchase"
                    ? " border-primary bg-primary text-white"
                    : "text-neutral-500 dark:text-white/50"
                }`}
                onClick={() => setActiveTab("Single purchase")}
                role="tab"
                aria-controls="tabs-home"
                aria-selected={activeTab === "Single purchase"}
              >
                Single Purchase
              </button>
            </li>
            <li role="presentation">
              <button
                className={` block   border-transparent px-2 md:px-7 p-3    font-medium  leading-tight ${
                  activeTab === "Bank transaction calculator"
                    ? " border-primary bg-primary text-white"
                    : "text-neutral-500 dark:text-white/50"
                }`}
                onClick={() => setActiveTab("Bank transaction calculator")}
                role="tab"
                aria-controls="tabs-profile"
                aria-selected={activeTab === "Bank transaction calculator"}
              >
                Bank transaction calculator
              </button>
            </li>
            <li role="presentation">
              <button
                className={`block   border-transparent px-2 md:px-7 p-3    font-medium  leading-tight ${
                  activeTab === "Lifestyle calculator"
                    ? " border-primary bg-primary text-white"
                    : "text-neutral-500 dark:text-white/50"
                }`}
                onClick={() => setActiveTab("Lifestyle calculator")}
                role="tab"
                aria-controls="tabs-messages"
                aria-selected={activeTab === "Lifestyle calculator"}
              >
                Lifestyle calculator
              </button>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <div
            className={`${
              activeTab === "Single purchase"
                ? "block opacity-100"
                : "hidden opacity-0"
            } transition-opacity duration-150 ease-linear`}
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
          >
            <div className="grid grid-cols-1 gap-8 border-l-2 pl-8 md:pl-16 pe-5 relative mt-20 ">
              {/* Step 1: Gathering Personal Information */}
              <div className="bg-white rounded-lg p-8 ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap  ">
                  <div className="md:basis-4/12 w-full">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 1</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Amount
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full  md:basis-8/12   ">
                    <div className="flex items-center mb-2">
                      <p className="md:text-lg  block  md:w-auto   text-sm  text-gray-600">
                        <b className="text-black">Selection of amount: </b>
                        Select amount of carbon offsets or equivalent total in
                        USD.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Understanding Your Lifestyle */}
              <div className="bg-white rounded-lg   p-8  ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap  ">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 2</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Dashboard
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full  md:basis-8/12   ">
                    <div className="flex items-center mb-2">
                      <p className="md:text-lg  block  md:w-auto   text-sm  text-gray-600">
                        <b className="text-black">Verify your dashboard: </b>
                        Simply order and find your impact in your personalized
                        dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeTab === "Bank transaction calculator"
                ? "block opacity-100"
                : "hidden opacity-0"
            } transition-opacity duration-150 ease-linear`}
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            <div className="grid grid-cols-1 gap-8 border-l-2 pl-8 md:pl-16 pe-5 relative mt-20 ">
              {/* Step 1: Gathering Personal Information */}
              <div className="bg-white rounded-lg   p-8  ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap  ">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 1</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Automatic data import
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full  md:basis-8/12   ">
                    <div className="flex items-center mb-2">
                      <p className="md:text-lg  block  md:w-auto   text-sm  text-gray-600">
                        <b className="text-black">Seamless integration: </b> The
                        calculator automatically imports and categorizes your
                        daily transactions, including purchases and expenses.
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <p className="md:text-lg  block  md:w-auto   text-sm  text-gray-600">
                        <b className="text-black">Comprehensive coverage: </b>
                        Transactions from various sources, such as credit cards,
                        debit cards, and bank accounts, are aggregated to
                        provide a comprehensive overview of your spending
                        habits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 2: Understanding Your Lifestyle */}
              <div className="bg-white rounded-lg   p-8 ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 2</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Categorization and analysis
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full md:basis-8/12  ">
                    {/* Commute */}
                    <div className="flex items-center mb-2">
                      <p className="text-sm md:text-lg  text-gray-600">
                        <b className="  text-[#101110] ">
                          Transaction categorization:{" "}
                        </b>
                        Each transaction is categorized based on its nature,
                        such as transportation, food, household items, and
                        leisure activities.
                      </p>
                    </div>
                    {/* Travel */}
                    <div className="flex items-center mb-2">
                      <p className="text-sm md:text-lg  text-gray-600">
                        <b className="  text-[#101110] ">
                          Carbon emission estimation:
                        </b>{" "}
                        Our model assigns carbon emission estimates to each
                        transaction category, taking into account factors such
                        as product type, transportation mode, and energy
                        consumption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 3: Calculation */}
              <div className="bg-white rounded-lg   p-8">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 3</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Dynamic tracking and visualization
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full md:basis-8/12  ">
                    <p className="text-sm md:text-lg  text-gray-600">
                      <b className="text-black">Real-time updates: </b> The
                      calculator continuously tracks and updates your carbon
                      footprint based on your ongoing transactions, providing
                      real-time insights into your environmental impact.
                    </p>
                    <p className="text-sm md:text-lg  text-gray-600 pt-2">
                      <b className="text-black">Visual representation: </b>
                      Interactive graphs and charts visually illustrate your
                      carbon emissions over time, allowing you to monitor
                      changes and trends effortlessly.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 4: Estimating past and present emissions */}
              <div className="bg-white rounded-lg   p-8 ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>

                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 4</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Transparent calculation process
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full md:basis-8/12  ">
                    <p className="text-sm md:text-lg  text-gray-600">
                      <b className="text-black">Detailed insights:</b> By
                      tapping on individual transactions, you can access
                      detailed calculations and sources used to determine the
                      carbon emissions associated with each purchase.
                    </p>
                    <p className="text-sm md:text-lg  text-gray-600 pt-2">
                      <b className="text-black">
                        Opportunities for adjustment:
                      </b>{" "}
                      If necessary, you can modify transaction details to ensure
                      accuracy and transparency in the calculation process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              activeTab === "Lifestyle calculator"
                ? "block opacity-100"
                : "hidden opacity-0"
            } transition-opacity duration-150 ease-linear`}
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-messages-tab"
          >
            <div className="grid grid-cols-1 gap-8 border-l-2 pl-8 md:pl-16 pe-5 relative mt-20 ">
              {/* Step 1: Gathering Personal Information */}
              <div className="bg-white rounded-lg   p-8  ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap  ">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 1</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Gathering Personal Information
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full  md:basis-8/12   ">
                    <div className="flex items-center mb-2">
                      <p className="  block  md:w-auto   text-sm md:text-lg  text-gray-600">
                        <b className="text-black">Age and location: </b>{" "}
                        Initially, the calculator requires your age and country
                        of residence. Your age is crucial in estimating your
                        past emissions. The calculator uses age-specific data to
                        determine the average emissions you likely produced in
                        each stage of your life. This approach provides a
                        historical perspective on your carbon footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 2: Understanding Your Lifestyle */}
              <div className="bg-white rounded-lg   p-8 ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 2</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Understanding Your Lifestyle
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full md:basis-8/12  ">
                    {/* Commute */}
                    <div className="flex items-center mb-2">
                      <p className="text-sm md:text-lg  text-gray-600">
                        <b className="  text-[#101110] ">Commute:</b>
                        Your primary mode of transportation and its frequency
                        help in adjusting your current carbon footprint.
                      </p>
                    </div>
                    {/* Travel */}
                    <div className="flex items-center mb-2">
                      <p className="text-sm md:text-lg  text-gray-600">
                        <b className="  text-[#101110] ">Travel:</b>
                        Your travel habits, including the types of travel and
                        their frequency, are considered for their environmental
                        impact.
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <p className="text-sm md:text-lg  text-gray-600">
                        <b className="  text-[#101110] ">Food:</b>
                        The calculator evaluates your diet to estimate the
                        emissions related to your food consumption.
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <p className="text-sm md:text-lg  text-gray-600">
                        <b className="  text-[#101110] ">Home:</b>
                        It assesses your home energy usage to determine the
                        carbon footprint from your living environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 3: Calculation */}
              <div className="bg-white rounded-lg   p-8">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 3</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Calculation
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full md:basis-8/12  ">
                    <p className="text-sm md:text-lg  text-gray-600">
                      <b className="text-black">Emission Factors: </b> Each
                      response is linked to specific emission factors that
                      represent the average emissions (in kg CO2 equivalent)
                      associated with each activity or choice.
                    </p>
                    <p className="text-sm md:text-lg  text-gray-600 pt-2">
                      <b className="text-black">Baseline and Adjustments: </b>
                      The tool starts with a baseline of average per capita
                      emissions for your country. It then adjusts this baseline
                      based on your age, historical emissions data, and current
                      lifestyle choices.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 4: Estimating past and present emissions */}
              <div className="bg-white rounded-lg   p-8 ">
                <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>

                <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap">
                  <div className="md:basis-4/12 w-full  ">
                    <div>
                      <p className="text-lg pb-3  text-primary">Step 4</p>
                      <h2 className="text-lg md:text-2xl font-semibold ">
                        Estimating past and present emissions
                      </h2>
                    </div>
                  </div>
                  <div className=" w-full md:basis-8/12  ">
                    <p className="text-sm md:text-lg  text-gray-600">
                      <b className="text-black">
                        Combining historical and current data:{" "}
                      </b>{" "}
                      The calculator not only provides an estimate of your
                      current annual carbon footprint but also integrates the
                      historical emissions based on your age.
                    </p>
                    <p className="text-sm md:text-lg  text-gray-600 pt-2">
                      <b className="text-black">
                        Opportunities for adjustment:{" "}
                      </b>{" "}
                      The result is a comprehensive estimation of your total
                      carbon footprint, expressed in equivalent tons of carbon
                      dioxide (tCO2e).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Understanding your impact
          </h2>
          <p className="text-sm md:text-lg  text-gray-600">
            By leveraging customer transaction data, our calculator offers a
            revolutionary approach to carbon tracking, providing personalized
            insights into your environmental footprint based on your spending
            habits. With this enhanced understanding, you can make informed
            decisions to reduce your carbon impact and contribute to a more
            sustainable future.
          </p>
        </div>
        <section className=" bg-opacity-10 text-center pt-10">
          <div className="container-fluid lg:container mx-auto py-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="bg-white rounded-xl   relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group  hover:text-white">
                <div className="flex flex-col justify-between   items-center  h-full gap-3">
                  <h2 className="text-2xl leading-[30px]  px-5">
                    Single purchase
                  </h2>
                  <p className="text-md ">
                    Purchase a single amount of carbon offsets based on your own
                    preference.
                  </p>
                  <p className="text-center text-primary underline  ">
                    <Link to="/single-purchase">
                      <button className="bg-primary   border-primary text-white p-2 px-16 rounded-lg group-hover:bg-white group-hover:text-primary">
                        Start
                      </button>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl   relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group hover:text-white">
                <div className="flex flex-col justify-between   items-center  h-full gap-3">
                  <h2 className="text-2xl leading-[30px] px-5">
                    Bank transaction calculator
                  </h2>
                  <p className="text-md ">
                    Our enhanced Carbon Footprint Calculator now integrates
                    customer transaction data, providing a method for
                    calculating your carbon footprint with more accuracy.
                  </p>
                  <p className="text-center text-primary underline  ">
                    <Link to="/plaid-connect">
                      <button className="bg-primary   border-primary text-white p-2 px-16 rounded-lg group-hover:bg-white group-hover:text-primary">
                        Start
                      </button>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl   relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group  hover:text-white">
                <div className="flex flex-col justify-between   items-center  h-full gap-3">
                  <h2 className="text-2xl leading-[30px] px-5">
                    Lifestyle calculator
                  </h2>
                  <p className="text-md ">
                    Estimate your carbon footprint by taking a quiz.
                  </p>
                  <p className="text-center text-primary underline  ">
                    <Link to="/calculator">
                      <button className="bg-primary   border-primary text-white p-2 px-16 rounded-lg group-hover:bg-white group-hover:text-primary">
                        Start
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Hero />
    </>
  );
}
