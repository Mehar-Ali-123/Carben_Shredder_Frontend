import React from "react";
import Step1 from "../assets/images/step-1.png";
import Step2 from "../assets/images/step-2.png";
import Step3 from "../assets/images/microplatics.png";

export default function GuideSteps() {
  return (
    <>
      <section className="bg-primary bg-opacity-10">
      {/* 
        <div className="container mx-auto py-20 px-4">
          <div className="text-center">
            <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
              How it works
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Shred your carbon
            </p>
          </div>
          <div class="flex flex-row gap-16 pb-10">
            <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
              <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white">
                01
              </h1>
              <h1 className="text-3xl md:text-[40px]  leading-[50px]">
                Estimate your carbon footprint
              </h1>
              <p className="text-lg">
                Take a simple quiz to estimate your carbon footprint based on
                your current and past lifestyle choices. The calculator adjusts
                a country-specific baseline to your choices in four key areas:
                <br />
                <br />
                1) Commute,
                <br />
                2) Travel,
                <br />
                3) Food, and
                <br />
                4) Home.
                <br />
                <br />
                Your carbon footprint measures the total amount of greenhouse
                gas emissions, both direct and indirect, caused by you. It is
                expressed in equivalent tons of carbon dioxide.
              </p>
            </div>
            <div class="basis-full md:basis-6/12 ">
              <img src={Step1} className="text-center w-[90%]" alt="" />
              {/* <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div> 
            </div>
          </div>
          <div class="flex flex-row gap-16 py-10">
            <div class="basis-full md:basis-6/12    ">
              <img src={Step2} alt="" className="text-center w-[90%]" />
            </div>
            <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
              <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white">
                02
              </h1>
              <h1 className="text-3xl md:text-[40px]  leading-[50px]">
                Shred your carbon footprint by subscribing to our monthly carbon
                offset service.
              </h1>
              <p className="text-lg">
                We partner with CNaught to purchase a diversified portfolio of
                high-quality carbon credits that maximizes impact and mitigates
                risk. CNaught's portfolio follows the science-based best
                practices laid out in Oxford’s Principles for Carbon Offsetting.
              </p>
            </div>
          </div>
          <div class="flex flex-row gap-16 py-10">
            <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
              <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white">
                03
              </h1>
              <h1 className="text-3xl md:text-[40px]  leading-[50px]">
                Track your carbon footprint and offsets.
              </h1>
              <p className="text-lg">
                Keep track of your carbon footprint and determine the impact of
                your offset efforts in your personalized carbon dashboard.
              </p>
            </div>
            <div class="basis-full md:basis-6/12 ">
              <img src={Step3} alt="" className="text-center w-[90%]" />
            </div>
          </div>
        </div>
      */}

        <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-10">
        <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
          How it works
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Shred your carbon
        </p>
      </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-xl relative p-7 ">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 08), rgba(255, 255, 255, 0.8)), url(${Step1})`,
                }}
                className="bg-cover bg-no-repeat h-full "
              >
                <span className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white absolute top-[-15px] left-[-15px]">
                  01
                </span>
                <h1 className="text-3xl md:text-[40px]  leading-[50px] mb-6">
                  Estimate your carbon footprint
                </h1>
                <p className="text-lg">
                  Take a simple quiz to estimate your carbon footprint based on
                  your current and past lifestyle choices. The calculator
                  adjusts a country-specific baseline to your choices in four
                  key areas:
                  <br />
                  <br />
                  1) Commute,
                  <br />
                  2) Travel,
                  <br />
                  3) Food, and
                  <br />
                  4) Home.
                  <br />
                  <br />
                  Your carbon footprint measures the total amount of greenhouse
                  gas emissions, both direct and indirect, caused by you. It is
                  expressed in equivalent tons of carbon dioxide.
                </p>
                {/*  <img src={Step1} className="text-center w-[90%]" alt="" />*/}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl relative p-7 ">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 08), rgba(255, 255, 255, 0.8)), url(${Step2})`,
                }}
                className="bg-cover bg-no-repeat  h-full"
              >
                <span className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white absolute top-[-15px] left-[-15px]">
                  02
                </span>
                <h1 className="text-3xl md:text-[40px]  leading-[50px] mb-6">
                Shred your carbon footprint by subscribing to our monthly carbon
                offset service.
              </h1>
              <p className="text-lg">
                We partner with CNaught to purchase a diversified portfolio of
                high-quality carbon credits that maximizes impact and mitigates
                risk. CNaught's portfolio follows the science-based best
                practices laid out in Oxford’s Principles for Carbon Offsetting.
              </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl relative p-7 ">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 08), rgba(255, 255, 255, 0.8)), url(${Step3})`,
              }}
              className="bg-cover bg-no-repeat bg-right h-full "
            >
              <span className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white absolute top-[-15px] left-[-15px]">
                03
              </span>
              <h1 className="text-3xl md:text-[40px]  leading-[50px] mb-6">
                Track your carbon footprint and offsets.
              </h1>
              <p className="text-lg">
                Keep track of your carbon footprint and determine the impact of
                your offset efforts in your personalized carbon dashboard.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
