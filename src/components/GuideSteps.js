import React from "react";
import Step1 from "../assets/images/step-1.png";
import Step2 from "../assets/images/step-2.png";
import Step3 from "../assets/images/microplatics.png";
import { Link } from "react-router-dom";

export default function GuideSteps() {
  return (
    <>
      <section className="bg-primary bg-opacity-10 text-center">
        <div className="container mx-auto py-20 px-4 ">
          <div className="text-center mb-10">
            <h4 className=" text-[#101110] md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase">
              How it works
            </h4>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 uppercase text-[14px]">
              Shred your carbon
            </p>
          </div>
          <div className="grid md:mx-40 lg:mx-0 grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg   relative p-7  hover:border-2 hover:border-[#DDCCD0] h-[380px] lg:h-auto">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 08), rgba(255, 255, 255, 0.9)), url(${Step1})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="bg-cover bg-no-repeat  h-full flex flex-col justify-between"
              >
                <span className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white absolute top-[-15px] left-[-15px]">
                  01
                </span>
                <h1 className="text-lg md:text-2xl leading-[30px] mb-6 capitalize">
                  Estimate carbon footprint
                </h1>
                <p className="text-md md:text-lg">
                  Estimate your carbon footprint by taking a quiz, connecting
                  the app with your bank, or filling in your own estimate. Your
                  carbon footprint is the total amount of greenhouse gas
                  emissions, expressed in equivalent tons of carbon dioxide,
                  caused by you.
                  <br />
                  <br />
                  {/* Your carbon footprint measures the total amount of greenhouse
                  gas emissions, both direct and indirect, caused by you. It is
                  expressed in equivalent tons of carbon dioxide. */}
                  <p className="text-center text-primary underline text-xl">
                    {" "}
                    <Link to="/calculator-works">
                      <span>Learn more</span>
                    </Link>
                  </p>
                </p>
                {/*  <img src={Step1} className="text-center w-[90%]" alt="" />*/}
              </div>
            </div>
            <div className="bg-white rounded-lg   relative p-7  hover:border-2 hover:border-[#DDCCD0] h-[380px] lg:h-auto">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 08), rgba(255, 255, 255, 0.9)), url(${Step2})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="bg-cover bg-no-repeat  h-full flex flex-col justify-between"
              >
                <span className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white absolute top-[-15px] left-[-15px]">
                  02
                </span>
                <h1 className="text-lg md:text-2xl leading-[30px] mb-6 capitalize">
                  Subscribe to monthly carbon offsets
                </h1>
                <p className="text-md md:text-lg">
                  Shred your carbon footprint by subscribing to our monthly
                  carbon offset service
                </p>
                <p className="text-center text-primary underline text-xl">
                  {" "}
                  <Link to="/subscription-works">
                    <span>Learn more</span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg   relative p-7  hover:border-2 hover:border-[#DDCCD0] h-[380px] lg:h-auto">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 08), rgba(255, 255, 255, 0.9)), url(${Step3})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="bg-cover bg-no-repeat bg-right  h-full flex flex-col justify-between "
              >
                <span className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm bg-white absolute top-[-15px] left-[-15px]">
                  03
                </span>
                <h1 className="text-lg md:text-2xl  capitalize leading-[30px] mb-6">
                  Track impact
                </h1>
                <p className="text-md md:text-lg">
                  Keep track of your carbon footprint and determine the impact
                  of your offset efforts in your personalized carbon dashboard.
                </p>
                <br />

                <p className="text-center text-primary underline text-xl">
                  {" "}
                  <Link to="/track-your-carbon-impact">
                    <span>Learn more</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
