import React, { useState } from "react";
import profilePic from "../assets/images/person-2.jpg";
import starterPlan from "../assets/images/starterPlan.svg";
import mostPopular from "../assets/images/mostPopular.svg";
import scalePlan from "../assets/images/scalePlan.svg";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { server } from "../server";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function SubcriptionCard({ setIsLoading }) {
  // const carbonPrice = localStorage.getItem("carbonPriceTotal");
  const totalPrice = localStorage.getItem("carbonPriceTotal");

  // const totalPrice = Math.round(carbonPrice);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const isAuthentication = localStorage.getItem("isAuthentication");
  console.log("isAuthentication cars", isAuthentication);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();
  const handlePayment = async (paymentPrice) => {
    setIsLoading(true);
    const roundedPayment = Math.round(paymentPrice);
    console.log("paymentPrice", paymentPrice);
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        throw new Error("Authentication token not found");
      }

      const response = await axios.post(
        `${server}/create-checkout-session`,
        {
          ...(roundedPayment > 0 && { payAmount: roundedPayment }),
          // payAmount: roundedPayment ,
          productName: "Carbon Offsets",
          productDescription:
            "At Carbon Shredder, we are not just a service; we are a mission-driven movement. Our goal is to revolutionize the way individuals and communities engage with their carbon footprint. ",
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const sessionId = response.data.sessionId;
      localStorage.setItem("clientSecret", sessionId);

      localStorage.setItem("ammountPayToStripe", roundedPayment);

      console.log("sessionId", sessionId);

      const stripe = await loadStripe(
        "pk_test_51P9aNiGTvJh4FKHd25BY9XydIeWKKTyUjG8SNQMN3uia9lnk6AZRinJ2LyWYwmKD1klt0Ts3wr29CjoO6TODOVgW00SRfJQoEx"
      );

      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
      setIsLoading(false);
      if (result.error) {
        setIsLoading(false);
        throw new Error(
          `Error redirecting to checkout: ${result.error.message}`
        );
      } else {
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error handling payment:", error);
      setError("An error occurred during payment");
      if (error?.response?.data?.error.includes("at least 50 cents")) {
        toast.error("Amount should be at least 0.5 $", {
          autoClose: 3000,
          style: {
            marginTop: "100px",
          },
        });
      } else {
        setIsLoading(false);
        toast.error("Something Went Wrong,Try Again Later", {
          autoClose: 3000,
          style: {
            marginTop: "100px",
          },
        });
      }
    }
  };

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-6 mx-auto flex flex-wrap">
          <div className="lg:w-1/4 mt-48 hidden lg:block">
            <div className="mt-px         rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p className="bg-[#FBF4DB]  mt-9 text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
                Access carbon footprint
              </p>
              <p className="text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
                Personalized dashboard
              </p>
              <p className="bg-[#FBF4DB] text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
                Email support
              </p>
              <p className="text-gray-900 h-12 text-sm text-center  ps-4 flex items-center justify-start">
                Carbon Calculator
              </p>
              <p className="bg-[#FBF4DB] text-gray-900 h-12 text-sm text-center ps-4 flex items-center justify-start">
                Carbon neutrality each month.
              </p>
              <p className="text-gray-900 h-12 text-sm text-center ps-4 flex items-center justify-start">
                Reducing overall climate debt.
              </p>
              <p className="bg-[#FBF4DB] text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
                Impact by offsetting 200%
              </p>
            </div>
          </div>
          <div className="flex lg:w-3/4 w-full flex-wrap    rounded-lg">
            <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0    -none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={starterPlan}
                  className="mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />
                <p className="text-md font-semibold">Basic Shredder</p>
                <h2 className=" text-4xl text-gray-900 font-medium flex items-center justify-center leading-none  mb-2   ">
                  {`$${Math.round(totalPrice * 0.5)}` || "$189"}
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600 py-1">
                  Recurring every month
                </span>
                <div>
                  <button
                    onClick={() =>
                      isAuthentication == "true"
                        ? handlePayment(Math.round(totalPrice * 0.5))
                        : setShowConfirmation(true)
                    }
                    className="text-white bg-primary   py-2  rounded-lg text-center w-[180px]"
                  >
                    Start Plan
                  </button>
                </div>
              </div>
              <p className="bg-[#FBF4DB] mt-9 text-gray-600 h-12 text-sm px-2 text-center px-2 flex items-center   justify-between lg:justify-center    ">
                <span className="flex lg:hidden">Access carbon footprint</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 text-sm px-2 flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Personalized dashboard</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center px-2 h-12 text-sm flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Email support</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-sm  text-gray-600 px-0 lg:px-6 px-2 text-center leading-relaxed flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Carbon Calculator</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center px-2 h-12 text-sm flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Carbon neutrality each month
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="text-gray-600 text-center h-12 text-sm px-2 flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Reducing overall climate debt
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm px-2 flex items-center  justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Impact by offsetting 200%
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>

              <div className="p-6 text-center rounded-bl-lg">
                <p className="text-xs text-gray-500 mt-3">
                  Ideal for individuals taking their first step in carbon
                  offsetting up to 50%
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-[#FBB15F] relative">
              <span className="bg-[#FBB15F] text-white px-3 py-1  text-xs absolute rounded-md right-3 top-[-15px] ">
                POPULAR
              </span>
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={mostPopular}
                  className="mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />

                <p className="text-md font-semibold">Standard Shredder</p>
                <h2 className=" text-4xl text-gray-900 font-medium flex items-center justify-center leading-none  mb-2   ">
                  {`$${Math.round(totalPrice * 1)}` || 0}
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600 py-1">
                  Recurring every month
                </span>
                <button
                  onClick={() =>
                    isAuthentication == "true"
                      ? handlePayment(totalPrice * 1)
                      : setShowConfirmation(true)
                  }
                  className=" text-white bg-primary   py-2   rounded-lg text-center w-[180px]"
                >
                  Start Plan
                </button>
              </div>
              <p className="bg-[#FBF4DB] mt-9 text-gray-600 h-12 text-sm px-2 text-center px-2 flex items-center   justify-between lg:justify-center    ">
                <span className="flex lg:hidden">Access carbon footprint</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 text-sm px-2 flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Personalized dashboard</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center px-2 h-12 text-sm flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Email support</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-sm  text-gray-600 px-0 lg:px-6 px-2 text-center leading-relaxed flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Carbon Calculator</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center px-2 h-12 text-sm flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Carbon neutrality each month
                </span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 text-sm px-2 flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Reducing overall climate debt
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm px-2 flex items-center  justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Impact by offsetting 200%
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div className="p-6 text-center    ">
                <p className="text-xs text-gray-500 mt-3">
                  Perfect for committed to fully neutralizing their carbon
                  footprint.100% plan offsets
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-px   -none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={scalePlan}
                  className=" mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />
                <p className="text-md font-semibold">Ultimate Shredder</p>
                <h2 className=" text-4xl text-gray-900 font-medium flex items-center justify-center leading-none  mb-2   ">
                  {`$${Math.round(totalPrice * 2)}` || "$189"}
                  <span className="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span className="text-sm text-gray-600 py-1">
                  Recurring every month
                </span>
                <div>
                  <div>
                    <button
                      onClick={() =>
                        isAuthentication == "true"
                          ? handlePayment(totalPrice * 2)
                          : setShowConfirmation(true)
                      }
                      className="text-white bg-primary   py-2  rounded-lg text-center w-[180px]"
                    >
                      Start Plan
                    </button>
                  </div>
                </div>
              </div>
              <p className="bg-[#FBF4DB] mt-9 text-gray-600 h-12 text-sm px-2 text-center px-2 flex items-center   justify-between lg:justify-center    ">
                <span className="flex lg:hidden">Access carbon footprint</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 text-sm px-2 flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Personalized dashboard</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center px-2 h-12 text-sm flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Email support</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="h-12 text-sm  text-gray-600 px-0 lg:px-6 px-2 text-center leading-relaxed flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">Carbon Calculator</span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center px-2 h-12 text-sm flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Carbon neutrality each month
                </span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="text-gray-600 text-center h-12 text-sm px-2 flex items-center   justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Reducing overall climate debt
                </span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p className="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm px-2 flex items-center  justify-between lg:justify-center">
                <span className="flex lg:hidden">
                  Impact by offsetting 200%
                </span>
                <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <div className="p-6 text-center    ">
                <p className="text-xs text-gray-500 mt-3">
                  Eco-friendly folks looking to make a bigger difference by
                  reducing their climate impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showConfirmation && (
        <div
          onClick={() => setShowConfirmation(false)}
          className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-primary px-10 py-6 rounded-md shadow-lg">
            <p className="text-lg font-semibold mb-4  text-white">
              Please Login To Continue
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="text-sm  hover:text-gray-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  Navigate("/sign-in");
                  setShowConfirmation(false);
                }}
                className="text-sm text-[red]   font-semibold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SubcriptionCard;
