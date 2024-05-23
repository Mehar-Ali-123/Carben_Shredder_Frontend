import React from "react";
import Hero from "../components/Hero";
import Step1 from "../assets/images/EstimateStep1.jpg";
import Step2 from "../assets/images/FootprintStep2.jpg";
import Step3 from "../assets/images/FootprintStep3.jpg";

export default function HowItWorks() {
  return (
    <> 
      <section className="h-80 md:96 bg-primary bg-opacity-10 mt-5  md:mt-15 lg:mt-0">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase mb-10 ">
            How it works
            </h1>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-5 md:px-32 py-20 ">
        <div class="grid grid-cols-1 lg:grid-cols-2 pb-10 ">
          <div class=" w-full flex flex-col gap-5 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              01
            </h1>
            <h1 className="text-2xl leading-[30px] capitalize">
              Estimate your carbon footprint
            </h1>
            <p className="text-lg">
              Take a simple quiz to estimate your carbon footprint based on your
              current and past lifestyle choices. The calculator adjusts a
              country-specific baseline to your choices in four key areas:
              <span className="py-5 flex justify-between items-center flex-wrap">
                <span> 1) Commute</span>
                <span> 2) Travel, </span>
                <span> 3) Food, and </span>
                <span> 4) Home.</span>
              </span>
              Your carbon footprint measures the total amount of greenhouse gas
              emissions, both direct and indirect, caused by you. It is
              expressed in equivalent tons of carbon dioxide.
            </p>
          </div>
          <div class=" w-full flex justify-center lg:justify-end items-center p-10">
           <div className="rounded-xl overflow-hidden h-[400px] w-[80%] ">
           <img src={Step1} className="  w-[100%]  h-[100%]" alt="" /> 
           </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 pb-10 ">
        <div class="basis-full md:basis-6/12 flex justify-center lg:justify-start items-center p-10">
           <div className="rounded-xl overflow-hidden h-[400px] w-[80%] ">
           <img src={Step2} className="text-center w-[100%]  h-[100%]  object-cover" alt="" /> 
           </div>
          </div>
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              02
            </h1>
            <h1 className="text-2xl leading-[30px] capitalize">
              Shred your carbon footprint by subscribing to our monthly carbon
              offset service.
            </h1>
            <p className="text-lg">
              We partner with CNaught to purchase a diversified portfolio of
              high-quality carbon credits that maximizes impact and mitigates
              risk. CNaught's portfolio follows the science-based best practices
              laid out in Oxford’s Principles for Carbon Offsetting.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 pb-10 ">
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              03
            </h1>
            <h1 className="text-2xl leading-[30px] capitalize">
              Track your carbon footprint and offsets.
            </h1>
            <p className="text-lg">
              Keep track of your carbon footprint and determine the impact of
              your offset efforts in your personalized carbon dashboard.
            </p>
          </div>
          <div class="basis-full md:basis-6/12 flex justify-center lg:justify-end items-center p-10">
           <div className="rounded-xl overflow-hidden h-[400px] w-[80%] ">
           <img src={Step3} className="text-center w-[100%]  h-[100%]" alt="" /> 
           </div>
          </div>
        </div>
      </div>
      <Hero />
    </>
  );
}
