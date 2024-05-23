import React from "react";
import CalculatorForm from "../components/CalculatorForm";

export default function Calculator() {
  return (
    <>
      <section className="h-80 md:96 bg-primary bg-opacity-10 mt-5  md:mt-15 lg:mt-0">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase mb-10 ">
              Calculater
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-20 max-w-4xl">
          <CalculatorForm />
        </div>
      </section>
    </>
  );
}
