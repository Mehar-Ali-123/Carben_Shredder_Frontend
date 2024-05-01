import React, { useEffect } from "react";
import MissionImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurMission(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <section className="text-gray-600 ">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center  ">
          <div className=" flex flex-col md:flex-row items-center text-center gap-20 mx-auto max-w-5xl rounded-lg shadow-md bg-opacity-30 bg-white p-8 ">
            <div className="  z-10 ">
              <h1 className=" text-3xl mb-4 font-medium text-gray-900 text-start ">
                Our mission is to offer customers ease of mind by providing an
                easy way to track and offset carbon emissions, tailored to your
                lifestyle.
              </h1>
              <Link to="/about">
                <p className="text-start text-primary underline text-xl">
                  <span>Learn more about our mission</span>
                </p>
              </Link>
            </div>
            <img
             data-aos="zoom-in"
              className="object-cover object-center rounded w-44 "
              alt="hero"
              src={MissionImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
