import React from "react";
import CalculatorForm from "../components/CalculatorForm";

export default function Calculator() {
  return (
    <>
      <section className=" h-96 bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">Calculator</h1>
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
