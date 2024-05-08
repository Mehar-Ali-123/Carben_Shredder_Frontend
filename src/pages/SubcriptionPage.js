import React from "react";
import SubcriptionCard from "../components/SubcriptionCard";
import { Link } from "react-router-dom";

function SubcriptionPage() {
  return (
    <>
     <section className="h-96  bg-primary bg-opacity-10 mt-40 md:mt-0">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black ">
            Carbon Shredder Subcription Plan
            </h1>
           
          </div>
        </div>
      </section>  
      <div className="px-0 xl:px-52 mt-10">   
      <SubcriptionCard />
      <p className="py-10 text-center">
     If you want to calculate your plan again , <Link className="text-primary" to ="/calculator">Click Here </Link>
      </p>
      </div>
    </>
  );
}

export default SubcriptionPage;
