import React, { useState } from "react";
import Logo from "../assets/images/footer-logo-2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { server } from "../server";
export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = React.useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${server}/subscribe`, {
        email: data.email,
      });
      setMessage(response.data.message);
      reset();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  return (
    <footer className="text-gray-800 body-font bg-primary bg-opacity-20 w-[100%] overflow-hidden">
      <div className="container px-5 pt-24 mx-auto ">
        <div className="flex flex-row flex-wrap md:flex-nowrap">
          <div className="md:mx-0 mx-auto text-center md:text-left pr-0 md:pr-24 flex justify-start items-center flex-col ">
            <Link
              to="/"
              className="flex flex-col font-medium items-start md:justify-start justify-center text-gray-800"
            >
              <img src={Logo} className="w-32 " alt="Logo" />
            </Link>
            <span className="inline-flex sm:ml-auto  mt-3 justify-center sm:justify-start">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.facebook.com/carbonshredder"
                className="text-gray-500  p-1 rounded-md border-2 border-transparent hover:border-primary"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link
                // target="_blank"
                // rel="noopener noreferrer"
                // to=""
                className="ml-3 text-gray-500  p-1 rounded-md border-2 border-transparent hover:border-primary"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.instagram.com/carbonshredder/"
                className="ml-3 text-gray-500  p-1 rounded-md border-2 border-transparent hover:border-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                    fill="#6B7280"
                  />
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/company/carbonshredder/"
                className="ml-3 text-gray-500  p-1 rounded-md border-2 border-transparent hover:border-primary"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </Link>
            </span>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3    md:mt-0 mt-10  md:text-left w-[100%]">
            <div className=" lg:basis-1/3 basis-full  px-0 md:px-4 py-0 md:py-6    ">
              <h2 className=" font-bold text-gray-800 tracking-widest text-2xl mb-3">
                Quick links
              </h2>
              <nav className="list-none pb-10">
                <li>
                  <Link
                    to="/"
                    className="mb-3 text-gray-800   text-[15px]    tracking-[2px] footer-link hover:text-primary hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="mb-3 text-gray-800   text-[15px]    tracking-[2px] footer-link hover:text-primary hover:underline"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="mb-3 text-gray-800   text-[15px]    tracking-[2px] footer-link hover:text-primary hover:underline"
                  >
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-our-mission"
                    className="mb-3 text-gray-800   text-[15px]    tracking-[2px] footer-link hover:text-primary hover:underline"
                  >
                    Our mission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="mb-3 text-gray-800   text-[15px]    tracking-[2px] footer-link hover:text-primary hover:underline"
                  >
                    Connect
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="mb-3 text-gray-800   text-[15px]    tracking-[2px] footer-link hover:text-primary hover:underline"
                  >
                    Privacy policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="   lg:basis-1/3 basis-full">
              <ul className="flex flex-col gap-8 ">
                <li className="flex gap-5">
                  <div>
                    <h2 className="font-bold text-gray-800 tracking-widest text-2xl mb-0  py-0 md:pb-3 md:pt-6   ">
                      Address
                    </h2>
                    <div className="flex justify-center items-center gap-2  ">
                      <p className=" pr-10 text-[15px] tracking-[2px]">
                        Emission Reduction <br /> OÜ Sakala tn 7-2 10141
                        Kesklinna linnaosa Tallinn, Harju maakond Estonia
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="   w-full  lg:basis-1/3 basis-full  px-0 md:px-4   py-6">
              <h2 className="font-bold text-gray-800 tracking-widest text-2xl mb-3  ">
                Subscribe
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full   ">
                  <div className=" flex flex-col    w-full">
                    <div className="flex w-full rounded-3xl border-2 border-primary overflow-hidden ">
                      <input
                        {...register("email", { required: true })}
                        placeholder="@gmail.com"
                        type="text"
                        id="footer-field"
                        name="email"
                        className={`w-full bg-white rounded-l rounded-r-0 border border-gray-300 focus:border-primary focus:ring-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-300 ${
                          errors.email && "border-red-500"
                        }`}
                      />
                      <button
                        type="submit"
                        className="text-white bg-primary border-0 py-2 px-6  hover:bg-secondary rounded-r rounded-l-0  focus:outline-none  "
                      >
                        Submit
                      </button>
                    </div>
                    {errors.email && (
                      <span className="text-red-500 ps-3">
                        Email is required*
                      </span>
                    )}
                    {errors.email ? null : (
                      <p
                        className={`mt-2 ps-3 ${
                          message && message.includes("already")
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FBF4DB]">
        <div className="container mx-auto py-4 px-5 ">
          <p className="text-gray-500 text-sm text-center">
            © 2024 Carbon Shredder — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
