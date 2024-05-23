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
            <h1 className=" text-[#101110] md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase ">
              Our goal is to provide real-time carbon insights and offsets.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            <div className="flex justify-center items-center">
              <h1 className="text-xl md:text-3xl text-center md:text-start   leading-10 ">
                Track & Offset Your Carbon Emissions
              </h1>
            </div>
            <div>
              <div className=" bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h1 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon1} className="w-12 h-12" alt="icon" />
                  Baseline your carbon footprint
                </h1>
                <p className="text-md  leading-6">
                  We carefully check how much CO2 you emit per month, so we can
                  ensure you offset the right amount of carbon to neutralize
                  your impact.
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h1 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon2} className="w-12 h-12" alt="icon" />
                  Track your lifestyle changes
                </h1>
                <p className="text-md  leading-6">
                  Update your lifestyle changes to reflect the carbon offsets
                  you purchase per month
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h1 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon3} className="w-12 h-12" alt="icon" />
                  Small contributions can have a big impact
                </h1>
                <p className="text-md  leading-6">
                  90% of your contribution will be allocated to managing your
                  carbon offset projects by Cnaught, remaining amount will be
                  used for web development and maintenance to accomplish our
                  mission.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            <div className="flex justify-center items-center">
              <h1 className="text-xl md:text-3xl text-center md:text-start    leading-10 ">
                Our Core Values That Drive Positive Impact
              </h1>
            </div>
            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h1 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon4} className="w-12 h-12" alt="icon" />
                  Sustainability
                </h1>
                <p className="text-md  leading-6">
                  We are dedicated to promoting environmental responsibility and
                  sustainable living, striving to make a positive impact on our
                  planet.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0] ">
                <h1 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon5} className="w-16 h-12" alt="icon" />
                  Transparency
                </h1>
                <p className="text-md  leading-6">
                  We believe in openness and honesty, providing our users with
                  clear insights into their carbon footprint and the actions
                  they can take to reduce it.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-5 text-center h-full hover:transform hover:rotate-1  transition-transform duration-300 hover:bg-[#DDCDD0]">
                <h1 className="flex flex-col justify-center  items-center text-xl md:text-2xl leading-[30px] capitalize pb-3">
                  <img src={icon6} className="w-20 h-12" alt="icon" />
                  Innovation
                </h1>
                <p className="text-md  leading-6">
                  We continuously explore cutting-edge technology to develop
                  user-friendly solutions that empower you to embrace carbon
                  neutrality and drive positive change.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex py-10 flex-row gap-16 flex-wrap md:flex-nowrap">
            <div className="basis-full md:basis-6/12 flex gap-6 flex-col  bg-white p-9 rounded">
              <h1 className="text-3xl   leading-10">
                Track & Offset Your Carbon Emissions
              </h1>

              <ul className="flex flex-col gap-8">
                <li className="flex gap-5">
                  <div iv className="flex justify-center items-start ">
                    <img src={icon1} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl ">
                      Baseline your carbon footprint
                    </h1>
                    <p className="text-lg leading-10">
                      We carefully check how much CO2 you emit per month, so we
                      can ensure you offset the right amount of carbon to
                      neutralize your impact.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start w-16">
                    <img src={icon2} alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl ">Track your lifestyle changes</h1>
                    <p className="text-lg leading-10">
                      Update your lifestyle changes to reflect the carbon
                      offsets you purchase per month
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon3} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl ">
                      Small contributions can have a big impact
                    </h1>
                    <p className="text-lg leading-10">
                      90% of your contribution will be allocated to managing
                      your carbon offset projects by Cnaught, while the
                      remaining amount will be used for web development and
                      maintenance in order to accomplish our mission.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="basis-full md:basis-6/12 flex gap-6 flex-col   bg-white p-9 rounded  ">
              <h1 className="text-3xl   leading-10">
                Our Core Values That Drive Positive Impact
              </h1>

              <ul className="flex flex-col gap-8">
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img
                      src={icon4}
                      className="w-28 h-[80px] object-contain"
                      alt="icon"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl ">Sustainability</h1>
                    <p className="text-lg leading-10">
                      We are dedicated to promoting environmental responsibility
                      and sustainable living, striving to make a positive impact
                      on our planet.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon5} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl ">Transparency</h1>
                    <p className="text-lg leading-10">
                      We believe in openness and honesty, providing our users
                      with clear insights into their carbon footprint and the
                      actions they can take to reduce it.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon6} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl ">Innovation</h1>
                    <p className="text-lg leading-10">
                      We continuously explore cutting-edge technology to develop
                      user-friendly solutions that empower you to embrace carbon
                      neutrality and drive positive change.
                    </p>
                  </div>
                </li>
              </ul> 
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
