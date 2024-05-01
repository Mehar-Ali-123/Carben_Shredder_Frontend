import React, { useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import { useForm } from "react-hook-form";
import { server } from "../server";
import { toast } from "react-toastify";
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${server}/contact`, data);
      console.log(response.data);
      toast.success("Message Sent Successfully", {
        autoClose: 2000,
        style: {
          marginTop: "100px",
        },
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Message not Sent, Try Again", {
        autoClose: 2000,
        style: {
          marginTop: "100px",
        },
      });
    }
  };

  return (
    <>
      <section className="h-96  bg-primary bg-opacity-10 mt-10 md:mt-0 bg-no-repeat ">
        <div className="conatiner mx-auto px-4 h-full ">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black capitalize text-center">
              Contact our support team
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-20 max-w-4xl   p-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl capitalize   ">
              Get In Touch With Our Support Team Here At Carbon Shredder.
            </h1>
            <p className="text-lg py-5 text-start md:text-center">
              We're here to help you with a smaller carbon footprint. Whether
              you have questions, need support, or want to share your thoughts,
              we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid lg:container mx-auto px-4">
          <div className="flex flex-row py-0 pb-5 md:py-20 gap-20 flex-wrap md:flex-nowrap">
            <div className="basis-full md:basis-6/12 my-auto px-0 md:pr-10">
              <ul className="flex flex-col gap-8    w-[100%] md:w-auto">
                <li className="flex gap-5  ">
                  <div className="flex justify-center items-center "></div>
                  <div className=" ">
                    <h1 className="text-2xl capitalize">General inquiries: </h1>
                    <p className="text-lg leading-10">
                      For any general questions about Carbon Shredder, our
                      services, or how we can assist you, please feel free to
                      reach out.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center"></div>
                  <div>
                    <h1 className="text-2xl capitalize ">Support requests: </h1>
                    <p className="text-lg leading-10">
                      If you're encountering issues or need assistance with our
                      calculator or subscription service, our dedicated team is
                      ready to offer you personalized support.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center"></div>
                  <div>
                    <h1 className="text-2xl capitalize ">
                      Feedback and suggestions:{" "}
                    </h1>
                    <p className="text-lg leading-10">
                      Your feedback is invaluable to us. If you have
                      suggestions, ideas, or feedback on how we can improve,
                      please don't hesitate to share.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center"></div>
                  <div>
                    <h1 className="text-2xl capitalize ">Stay connected: </h1>
                    <p className="text-lg leading-10">
                      Follow us on our social media channels to stay updated on
                      the latest news, tips, and insights in carbon reduction
                      and sustainability. At Carbon Shredder, your input is
                      essential in shaping a sustainable future. We're excited
                      to connect with you!
                    </p>
                  </div>
                </li>
              </ul>
              <div class="p-2 w-full pt-8 ">
                <span className="inline-flex">
                  <a className="text-primary">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-primary">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-4 text-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-4 text-primary">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="basis-full md:basis-6/12  bg-[#DBEDEA] p-4 rounded-lg">
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full bg-white rounded border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:border-primary focus:ring-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full bg-white rounded border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-primary focus:ring-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Message textarea with error handling */}
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={`w-full bg-white rounded border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:border-primary focus:ring-none h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                    defaultValue={""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"
                >
                  Submit
                </button>
                {/* Optional message about terms */}
                <p className="text-xs text-gray-500 mt-3">
                  By clicking "Submit", you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Hero />
    </>
  );
}
