import React from "react";
import img1 from "../assets/images/9825103.jpg";

export default function Illustration() {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-20">
        <div className="flex flex-row  justify-center items-center gap-10"> 
          <img src={img1} alt="" className="w-7/12 text-center" /> 
        </div>
      </div>
    </section>
  );
}
