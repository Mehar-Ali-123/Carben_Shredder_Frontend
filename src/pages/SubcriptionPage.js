import React, { useState } from "react";
import SubcriptionCard from "../components/SubcriptionCard";
import { Link } from "react-router-dom";
import LoaderPage from "../components/Loader/LoaderPage";

function SubcriptionPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <div>
           <section className="h-48 md:h-56 md:96 bg-primary bg-opacity-10 mt-12   md:mt-15 lg:mt-0">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase mb-10 ">
            Carbon Shredder Subcription Plan
            </h1>
          </div>
        </div>
      </section> 
          <div className="px-0 xl:px-52 mt-10">
            <SubcriptionCard setIsLoading={setIsLoading} />
            <p className="py-10 text-center">
              If you want to calculate your plan again ,{" "}
              <Link className="text-primary" to="/calculator">
                Click Here{" "}
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SubcriptionPage;
