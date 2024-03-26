import React from "react";
import Plogo1 from "../assets/images/p-logo1.png";
import Plogo2 from "../assets/images/p-logo2.png";
import Plogo3 from "../assets/images/p-logo3.png";
import Plogo4 from "../assets/images/p-logo4.png";
import Plogo5 from "../assets/images/p-logo5.png";
import Plogo6 from "../assets/images/p-logo6.png";
import Plogo7 from "../assets/images/p-logo7.png";
import Plogo8 from "../assets/images/p-logo8.png";

export default function ProjectPartner() {
  return (
    <>
      <section className="bg-primary bg-opacity-10">
        <div className="container mx-auto py-28 ">
          <div className="flex flex-col gap-8 justify-center items-center ">
            <h1 className="text-3xl md:text-[40px] leading-[50px]  text-center">
              Our projects partner with the best in the business
            </h1>
            {/* <div className="flex flex-row justify-between items-center gap-10 pt-10">
              <img src={Plogo1} className="object-contain" alt="" />
              <img src={Plogo2} className="object-contain" alt="" />
              <img src={Plogo3} className="object-contain" alt="" />
            </div> */}
            <div className='grid grid-cols-4 gap-10 max-w-4xl'>
            <img src={Plogo1} alt="logo" className="text-center m-auto" />
            <img src={Plogo2} alt="logo" className="text-center m-auto" />
            <img src={Plogo3} alt="logo" className="text-center m-auto" />
            <img src={Plogo4} alt="logo" className="text-center m-auto" />
            <img src={Plogo5} alt="logo" className="text-center m-auto" />
            <img src={Plogo6} alt="logo" className="text-center m-auto" />
            <img src={Plogo7} alt="logo" className="text-center m-auto" />
            <img src={Plogo8} alt="logo" className="text-center m-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
