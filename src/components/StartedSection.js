import React from "react";
import FlightImg from "../assets/images/fligh-image.jpg";
import CO2IMG from "../assets/images/co2Img.jpg";
import img1 from "../assets/images/9825103.jpg";
export default function StartedSection() {
  return (
    <> 
      <section className="bg-white pb-10">
        <div className="container mx-auto py-10 max-w-5xl">
          <div className="text-center mb-10">
            <h1 className=" text-[#101110]  md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase ">
              Did you know
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-gray-500 uppercase text-[14px]">
              Join our journey in understanding your carbon footprint
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-xl overflow-hidden m-5 lg:m-0">
            <div className="flex justify-center items-center p-0  mt-10 md:mt-0 border-2 border-primary rounded-2xl overflow-hidden">
              <img className=" " src={FlightImg} alt="" />
            </div>
            <div className="flex justify-center items-center p-0  mt-10 md:mt-0  border-2 border-primary rounded-xl overflow-hidden">
            <img src={img1} alt="" className=" " />
            </div>
            {/* <div className="flex justify-center md:justify-end items-center object-cover" >
            <img src={img1} alt="" className="w-7/12 text-center" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
