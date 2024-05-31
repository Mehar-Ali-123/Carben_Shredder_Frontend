import PlaidIntegration from "axios";
import React from "react";
import { Link } from "react-router-dom";
import PlaidIntegeration from "../components/PlaidIntegeration";
function StartShredding() {
  return (
    <>
      <section className=" bg-opacity-10 text-center px-6 md:px-16 lg:px-28 xl:px-52 mt-16">
        <div className="container-fluid lg:container mx-auto py-20 px-4 ">
          <div className="text-center mb-10">
            <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px]  uppercase mb-14 text-center">
              Shred your carbon
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl   relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group  hover:text-white">
              <div className="flex flex-col justify-between   items-center  h-full gap-3">
                <h1 className="text-2xl leading-[30px]  px-5">
                  Single purchase
                </h1>
                <p className="text-md ">
                  Purchase a single amount of carbon offsets based on your own
                  preference.
                </p>
                <p className="text-center text-primary underline  ">
                  <Link to="/single-purchase">
                    <button className="bg-primary   border-primary text-white p-2 px-16 rounded-lg group-hover:bg-white group-hover:text-primary">
                      Start
                    </button>
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl   relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group hover:text-white">
              <div className="flex flex-col justify-between   items-center  h-full gap-3">
                <h1 className="text-2xl leading-[30px] px-5">
                Bank transaction calculator
                </h1>
                <p className="text-md ">
                  Our enhanced Carbon Footprint Calculator now integrates
                  customer transaction data, providing a method for calculating
                  your carbon footprint with more accuracy.
                </p>
                <p className="text-center text-primary underline  ">
                  <Link to="/plaid-connect">
                    <button className="bg-primary   border-primary text-white p-2 px-16 rounded-lg group-hover:bg-white group-hover:text-primary">
                      Start
                    </button>
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl   relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group  hover:text-white">
              <div className="flex flex-col justify-between   items-center  h-full gap-3">
                <h1 className="text-2xl leading-[30px] px-5">
                Lifestyle calculator
                </h1>
                <p className="text-md ">
                Estimate your carbon footprint by taking a quiz.
                </p>
                <p className="text-center text-primary underline  ">
                  <Link to="/calculator">
                    <button className="bg-primary   border-primary text-white p-2 px-16 rounded-lg group-hover:bg-white group-hover:text-primary">
                      Start
                    </button>
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

export default StartShredding;
