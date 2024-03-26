import React from "react";

export default function Hero() {
  return (
    <section className="h-[800px] bg-[url('./assets/images/FullSizeRender.jpg')] bg-no-repeat bg-cover bg-black ">
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <div className="container mx-auto my-auto h-full flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center flex justify-center items-center lg:w-2/3 w-full flex-col my-auto">
            <h1 className="md:text-[100px] text-white text-3xl leading-[120px] mb-4">
              Shred your <br />
              <span className="text-primary">carbon footprint </span>
            </h1>
            <p className="text-white  leading-10 text-2xl mb-7">
              Offset your carbon footprint by subscribing to a monthly service
              that calculates and compensates for your environmental impact.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
