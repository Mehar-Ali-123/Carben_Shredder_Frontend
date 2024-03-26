import React from "react";
import MissionImg from "../assets/images/logo.png";

export default function OurMission(props) {
  return (
    <>
      <section className="text-gray-600 ">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center  ">
          <div className=" flex flex-col md:flex-row items-center text-center gap-20 mx-auto max-w-5xl rounded-lg shadow-md bg-opacity-30 bg-white p-8 ">
            <div className="  z-10 ">
              <h1 className=" text-6xl mb-4 font-medium text-gray-900 text-start ">
                The Carbon Shredder
              </h1>
              <p className="mb-8 text-black text-lg leading-relaxed text-start">
                {props.OurMission}
              </p>
            </div>
            <img
              className="object-cover object-center rounded w-44 "
              alt="hero"
              src={MissionImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
