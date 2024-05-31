import React from "react";
import img1 from "../assets/images/8018289.jpg";
import img2 from "../assets/images/9825103.jpg";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import icon4 from "../assets/images/icon-4.png";
import icon5 from "../assets/images/icon-5.png";
import icon6 from "../assets/images/icon-6.png";

export default function Goals() {
  return (
    <section className="bg-primary bg-opacity-10 mb-20">
      <div className="container mx-auto px-5 py-20 ">
        <div className="flex flex-col">
          <div className="max-w-3xl mx-auto">
            <h2 className=" text-[#101110] md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase ">
              Our goal is to provide real-time carbon insights and offsets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            <div className="flex justify-center items-center">
              <h2 className="text-xl md:text-3xl text-center md:text-start   leading-10 ">
                Track and offset your carbon emissions
              </h2>
            </div>
            <div>
              <div className=" bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h2 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] pb-3">
                  <img src={icon1} className="w-12 h-12" alt="icon" />
                  Baseline your carbon footprint
                </h2>
                <p className="text-md  leading-6">
                  We carefully check how much CO2 you emit per month, so we can
                  ensure you offset the right amount of carbon to neutralize
                  your impact.
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h2 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px]  pb-3">
                  <img src={icon2} className="w-12 h-12" alt="icon" />
                  Track your lifestyle changes
                </h2>
                <p className="text-md  leading-6">
                Update your lifestyle changes to reflect the carbon offsets you purchase per month.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h2 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px]  pb-3">
                  <img src={icon3} className="w-12 h-12" alt="icon" />
                  Small contributions can have a big impact
                </h2>
                <p className="text-md  leading-6">
                90% of your contribution after fees will be allocated to managing your carbon offset projects by Cnaught, remaining amount will be used for web development and maintenance to accomplish our mission.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            <div className="flex justify-center items-center">
              <h2 className="text-xl md:text-3xl text-center md:text-start    leading-10 ">
              Our core values that drive positive impact
              </h2>
            </div>
            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h2 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon4} className="w-12 h-12" alt="icon" />
                  Sustainability
                </h2>
                <p className="text-md  leading-6">
                  We are dedicated to promoting environmental responsibility and
                  sustainable living, striving to make a positive impact on our
                  planet.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0] ">
                <h2 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon5} className="w-16 h-12" alt="icon" />
                  Transparency
                </h2>
                <p className="text-md  leading-6">
                  We believe in openness and honesty, providing our users with
                  clear insights into their carbon footprint and the actions
                  they can take to reduce it.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h2 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon6} className="w-20 h-12" alt="icon" />
                  Innovation
                </h2>
                <p className="text-md  leading-6">
                  We continuously explore cutting-edge technology to develop
                  user-friendly solutions that empower you to embrace carbon
                  neutrality and drive positive change.
                </p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
