import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function CalculatorWorks() {
  return (
    <>
      <section className="h-80 md:96 bg-primary bg-opacity-10 mt-5  md:mt-15 lg:mt-0">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase mb-10 ">
              How our carbon footprint calculator works
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 pt-10 max-w-5xl">
      <section className=" bg-opacity-10 text-center pb-20">
        <div className="container-fluid lg:container mx-auto py-5"> 
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl   relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group  hover:text-white">
              <div className="flex flex-col justify-between   items-center  h-full gap-3">
                <h1 className="text-3xl leading-[40px]  capitalize   px-5">
                  single purchase
                </h1>
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
                <h1 className="text-3xl leading-[40px]  capitalize   px-5">
                  bank transactions
                </h1>
                <p className="text-md ">
                  Our enhanced Carbon Footprint Calculator now integrates
                  customer transaction data, providing a method for calculating
                  your carbon footprint with more accuracy.
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
                <h1 className="text-3xl leading-[40px]  capitalize   px-5">
                  Monthly estimate
                </h1>
                <p className="text-md ">
                  Purchase a single amount of carbon offsets based on your own
                  preference.
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
        <p className="text-xl text-center font-bold mb-8 capitalize text-gray-600">
          Our Carbon Footprint Calculator is a meticulously designed tool that
          not only estimates your current carbon footprint but also accounts for
          past emissions based on your age. Here's how it operates:
        </p>
       
        <div className="grid grid-cols-1 gap-8 border-l-2 pl-16 relative mt-20 ">
          {/* Step 1: Gathering Personal Information */}
          <div className="bg-white rounded-lg   p-8  ">
            <span className="absolute -left-[25px] h-6 w-6  ml-3 rounded-full bg-[#FBB15F]"></span>
            <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap  ">
              <div className="md:basis-4/12 w-full  ">
                <div>
                  <p className="text-lg pb-3  text-primary">Step 1</p>
                  <h1 className="text-2xl font-semibold ">
                    Automatic Data Import
                  </h1>
                </div>
              </div>
              <div className=" w-full  md:basis-8/12   ">
                <div className="flex items-center mb-2">
                  <p className="text-lg  block  md:w-auto   text-gray-600">
                    <b className="text-black"> Seamless Integration: </b> The
                    calculator automatically imports and categorizes your daily
                    transactions, including purchases and expenses.
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-lg  block  md:w-auto   text-gray-600">
                    <b className="text-black">Comprehensive Coverage: </b>
                     Transactions from various sources, such as credit cards,
                    debit cards, and bank accounts, are aggregated to provide a
                    comprehensive overview of your spending habits.
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
                  <h1 className="text-2xl font-semibold ">
                    Categorization and Analysis
                  </h1>
                </div>
              </div>
              <div className=" w-full md:basis-8/12  ">
                {/* Commute */}
                <div className="flex items-center mb-2">
                  <p className="text-lg text-gray-600">
                    <b className="  text-[#101110] ">
                      Transaction Categorization: </b>
                       Each transaction is categorized based on its nature, such as
                    transportation, food, household items, and leisure
                    activities.
                  </p>
                </div>
                {/* Travel */}
                <div className="flex items-center mb-2">
                  <p className="text-lg text-gray-600">
                    <b className="  text-[#101110] ">
                      Carbon Emission Estimation: 
                    </b>   Our model assigns carbon emission estimates to each
                    transaction category, taking into account factors such as
                    product type, transportation mode, and energy consumption.
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
                  <h1 className="text-2xl font-semibold ">
                    Dynamic Tracking and Visualization
                  </h1>
                </div>
              </div>
              <div className=" w-full md:basis-8/12  ">
                <p className="text-lg text-gray-600">
                  <b className="text-black">Real-time Updates: </b>  The
                  calculator continuously tracks and updates your carbon
                  footprint based on your ongoing transactions, providing
                  real-time insights into your environmental impact.
                </p>
                <p className="text-lg text-gray-600 pt-2">
                  <b className="text-black">Visual Representation: </b>  
                   Interactive graphs and charts visually illustrate your carbon
                  emissions over time, allowing you to monitor changes and
                  trends effortlessly.
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
                  <h1 className="text-2xl font-semibold ">
                    Transparent Calculation Process
                  </h1>
                </div>
              </div>
              <div className=" w-full md:basis-8/12  ">
                <p className="text-lg text-gray-600">
                  <b className="text-black">Detailed Insights:</b> By tapping on
                  individual transactions, you can access detailed calculations
                  and sources used to determine the carbon emissions associated
                  with each purchase.
                </p>
                <p className="text-lg text-gray-600 pt-2">
                  <b className="text-black">Opportunities for Adjustment:</b> If
                  necessary, you can modify transaction details to ensure
                  accuracy and transparency in the calculation process.
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
          <p className="text-lg text-gray-600">
          By leveraging customer transaction data, our calculator offers a revolutionary approach to carbon tracking, providing personalized insights into your environmental footprint based on your spending habits. With this enhanced understanding, you can make informed decisions to reduce your carbon impact and contribute to a more sustainable future. 
          </p>
        </div>
      </div>
      <Hero />
    </>
  );
}
