import React from "react";
import profilePic from "../assets/images/person-2.jpg";
import starterPlan from "../assets/images/starterPlan.svg";
import mostPopular from "../assets/images/mostPopular.svg";
import scalePlan from "../assets/images/scalePlan.svg";

function SubcriptionCard() {
  const carbonPrice = localStorage.getItem("carbonPriceTotal");
  const totalPrice = Math.round(carbonPrice);
  return (
    <>
      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-6 mx-auto flex flex-wrap">
          <div class="lg:w-1/4 mt-48 hidden lg:block">
            <div class="mt-px         rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p class="bg-[#FBF4DB]  mt-9 text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
              Access carbon footprint
              </p>
              <p class="text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
              Personalized dashboard
              </p>
              <p class="bg-[#FBF4DB] text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
              Email support
              </p>
              <p class="text-gray-900 h-12 text-sm text-center  ps-4 flex items-center justify-start">
              Carbon Calculator
              </p>
              <p class="bg-[#FBF4DB] text-gray-900 h-12 text-sm text-center ps-4 flex items-center justify-start">
              Carbon neutrality each month.
              </p>
              <p class="text-gray-900 h-12 text-sm text-center ps-4 flex items-center justify-start">
              Reducing  overall climate debt.
              </p>
              <p class="bg-[#FBF4DB] text-gray-900 h-12 text-sm text-center px-4 flex items-center justify-start">
              Impact by offsetting 200%
              </p>
              
            </div>
          </div>
          <div class="flex lg:w-3/4 w-full flex-wrap    rounded-lg">
            <div class="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0    -none rounded-lg lg:rounded-none">
              <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={starterPlan}
                  class="mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />
                <p className="text-md font-semibold">Basic plan</p>
                <h2 class=" text-4xl text-gray-900 font-medium flex items-center justify-center leading-none  mb-2   ">
                  {`$${totalPrice * 0.5}`  || "$189"}
                  <span class="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span class="text-sm text-gray-600 py-1">
                  Recurring every month
                </span>
                <div>
                  <button class="text-white bg-primary   py-2  rounded-lg text-center w-[180px]">
                    Start Plan
                  </button>
                </div>
              </div>
              <p class="bg-[#FBF4DB] mt-9 text-gray-600 h-12 text-sm text-center px-2 flex items-center   justify-center    ">
              <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="h-12 text-sm  text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
              <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  class="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  class="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  class="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
             
              <div class="p-6 text-center rounded-bl-lg">
                <p class="text-xs text-gray-500 mt-3">
                Ideal for individuals taking their first step in carbon offsetting up to 50%
                </p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-primary relative">
              <span class="bg-primary text-white px-3 py-1  text-xs absolute rounded-md right-3 top-[-15px] ">
                POPULAR
              </span>
              <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={mostPopular}
                  class="mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />

                <p className="text-md font-semibold">Standard plan</p>
                <h2 class=" text-4xl text-gray-900 font-medium flex items-center justify-center leading-none  mb-2   ">
                  {`$${Math.round(totalPrice * 1)}` || " $289"}
                  <span class="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span class="text-sm text-gray-600 py-1">
                  Recurring every month
                </span>
                <button class=" text-white bg-primary   py-2   rounded-lg text-center w-[180px]">
                  Start Plan
                </button>
              </div>
              <p class="bg-[#FBF4DB]  mt-9 text-gray-600 h-12 text-sm text-center px-2 flex items-center  justify-center    ">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="h-12 text-sm text-gray-600 text-center leading-relaxed flex items-center justify-center">
              <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
              <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 text-sm flex items-center justify-center">
              <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  class="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  class="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p> 
              <div class="p-6 text-center    ">
                <p class="text-xs text-gray-500 mt-3">
                Perfect for committed to fully neutralizing their carbon footprint.100% plan offsets 
                </p>
              </div>
            </div>
            <div class="lg:w-1/3 w-full lg:mt-px   -none rounded-lg lg:rounded-none">
              <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                <img
                  src={scalePlan}
                  class=" mt-7  object-cover w-14 h-14 bg-gray-300 rounded-full mb-2 shrink-0"
                />
                <p className="text-md font-semibold">Ultimate plan</p>
                <h2 class=" text-4xl text-gray-900 font-medium flex items-center justify-center leading-none  mb-2   ">
                {`$${Math.round(totalPrice * 2)}` || "$499"}
                  <span class="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span class="text-sm text-gray-600 py-1">
                  Recurring every month
                </span>
                <div>
                  <div>
                    <button class="text-white bg-primary   py-2  rounded-lg text-center w-[180px]">
                      Start Plan
                    </button>
                  </div>
                </div>
              </div>
              <p class="bg-[#FBF4DB]  mt-9 rounded-tr-lg text-gray-600 h-12 text-sm text-center px-2 flex items-center  justify-center    ">
                  <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="h-12 text-sm text-gray-600 text-center leading-relaxed flex items-center justify-center">
              <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 text-sm flex items-center justify-center">
              <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-[#FBF4DB] text-gray-600 text-center h-12 text-sm flex items-center justify-center">
              <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p> 
              <div class="p-6 text-center    ">
                <p class="text-xs text-gray-500 mt-3">
                Eco-friendly folks looking to make a bigger difference by reducing their climate impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubcriptionCard;
