import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import GlobeImg from "../assets/images/globe-image.png";
import Project1 from "../assets/images/project-1.jpg";
import Project2 from "../assets/images/project-2.jpeg";
import Project3 from "../assets/images/project-3.png";
import Project4 from "../assets/images/project-4.jpeg";

export default function Impact() {
  return (
    <>
      {/*<section className="text-gray-600 ">
        <div className="container px-5 pt-24 mx-auto">
    

       <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                 <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg> 
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  16.5
                </h2>
                <p className="leading-relaxed">new trees planted</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                 <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg> 
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  0.2
                </h2>
                <p className="leading-relaxed">cars off the road for a year</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                 <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg> 
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  0.1
                </h2>
                <p className="leading-relaxed">homes’ annual energy usage</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
               <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg> 
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  3.6
                </h2>
                <p className="leading-relaxed">flights from LA to New York</p>
              </div>
            </div>
          </div> 
        </div>
      </section>*/}

      <section className="text-gray-600  ">
        <div className="flex flex-col text-center w-full pt-20 pb-52 bg-primary bg-opacity-10">
          <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
            How it works
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Get to know your offset sources
          </p>
        </div>
        <div className="container mx-auto  max-w-4xl -mt-28">
          <div className="flex px-5  md:flex-row flex-col items-center bg-white gap-10 rounded-lg shadow-lg p-10">
            <img
              className="object-cover object-center rounded w-52"
              alt="hero"
              src={GlobeImg}
            />
            <div className=" flex flex-col md:items-start md:text-left items-center text-center">
              <p className=" text-black text-lg leading-relaxed">
                We partner with CNaught to purchase a diversified portfolio of
                high-quality carbon credits that is designed to maximize impact,
                mitigate risk, and foster innovation. A portfolio approach to
                carbon credits is recommended by the World Economic Forum, and
                the CNaught portfolio embodies the science-based best practices
                laid out in Oxford’s Principles for Carbon Offsetting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <Tab.Group>
            <div className="flex flex-row items-center">
              <div className="basis-full md:basis-4/12">
                <Tab.List className="flex flex-col gap-5">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-primary text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                            : "bg-white text-black text-xl py-5 px-5  rounded"
                        }
                      >
                        Emissions Reductions * 55%
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-primary text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                            : "bg-white text-black text-xl py-5 px-5  rounded"
                        }
                      >
                        Conservation * 35%
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-primary text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                            : "bg-white text-black text-xl py-5 px-5  rounded"
                        }
                      >
                        Short-lived removal * 9.5%
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "bg-primary text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                            : "bg-white text-black text-xl py-5 px-5  rounded"
                        }
                      >
                        Long-lived removal * 0.5%
                      </button>
                    )}
                  </Tab>
                </Tab.List>
              </div>
              <div className="basis-full md:basis-8/12 px-0 md:px-10">
                <Tab.Panels>
                  <Tab.Panel>
                    <h1 className="text-2xl">Emissions Reductions</h1>
                    <p className="text-lg mt-5">
                      This category covers a wide range of projects that aim to
                      reduce and avoid emissions versus business as usual.
                      Examples include: renewable energy, destruction of
                      refrigerants that would otherwise be vented to the
                      atmosphere, and capture of methane emitted from landfills.
                    </p>
                    <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                      <div class="md:w-64  flex-shrink-0 flex flex-col my-auto">
                        <img
                          src={Project1}
                          className=" object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div class="md:flex-grow">
                        <h2 class="text-xl font-medium text-gray-900  mb-2">
                          Gaziantep Landfill Gas Project
                        </h2>
                        <p class="leading-relaxed">
                          This project collects landfill gas to generate 5.655MW
                          of electricity at a landfill serving Gaziantep City,
                          Turkey, avoiding the emission of methane (a potent
                          greenhouse gas) into the atmosphere and using the
                          methane to generate power and displace dirtier
                          fossil-fuel-driven power in the electric grid.
                        </p>
                        <a class="text-primary inline-flex items-center mt-4">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <h1 className="text-2xl">Conservation</h1>
                    <p className="text-lg mt-5">
                      This category typically consists of nature-based projects
                      that help retain an existing source of natural carbon
                      storage that would otherwise be at risk — for example,
                      rainforests that would be cut down for development or peat
                      bogs that might be drained for agriculture.
                    </p>

                    <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                      <div class="md:w-64  flex-shrink-0 flex flex-col my-auto">
                        <img
                          src={Project2}
                          className=" object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div class="md:flex-grow">
                        <h2 class="text-xl font-medium text-gray-900  mb-2">
                          Katingan Mentaya Project
                        </h2>
                        <p class="leading-relaxed">
                          One of the highest-regarded avoided deforestation
                          projects in the world, this project protects and
                          restores 149,800 hectares of peatland ecosystems in
                          Indonesia that would likely otherwise have been
                          converted to palm and other plantations.
                        </p>
                        <a class="text-primary inline-flex items-center mt-4">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <h1 className="text-2xl">Short-lived removal</h1>
                    <p className="text-lg mt-5">
                      This category typically consists of nature-based projects
                      that remove existing carbon and store it in new plants,
                      trees, or soil — for example, planting trees in an area
                      that has previously been clear cut or restoring plant life
                      to tidal wetlands.
                    </p>
                    <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                      <div class="md:w-64  flex-shrink-0 flex flex-col my-auto">
                        <img
                          src={Project3}
                          className=" object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div class="md:flex-grow">
                        <h2 class="text-xl font-medium text-gray-900  mb-2">
                          Kootznoowoo Native Community Forestry Project
                        </h2>
                        <p class="leading-relaxed">
                          A relatively small North American forestry project,
                          Kootznoowoo protects 20,159 acres of forest across
                          four areas on Prince of Wales Island, Alaska.
                        </p>
                        <a class="text-primary inline-flex items-center mt-4">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <h1 className="text-2xl">Long-lived removal</h1>
                    <p className="text-lg mt-5">
                      This is a highly diverse category of projects that
                      includes cutting-edge engineered solutions that hold
                      significant promise but are not yet available at scale.
                      Examples include direct air capture technology and storage
                      of carbon through enhanced rock weathering.
                    </p>
                    <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                      <div class="md:w-64  flex-shrink-0 flex flex-col my-auto">
                        <img
                          src={Project4}
                          className=" object-cover rounded"
                          alt=""
                        />
                      </div>
                      <div class="md:flex-grow">
                        <h2 class="text-xl font-medium text-gray-900  mb-2">
                          Frontier Carbon Removal Portfolio
                        </h2>
                        <p class="leading-relaxed">
                          Frontier is an advance market commitment to buy $1B+
                          of permanent carbon removal between 2022 and 2030. It
                          aims to accelerate the development of carbon removal
                          technologies by guaranteeing future demand for them.
                          The goal is to send a strong demand signal to
                          researchers, entrepreneurs, and investors that there
                          is a growing market for these technologies.{" "}
                        </p>
                        <a class="text-primary inline-flex items-center mt-4">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  );
}
