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
          color ? "navbar header-sticky change-color" : "navbar header-sticky"
        }
      >
        {/* <div className="container mx-auto flex  p-5 flex-col md:flex-row items-center justify-between">
        <div></div>
          <Link
            to="/"
            className="flex  title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={Logo} alt="Logo" className="w-10" />
            <span className="ml-3 text-2xl uppercase font-black mt-2">
              Carbon Shredder
            </span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={menu} alt="" />
          </button>
        </div> */}
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center ">
          <nav className="flex lg:w-2/5  flex-wrap items-center text-base md:ml-auto px-0">
            <Link
              to="/"
              className="mr-4 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline"
            >
              Home
            </Link>
            <Menu className="relative " as="div">
              <Link to="/how-it-works">
                <Menu.Button className="mr-4 text-black text-2xl md:text-[18px] font-medium text-center hover:text-primary hover:underline flex flex-row items-center gap-2">
                <span>
                How it works
                  
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

                </Menu.Button>
              </Link>
              <Menu.Items as="div" className="absolute  bg-white flex flex-col w-72 p-3 rounded shadow-sm">
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
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src={Logo} alt="" className="w-20" />
          </Link>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <Link
              to="/calculator"
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg items-center"
            >
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
            </Link>
          </div>
        </div>
      </header>
      {/* full screen menu Start */}

      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu cfd</button>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: isOpen ? "rgba(0, 0, 0, 0.8)" : "transparent",
            zIndex: 1000,
            display: isOpen ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className="flex flex-col gap-5 md:gap-10 items-center">
            <li onClick={() => setIsOpen(false)}>
              <Link
                to="/"
                className="text-black text-2xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link
                to="/about"
                className="text-black text-2xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                About
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              {/* <Link
                to="/contact"
                className="text-black text-2xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                Calculator
              </Link> */}
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link
                to="/contact"
                className="text-black text-2xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* full screen menu End */}
    </>
  );
}
