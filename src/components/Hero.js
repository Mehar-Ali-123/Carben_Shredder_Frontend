import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-[590px] md:h-[650px]
      bg-[url('./assets/images/heroImg3.jpg')]
     bg-no-repeat bg-cover  bg-black  mt-5"
    >
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-75">
        <div className="container mx-auto my-auto h-full flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center flex justify-center items-center lg:w-2/3 w-full flex-col my-auto">
            <h1 className="md:text-[75px] text-[#FFFFFF] text-4xl leading-[40px] md:leading-[90px] mb-4 pt-5 uppercase mt-20 lg:mt-5">
              Shred your <br />
              <span className=" text-primary uppercase text-2xl md:text-[75px]">carbon footprint </span>
            </h1>
            <p className="text-white  leading-10 text-lg md:text-2xl mb-7 tracking-[1px]">
              Offset your carbon footprint by subscribing to a monthly service
              that calculates and compensates for your environmental impact
            </p>
            <div className="flex justify-center">
            <Link to="/start-shredding">
                    <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-3xl text-md justify-center items-center w-[180px]">
                      Start shredding
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
                  </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
