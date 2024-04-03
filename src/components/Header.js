import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/footer-logo-2.png";
import menuicon from "../assets/images/menu.png";
import { Menu } from "@headlessui/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

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
        <div className="hidden lg:flex   container-fluid mx-0  flex-wrap p-3 flex-col md:flex-row items-center justify-between   w-[100%] py-1 ">
        <nav
            className="hidden lg:flex  flex-col lg:flex-row   mt-3 lg:mt-0 lg:w-[45%] lg:items-center lg:justify-center "
          >
            <Link
              to="/"
              className="mr-4 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline mx-0 px-0"
            >
              Home
            </Link>
            <Menu className="relative" as="div">
              <Link to="/how-it-works">
                <Menu.Button className="mr-4 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline flex flex-row items-center gap-2">
                  <span>How it works</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
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
              className="mr-4 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline"
            >
              Our mission
            </Link>
            <Link
              to="/contact"
              className="mr-4 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline"
            >
              Connect
            </Link>
            <Link
              to="/personal-profile"
              className="mr-4 text-black text-xl md:text-[18px] font-medium text-center hover:text-primary hover:underline"
            >
              Profile
            </Link>
          </nav>

          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={Logo} className="w-[90px] h-[90px]" alt="Logo" />
          </Link>

          <div className="w-[45%] flex justify-end">
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
          </div>
          
        </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden absolute top-3 right-3"
            >
              <img src={menuicon} alt="Menu Icon" className="w-10" />
            </button>
          </div>
          
      <div className="flex justify-between items-center w-[100%] lg:hidden">
        <button className="hidden md:flex   text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg justify-center items-center">
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

        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={Logo} className="w-[90px] h-[90px]" alt="Logo" />
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}> <img src={menuicon} alt="Menu Icon" className="w-8" /></button>
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
          <button  onClick={() => setIsOpen(false)} className="p-2 absolute text-start px-11 bg-[#FBF4DB] w-[100%] font-semibold text-[20px]">Back</button>
          <ul className="flex flex-col gap-5 md:gap-10 items-start p-10 w-[100%] mt-">
            <li2 onClick={() => setIsOpen(false)} className="hover:bg-[#FBF4DB] p-2 w-[100%]">
              <Link
                to="/"
                className="text-black text-2xl md:text-7xl font-extrabold text-start hover:text-primary hover:underline"
              >
                Home
              </Link>
            </li2>
            <li onClick={() => setIsOpen(false)} className="text-start w-[100%] hover:bg-[#FBF4DB] p-2">
              <Link
                to="/about"
                className="text-black text-2xl md:text-7xl font-extrabold text-start hover:text-primary hover:underline  "
              >
                About
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)} className="w-[100%] hover:bg-[#FBF4DB] p-2">
              <Link
                to="/about"
                className="text-black text-2xl md:text-7xl font-extrabold text-start hover:text-primary hover:underline"
              >
                How it works
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}  className="w-[100%] hover:bg-[#FBF4DB] p-2">
              <Link
                to="/about"
                className="text-black text-2xl md:text-7xl font-extrabold text-start hover:text-primary hover:underline"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
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

        </div>
      </header>

    </>
  );
}
