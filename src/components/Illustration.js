import React from "react";
import img1 from "../assets/images/9825103.jpg";

export default function Illustration() {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-20">
        <div className="flex flex-row  justify-center items-center gap-10">
        {/*
          <div className="basis-6/12 gap-10 my-auto p-20">
            <h1 className="text-black mb-5 text-4xl">
            Emissions from food 
            </h1>
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center">
              Shred your food
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
          </div> */}
          <img src={img1} alt="" className="w-7/12 text-center" />
          {/* <div className="basis-6/12">
          </div> */}
        </div>
      </div>
    </section>
  );
}
