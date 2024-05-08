import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/footer-logo-2.png";
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
        <div className="container-fluid mx-0 flex flex-wrap p-3 flex-col md:flex-row items-center justify-between   w-[100%] py-1 ">
          <div className="  hidden lg:flex   container-fluid mx-0  flex-wrap p-3 flex-col md:flex-row items-center justify-between   w-[100%] py-1 ">
            <Link
              to="/"
              className="flex title-font w-[200px] font-medium items-center justify-center text-gray-900 mb-4 md:mb-0  "
            >
              <img src={Logo} className="w-[95px] h-[95px]" alt="Logo" />
            </Link>
            <nav className="hidden lg:flex mx-auto   flex-col lg:flex-row   mt-3 lg:mt-0 lg:w-[55%] lg:items-center lg:justify-center ">
              <Link
                to="/"
                className="mr-5 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline mx-0 px-0"
              >
                <span> Home</span>
              </Link>
              <Menu className="relative" as="div">
                <Link to="/how-it-works">
                  <Menu.Button className="mr-5 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline flex flex-row items-center gap-2">
                    <span>How it works</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
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
                  className="absolute  bg-white flex flex-col w-72 p-3 rounded shadow-sm"
                >
                  <Menu.Item>
                    <Link
                      to="/how-it-works"
                      className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How works ?
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/calculator-works"
                      className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How our carbon footprint calculator works
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/subscription-works"
                      className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How our carbon subscription works
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/track-your-carbon-impact"
                      className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How to track your carbon impact
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link
                      to="/partnership-with-cnaught"
                      className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                    >
                      How we source carbon offsets: Partnership with CNaught
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Menu>

              <Link
                to="/about"
                className="mr-5 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline"
              >
                <span className="hover:text-primary hover:underline">
                  {" "}
                  Our Mission{" "}
                </span>
              </Link>
              <Link
                to="/contact"
                className="mr-5 text-black text-2xl md:text-[18px] font-medium text-center "
              >
                <span className="hover:text-primary hover:underline">
                  Connect
                </span>
              </Link>
              {isAuthenticated == "true" ? (
                <Menu className="relative" as="div">
                  <Link>
                    <Menu.Button className="mr-5 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline flex flex-row items-center gap-2">
                      <span className="hover:text-primary hover:underline">
                        Profile
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
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
                    className="absolute  bg-white flex flex-col w-72 p-3 rounded shadow-sm"
                  >
                    <Menu.Item>
                      <Link
                        to="/personal-profile"
                        className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                      >
                        View Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        onClick={handleLogout}
                        className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                      >
                        Logout
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link
                  to="/sign-in"
                  className="mr-5 text-black text-xl md:text-[18px] font-medium text-center"
                >
                  <span className=" hover:text-primary hover:underline">
                    {" "}
                    Sign In
                  </span>
                </Link>
              )}
            </nav>

            <div className="w-[200px] flex justify-end ">
              <Link to="/start-shredding">
                <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center">
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
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              >
                <img src={Logo} className="w-[90px] h-[90px]" alt="Logo" />
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
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              >
                <img src={Logo} className="w-[90px] h-[90px]" alt="Logo" />
              </Link>
            </div> 
            <div className="hidden md:flex justify-end w-[40%]  ">
            <Link to="/start-shredding">
              <button className=" hidden md:flex   text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center">
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
                zIndex: 1000,
                display: isOpen ? "flex" : "none",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
             <Link className="p-2 absolute text-start px-11 bg-[#FBF4DB] w-[100%] font-semibold text-[30px] flex justify-between items-center"   onClick={() => setIsOpen(false)}>
             <button className=""
              >
                Back    
              </button> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
              </Link>
              <ul className="flex flex-col gap-5 md:gap-10 items-start p-10 w-[100%] mt-10">
                <li
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#FBF4DB] p-2 w-[100%]"
                >
                  <Link
                    to="/"
                    className="text-black text-2xl  md:text-3xl font-extrabold text-start hover:text-primary hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="w-[100%] hover:bg-[#FBF4DB] p-2">
                  <Menu className="relative" as="div">
                    <Link to="/how-it-works">
                      <Menu.Button className="text-black text-2xl  md:text-3xl font-extrabold text-start hover:text-primary hover:underline mr-5   md:text-[18px]    flex flex-row items-center gap-2">
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
                    <Menu.Items
                      as="div"
                      className="absolute  bg-white flex flex-col w-72 p-3 rounded shadow-sm"
                    >
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/how-it-works"
                          className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How works ?
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/calculator-works"
                          className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How our carbon footprint calculator works
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/subscription-works"
                          className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How our carbon subscription works
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/track-your-carbon-impact"
                          className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How to track your carbon impact
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          onClick={() => setIsOpen(false)}
                          to="/partnership-with-cnaught"
                          className=" text-black text-2xl md:text-lg font-medium mx-5 my-2 hover:text-primary hover:underline"
                        >
                          How we source carbon offsets: Partnership with CNaught
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="text-start w-[100%] hover:bg-[#FBF4DB] p-2"
                >
                  <Link
                    to="/about"
                    className="text-black text-2xl  md:text-3xl font-extrabold text-start hover:text-primary hover:underline  "
                  >
                    Our Mission
                  </Link>
                </li>

                <li
                  onClick={() => setIsOpen(false)}
                  className="w-[100%] hover:bg-[#FBF4DB] p-2"
                >
                  <Link
                    to="/contact"
                    className="text-black text-2xl  md:text-3xl font-extrabold text-start hover:text-primary hover:underline"
                  >
                    Contact
                  </Link>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="w-[100%] hover:bg-[#FBF4DB] p-2"
                >
                  {isAuthenticated ? (
                    <Link
                      to="/personal-profile"
                      className="text-black text-2xl  md:text-3xl font-extrabold text-start hover:text-primary hover:underline"
                    >
                      Profile
                    </Link>
                  ) : (
                    <Link
                      to="/sign-in"
                      className="text-black text-2xl  md:text-3xl font-extrabold text-start hover:text-primary hover:underline"
                    >
                      Sign In
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <Link to="/start-shredding" className="w-[100%]">
          <button className="flex md:hidden w-[100%] mt-4  text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center">
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
                className="text-sm text-gray-500 hover:text-gray-700 text-white"
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
