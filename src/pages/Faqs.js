import React from "react";
import { Disclosure } from "@headlessui/react";

export default function Faqs() {
  return (
    <>
      <section className="h-96  bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">
              Frequently asked questions
            </h1>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-col">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
              Frequently asked <span className="text-primary">questions</span>
            </h1>
          </div>
          <div className="flex flex-row ">
            <div className="basis-full  py-10 flex flex-col max-w-4xl mx-auto">
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                style={{
                  boxShadow:
                    "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring items-center  `}
                    >
                      <span>1. What is Carbon Shredder?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      Carbon Shredder is a service dedicated to helping
                      individuals measure, understand, and offset their carbon
                      footprint. Through our website, you can calculate your
                      carbon emissions, subscribe to offset those emissions, and
                      track your environmental impact.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                style={{
                  boxShadow:
                    "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>
                        2. How does the carbon footprint calculator work?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      Our calculator estimates your carbon footprint based on
                      your lifestyle choices in areas like commuting, travel,
                      food consumption, and home energy use. It takes into
                      account various factors such as your location, age, and
                      specific habits to provide a personalized footprint
                      estimate.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                style={{
                  boxShadow:
                    "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>
                        3. What are carbon offsets, and how do they work?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      Carbon offsets are a way to compensate for your emissions
                      by funding projects that reduce greenhouse gases. These
                      can include renewable energy, forest conservation, or
                      carbon capture projects. When you buy an offset, you fund
                      projects that remove or reduce emissions equivalent to
                      your own.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                style={{
                  boxShadow:
                    "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>4. How do I choose a subscription plan?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      We offer various subscription levels based on your carbon
                      footprint and how much you wish to offset. You can choose
                      to offset less, equal to, or more than your estimated
                      monthly emissions.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                style={{
                  boxShadow:
                    "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>5. Is my financial information secure?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      Yes. We use Stripe, a leading online payment provider, to
                      process transactions. We do not store your financial data
                      on our servers.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                style={{
                  boxShadow:
                    "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>6. Can I change or cancel my subscription?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      Yes, you can change or cancel your subscription at any
                      time. Please contact us for assistance with modifying your
                      subscription.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure
                className="border rounded-lg my-3"
                as="div"
                style={{
                  boxShadow:
                    "10px 10px 40px 0px rgba(0, 0, 0, 0.05), -10px -10px 40px 0px rgba(0, 0, 0, 0.05)",
                }}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>
                        7. How do you ensure the effectiveness of the offset
                        projects?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      We partner with CNaught to invest in a diversified
                      portfolio of high-quality carbon credits. These projects
                      follow science-based best practices and are vetted for
                      their impact and sustainability.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
