import { Fragment, useEffect } from "react";
import { Tab } from "@headlessui/react";
// import GlobeImg from "../assets/images/globe-image.png";
import MissionImg from "../assets/images/cnaughtImg.png";
import Project1 from "../assets/images/project-1.jpg";
import Project2 from "../assets/images/project-2.jpeg";
import Project3 from "../assets/images/project-3.png";
import Project4 from "../assets/images/project-4.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Impact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden w-[100%] bg-none">
        <section className="text-gray-600">
          <div className="flex flex-col text-center w-full pt-20 pb-52 bg-primary bg-opacity-10">
            <h2 className=" text-[#101110]  md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase ">
              Our CNaught Partnership Helps You Offset Your Footprint
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-gray-500 uppercase text-[14px]">
              Get to know your offset sources
            </p>
          </div>
          <div className="container mx-auto  max-w-5xl -mt-28">
            <div className="flex px-5   flex-col items-center bg-white gap-10 rounded-lg p-10">
              <img
                data-aos="zoom-in"
                className="  rounded w-50 h-10 md:w-60 md:h-16"
                alt="hero"
                src={MissionImg}
                // src="https://static6.depositphotos.com/1004370/666/i/600/depositphotos_6664945-stock-photo-tree-in-hands.jpg"
              />
              <div className=" flex flex-col md:items-start md:text-left items-center text-center">
                <h2 className=" text-[#101110] text-lg md:text-2xl leading-[30px] mb-3 px-3">
                  Offset portfolio:
                </h2>
                <p className=" text-gray-600 text-md md:text-lg  leading-relaxed px-3">
                  We partner with CNaught to purchase a diversified portfolio of
                  high-quality carbon credits that is designed to maximize
                  impact, mitigate risk, and foster innovation. A portfolio
                  approach to carbon credits is recommended by the World
                  Economic Forum, and the CNaught portfolio embodies the
                  science-based best practices laid out in Oxford’s Principles
                  for Carbon Offsetting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" data-aos="fade-right">
          <div className="container mx-auto px-4">
            <Tab.Group>
              <div className="flex flex-row items-center flex-wrap">
                <div className="basis-full lg:basis-4/12">
                  <Tab.List className="flex flex-col gap-5">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? "bg-primary   text-lg  md:text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                              : "bg-white  text-[#101110]  text-lg  md:text-xl py-5 px-5  rounded"
                          }
                        >
                          Emissions reductions * 55%
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? "bg-primary   text-lg  md:text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                              : "bg-white  text-[#101110]  text-lg  md:text-xl py-5 px-5  rounded"
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
                              ? "bg-primary   text-lg  md:text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                              : "bg-white  text-[#101110]  text-lg  md:text-xl py-5 px-5  rounded"
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
                              ? "bg-primary   text-lg  md:text-2xl py-5 px-5 focus-visible:outline-none rounded text-white "
                              : "bg-white  text-[#101110]  text-lg  md:text-xl py-5 px-5  rounded"
                          }
                        >
                          Long-lived removal * 0.5%
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                </div>
                <div className="basis-full lg:basis-8/12 px-0 md:px-10 mt-7">
                  <Tab.Panels>
                    <Tab.Panel>
                      <h2 className=" text-lg md:text-2xl">
                        Emissions Reductions
                      </h2>
                      <p className="text-md md:text-lg mt-5 ">
                        This category covers a wide range of projects that aim
                        to reduce and avoid emissions versus business as usual.
                        Examples include: renewable energy, destruction of
                        refrigerants that would otherwise be vented to the
                        atmosphere, and capture of methane emitted from
                        landfills.
                      </p>
                      <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                        <div class="md:w-64  flex-shrink-0 flex flex-col my-auto overflow-hidden">
                          <img
                            src={Project1}
                            className=" object-cover rounded w-[40%] md:w-[100%] "
                            alt=""
                          />
                        </div>
                        <div class="md:flex-grow">
                          <h2 class="text-xl font-medium text-gray-900  mb-2">
                            Gaziantep Landfill Gas Project
                          </h2>
                          <p class="leading-relaxed">
                            This project collects landfill gas to generate
                            5.655MW of electricity at a landfill serving
                            Gaziantep City, Turkey, avoiding the emission of
                            methane (a potent greenhouse gas) into the
                            atmosphere and using the methane to generate power
                            and displace dirtier fossil-fuel-driven power in the
                            electric grid.
                          </p>
                          <Link to="/carbon-offsets-partnership-with-cnaught">
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
                          </Link>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <h2 className=" text-lg md:text-2xl">Conservation</h2>
                      <p className="text-md md:text-lg mt-5 ">
                        This category typically consists of nature-based
                        projects that help retain an existing source of natural
                        carbon storage that would otherwise be at risk — for
                        example, rainforests that would be cut down for
                        development or peat bogs that might be drained for
                        agriculture.
                      </p>

                      <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                        <div class="md:w-64  flex-shrink-0 flex flex-col my-auto">
                          <img
                            src={Project2}
                            className=" object-cover rounded w-[40%] md:w-[100%]"
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
                          <Link to="/carbon-offsets-partnership-with-cnaught">
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
                          </Link>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <h2 className=" text-lg md:text-2xl">
                        Short-Lived Removal
                      </h2>
                      <p className="text-md md:text-lg mt-5 ">
                        This category typically consists of nature-based
                        projects that remove existing carbon and store it in new
                        plants, trees, or soil — for example, planting trees in
                        an area that has previously been clear cut or restoring
                        plant life to tidal wetlands.
                      </p>
                      <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                        <div class="md:w-64  flex-shrink-0 flex flex-col my-auto">
                          <img
                            src={Project3}
                            className=" object-cover rounded w-[40%] md:w-[100%]"
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
                          <Link to="/carbon-offsets-partnership-with-cnaught">
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
                          </Link>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <h2 className=" text-lg md:text-2xl">
                        Long-Lived Removal
                      </h2>
                      <p className="text-md md:text-lg mt-5 ">
                        This is a highly diverse category of projects that
                        includes cutting-edge engineered solutions that hold
                        significant promise but are not yet available at scale.
                        Examples include direct air capture technology and
                        storage of carbon through enhanced rock weathering.
                      </p>
                      <div class="p-8 mt-5 bg-primary bg-opacity-10 rounded-xl flex flex-wrap md:flex-nowrap gap-5">
                        <div class="md:w-64  flex-shrink-0 flex flex-col my-auto">
                          <img
                            src={Project4}
                            className=" object-cover rounded w-[10%] md:w-[100%]"
                            alt=""
                          />
                        </div>
                        <div class="md:flex-grow">
                          <h2 class="text-xl font-medium text-gray-900  mb-2">
                            Frontier Carbon Removal Portfolio
                          </h2>
                          <p class="leading-relaxed">
                            Frontier is an advance market commitment to buy $1B+
                            of permanent carbon removal between 2022 and 2030.
                            It aims to accelerate the development of carbon
                            removal technologies by guaranteeing future demand
                            for them. The goal is to send a strong demand signal
                            to researchers, entrepreneurs, and investors that
                            there is a growing market for these technologies.{" "}
                          </p>
                          <Link to="/carbon-offsets-partnership-with-cnaught">
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
                          </Link>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </div>
            </Tab.Group>
          </div>
        </section>
      </div>
    </>
  );
}
