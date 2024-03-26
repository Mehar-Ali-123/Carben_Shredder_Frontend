import React from "react";
import FlightImg from '../assets/images/fligh-image.jpg'

export default function StartedSection() {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto py-28 max-w-5xl ">
          <div className="flex flex-row  justify-center items-center gap-10">
     {/*     <div>
          
          <h1 className="text-3xl md:text-[30px] leading-[40px] mb-10">
          We are the FIRST generation to feel the impact of climate change and the LAST generation that can do something about it.
          </h1>
          <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
          Shred your flights
          </button>
          </div> */}
            <img src={FlightImg} className="w-8/12" alt="" />
            </div>
        </div>
      </section>
    </>
  );
}
