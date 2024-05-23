import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoMobile from "../assets/images/footer-logo-2.png";
import Logo from "../assets/images/logo.png";
import menuicon from "../assets/images/menu.png";
import { Menu } from "@headlessui/react";
import axios from "axios";
import { server } from "../server";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const isAuthenticated = localStorage.getItem("isAuthentication");
  console.log(isAuthenticated);
  const Navigate = useNavigate();

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleLogout = () => {
    setShowConfirmation(true);
    setIsOpen(false);
  };

  const confirmLogout = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        throw new Error("Authentication token not found");
      }
      const response = await axios.post(`${server}/logout`);
      localStorage.setItem("isAuthentication", false);
      localStorage.setItem("authToken", "");
      localStorage.setItem("userName", "unknown");
      localStorage.setItem("userEmail", "unknown");
      if (response.status === 200) {
        Navigate("/");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      <header
        className={
          color
            ? "navbar header-sticky change-color "
            : "  px-0 navbar header-sticky flex justify-between items-center "
        }
      >
        <div className="container-fluid mx-0 flex flex-wrap p-3 flex-col md:flex-row items-center justify-between   w-[100%] py-0  ">
          <div className="  hidden lg:flex   container-fluid mx-0  flex-wrap p-3 flex-col md:flex-row items-center justify-between   w-[100%] py-1 ">
            <Link
              to="/"
              className="flex flex-col lg:flex-row title-font w-[165px]   items-center justify-center text-gray-900 mb-4 md:mb-0 gap-1 "
            >
              <img
                src={Logo}
                className="w-[60px] h-[85px]"
                alt="Logo"
              />
              <span className="text-xs font-semibold tracking-wide">Carbon Shredder</span>
            </Link>
            <nav className="hidden lg:flex mx-auto   flex-col lg:flex-row   mt-3 lg:mt-0 lg:w-[59%] lg:items-center lg:justify-center ">
              <Link
                to="/"
                className="mr-5 uppercase tracking-[2px] text-[14px] text-center hover:text-primary hover:underline  mx-0 px-0"
              >
                {/* <span className="uppercase tracking-[2px] text-[14px] "> */}
                Home
                {/* </span> */}
              </Link>
              <Menu className="relative" as="div">
                <Link to="/how-it-works">
                  <Menu.Button className="mr-5  text-[#101110]    text-center hover:text-primary hover:underline flex flex-row items-center gap-1">
                    <span className="uppercase tracking-[2px] text-[14px]">
                      How it works
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Menu.Button>
                </Link>
                <Menu.Items
                  as="div"
                  className="absolute  bg-white flex flex-col w-64 p-3 rounded shadow-sm mt-3"
                >
                  {/* <Menu.Item>
                    <Link
                      to="/how-it-works"
                      className="uppercase tracking-[2px] text-[11px]  text-[#101110]  mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How It works ?
                    </Link>
                  </Menu.Item> */}
                  <Menu.Item>
                    <Link
                      to="/calculator-works"
                      className="uppercase tracking-[2px] text-[11px]  text-[#101110] mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How our carbon footprint calculator works
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/subscription-works"
                      className="uppercase tracking-[2px] text-[11px]  text-[#101110] mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How our carbon subscription works
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/track-your-carbon-impact"
                      className="  text-[#101110] uppercase tracking-[2px] text-[11px] mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How to track your carbon impact
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/partnership-with-cnaught"
                      className="  text-[#101110]  uppercase tracking-[2px] text-[11px]  mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How we source carbon offsets: Partnership with CNaught
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <Link
                to="/about"
                className="mr-5  uppercase tracking-[2px] text-[14px]  text-center hover:text-primary hover:underline "
              >
                Our Mission
              </Link>
              <Link
                to="/contact"
                className="mr-5  text-[#101110] text-2xl md:text-[18px]   text-center "
              >
                <span className="hover:text-primary hover:underline uppercase tracking-[2px] text-[14px]">
                  Connect
                </span>
              </Link>
              {isAuthenticated == "true" ? (
                <Menu className="relative" as="div">
                  <Link>
                    <Menu.Button className="mr-5  text-[#101110] text-2xl md:text-[18px]   text-center hover:text-primary hover:underline flex flex-row items-center gap-1">
                      <span className="hover:text-primary hover:underline uppercase tracking-[2px] text-[14px]">
                        Profile
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Menu.Button>
                  </Link>
                  <Menu.Items
                    as="div"
                    className="absolute  bg-white flex flex-col w-64 p-3 rounded shadow-sm mt-2"
                  >
                    <Menu.Item>
                      <Link
                        to="/personal-profile"
                        className="  text-[#101110] uppercase tracking-[2px] text-[11px] mx-5 my-2 hover:text-primary hover:underline "
                      >
                        View Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        onClick={handleLogout}
                        className="  text-[#101110] uppercase tracking-[2px] text-[11px]  mx-5 my-2 hover:text-primary hover:underline"
                      >
                        Logout
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link
                  to="/sign-in"
                  className="mr-5  uppercase tracking-[2px] text-[14px] text-center "
                >
                  <span className=" hover:text-primary hover:underline ">
                    Sign In
                  </span>
                </Link>
              )}
            </nav>
            <div className="w-[180px] flex justify-end ">
              <Link to="/start-shredding">
                <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-3xl text-md justify-center items-center capitalize ">
                  Start shredding
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="   flex justify-between items-center w-[100%] lg:hidden">
            <div className="flex md:hidden  w-auto md:w-[20%]  justify-center">
            <Link
              to="/"
              className="flex flex-col lg:flex-row title-font w-[100px]   items-center justify-center text-gray-900 mb-4 md:mb-0 gap-0 py-1 "
            >
              <img
                src={Logo}
                className="w-[50px] h-[65px]"
                alt="Logo"
              />
              <span className="text-xs font-semibold">Carbon Shredder</span>
            </Link>
            </div>
            <div className=" flex md:hidden  w-[40%]  justify-end">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img src={menuicon} alt="Menu Icon" className="w-10  " />
              </button>
            </div>

            <div className=" hidden md:flex  w-[40%]  justify-start">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img src={menuicon} alt="Menu Icon" className="w-10  " />
              </button>
            </div>
            <div className="hidden md:flex  w-auto md:w-[20%]  justify-center">
            <Link
              to="/"
              className="flex flex-col lg:flex-row title-font w-[160px]   items-center justify-center text-gray-900 mb-4 md:mb-0 gap-0 py-1 "
            >
              <img
                src={Logo}
                className="w-[60px] h-[75px]"
                alt="Logo"
              />
              <span className="text-xs font-semibold">Carbon Shredder</span>
            </Link>
            </div>
            <div className="hidden md:flex justify-end w-[40%]  ">
              <Link to="/start-shredding">
                <button className=" hidden md:flex   text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-3xl text-lg justify-center items-center">
                  Start shredding
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: isOpen ? "#77CFB8" : "transparent",
                zIndex: 10000,
                display: isOpen ? "flex" : "none",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Link
                className="p-2 absolute text-start px-11 bg-[#FBF4DB] w-[100%] font-semibold text-[30px] flex justify-between items-center"
                onClick={() => setIsOpen(false)}
              >
                <button className="">Back</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>
              </Link>
              <ul className="flex flex-col gap-5 md:gap-10 items-start p-10 w-[100%] mt-10">
                <li
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#FBF4DB] p-2"
                >
                  <Link
                    to="/"
                    className=" text-[#101110]  font-extrabold text-start hover:text-primary hover:underline uppercase tracking-[2px] text-[14px]"
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:bg-[#FBF4DB] p-2">
                  <Menu className="relative" as="div">
                    <Link to="/how-it-works">
                      <Menu.Button className=" text-[#101110] uppercase tracking-[2px] text-[14px] font-extrabold text-start hover:text-primary hover:underline mr-5    flex flex-row items-center gap-2">
                        How it works
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Menu.Button>
                    </Link>
                    {/* <Menu.Items
                      as="div"
                      className="absolute  bg-white flex flex-col w-72 p-3 rounded shadow-sm mt-5 z-50"
                    >
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/how-it-works"
                          className="  text-[#101110]  uppercase tracking-[2px] text-[14px] mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How it works ?
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/calculator-works"
                          className="  text-[#101110] uppercase tracking-[2px] text-[14px]  mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How our carbon footprint calculator works
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/subscription-works"
                          className="  text-[#101110] uppercase tracking-[2px] text-[14px] mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How our carbon subscription works
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/track-your-carbon-impact"
                          className="  text-[#101110] uppercase tracking-[2px] text-[14px] mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How to track your carbon impact
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/partnership-with-cnaught"
                          className="  text-[#101110] uppercase tracking-[2px] text-[14px] mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How we source carbon offsets: Partnership with CNaught
                        </Link>
                      </Menu.Item>
                    </Menu.Items> */}
                  </Menu>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="text-start hover:bg-[#FBF4DB] p-2"
                >
                  <Link
                    to="/about"
                    className=" text-[#101110] uppercase tracking-[2px] text-[14px] font-extrabold text-start hover:text-primary hover:underline  "
                  >
                    Our Mission
                  </Link>
                </li>

                <li
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#FBF4DB] p-2"
                >
                  <Link
                    to="/contact"
                    className=" text-[#101110] uppercase tracking-[2px] text-[14px] font-extrabold text-start hover:text-primary hover:underline w-full "
                  >
                    Contact
                  </Link>
                </li>
                <li className="hover:bg-[#FBF4DB] p-2">
                  {isAuthenticated == "true" ? (
                    <Menu className="relative" as="div">
                      <Link
                        to="/personal-profile"
                        onClick={() => setIsOpen(true)}
                      >
                        <Menu.Button className="mr-5  text-[#101110]    text-center hover:text-primary hover:underline flex flex-row items-center gap-1">
                          <span className="hover:text-primary font-extrabold hover:underline uppercase tracking-[2px] text-[14px]">
                            Profile
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </Menu.Button>
                      </Link>
                      <Menu.Items
                        as="div"
                        className="absolute  bg-white flex flex-col w-64 p-3 rounded shadow-sm mt-5"
                      >
                        <Menu.Item>
                          <Link
                            onClick={() => setIsOpen(false)}
                            to="/personal-profile"
                            className="  text-[#101110] uppercase tracking-[2px] text-[11px] mx-5 my-2 hover:text-primary hover:underline "
                          >
                            View Profile
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            onClick={handleLogout}
                            className="  text-[#101110] uppercase tracking-[2px] text-[11px]  mx-5 my-2 hover:text-primary hover:underline"
                          >
                            Logout
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/sign-in"
                      className=" text-[#101110] uppercase tracking-[2px] text-[14px] font-extrabold hover:text-primary hover:underline "
                    >
                      Sign In
                    </Link>
                  )}
                </li>
                <li className="w-full" onClick={() => setIsOpen(false)}>
                  <Link to="/start-shredding" className="w-[100%]">
                    <button className="flex md:hidden w-[100%] mt-4  text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary text-lg justify-center items-center rounded-3xl mb-3">
                      Start shredding
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {showConfirmation && (
        <div
          onClick={() => setShowConfirmation(false)}
          className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-primary p-6 rounded-md shadow-lg">
            <p className="text-lg font-semibold mb-4  text-white">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="text-sm  hover:text-gray-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
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
