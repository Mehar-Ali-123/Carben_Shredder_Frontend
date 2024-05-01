import React from "react";
import { Link } from "react-router-dom"; 
function StartShredding() {
  return (
    <>
      <section className=" bg-opacity-10 text-center px-16 md:px-52 mt-48">
        <div className="container mx-auto py-20 px-4 ">
          <div className="text-center mb-10">
            <h1 className="text-black text-3xl md:text-[40px] leading-[40px] text-center mb-14 capitalize">
              Shred your carbon
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-xl relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group  hover:text-white">
              <div className="flex flex-col justify-between   items-center  h-full gap-3">
                <h1 className="text-3xl leading-[40px]  capitalize   px-5">
                  single purchase
                </h1>
                <p className="text-md ">
                  Purchase a single amount of carbon offsets based on your own
                  preference.
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

            <div className="bg-white rounded-xl shadow-xl relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group hover:text-white">
              <div className="flex flex-col justify-between   items-center  h-full gap-3">
                <h1 className="text-3xl leading-[40px]  capitalize   px-5">
                  bank transactions
                </h1>
                <p className="text-md ">
                  Our enhanced Carbon Footprint Calculator now integrates
                  customer transaction data, providing a method for calculating
                  your carbon footprint with more accuracy.
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

            <div className="bg-white rounded-xl shadow-xl relative  p-5 transform hover:bg-primary transition duration-2000 ease-in-out group  hover:text-white">
              <div className="flex flex-col justify-between   items-center  h-full gap-3">
                <h1 className="text-3xl leading-[40px]  capitalize   px-5">
                  Monthly estimate
                </h1>
                <p className="text-md ">
                  Purchase a single amount of carbon offsets based on your own
                  preference.
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
