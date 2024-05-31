import React, { useState } from "react";
import CarVector from "../assets/images/carVector.png";
import AeroVector from "../assets/images/aeroVector.png";
import SteakVector from "../assets/images/steakVector.png";
import ChristmasVector from "../assets/images/christmusVector.png";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { server } from "../server";
import LoaderPage from "../components/Loader/LoaderPage";
import { useNavigate } from "react-router-dom";

function SinglePurchase() {
  const dollarPerTon = 25;

  const [activeTab, setActiveTab] = useState("CO2"); // Initial active tab
  const [switchPositions, setSwitchPositions] = useState([false]);
  const [selectedCO2, setSelectedCO2] = useState(1); // State to hold the selected CO2 emission value
  const [inputValue, setInputValue] = useState(selectedCO2); // State to hold the input value
  const [noteSelected, setNoteSelected] = useState("Domestic flight");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isAuthentication = localStorage.getItem("isAuthentication");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const Navigate = useNavigate();

  const handleButtonClick = (newActiveTab) => {
    setActiveTab(newActiveTab);
    setSwitchPositions((prevPositions) => [!prevPositions[0]]);
    if (newActiveTab === "USD") {
      setInputValue(selectedCO2 * dollarPerTon);
    } else {
      setInputValue(selectedCO2);
    }
  };

  const handleSelectClick = (co2Emission, noteSelectedName) => {
    setSelectedCO2(co2Emission);
    if (activeTab === "USD") {
      setInputValue(co2Emission * dollarPerTon);
    } else {
      setInputValue(co2Emission);
    }
    setNoteSelected(noteSelectedName);
  };

  const handleInputChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setInputValue(value);
    if (activeTab === "USD") {
      setSelectedCO2(value / dollarPerTon); // Convert USD to CO2
    } else {
      setSelectedCO2(value); // Direct CO2 value
    }
  };

  const handlePayment = async (paymentPrice) => {
    setIsLoading(true);
    // Convert the payment price to cents and ensure it's an integer
    const roundedPayment = Math.round(paymentPrice);
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        throw new Error("Authentication token not found");
      }

      const response = await axios.post(
        `${server}/create-checkout-session`,
        {
          payAmount: roundedPayment,
          productName: "Carbon Offsets",
          productDescription:
            "At Carbon Shredder, we are not just a service; we are a mission-driven movement. Our goal is to revolutionize the way individuals and communities engage with their carbon footprint.",
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
      localStorage.removeItem("amountPayToStripe");

      const stripe = await loadStripe(
        "pk_test_51P9aNiGTvJh4FKHd25BY9XydIeWKKTyUjG8SNQMN3uia9lnk6AZRinJ2LyWYwmKD1klt0Ts3wr29CjoO6TODOVgW00SRfJQoEx"
      );

      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
      setIsLoading(false);
      if (result.error) {
        throw new Error(
          `Error redirecting to checkout: ${result.error.message}`
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error handling payment:", error);
      setError("An error occurred during payment");
      // Handle the error (e.g., show a toast notification)
    }
  };

  const purchasesData = [
    {
      title: "Road trip (500 miles)",
      co2Emission: 0.5,
      imageUrl: CarVector,
    },
    {
      title: "Christmas party",
      co2Emission: 0.08,
      imageUrl: ChristmasVector,
    },
    {
      title: "Domestic flight",
      co2Emission: 1,
      imageUrl: AeroVector,
    },
    {
      title: "Steak dinner",
      co2Emission: 0.04,
      imageUrl: SteakVector,
    },
  ];

  return (
    <>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <div className="container px-5 md:px-28 mt-20 py-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="px-5 lg:px-10">
              <p className=" text-[#101110] md:text-[1.5rem] uppercase tracking-widest mt-0 pt-0">
                Common Purchases
              </p>
              {purchasesData.map((purchase, index) => (
                <div
                  key={index}
                  className="border-b-2 border-gray flex justify-between items-center mt-2 cursor-pointer py-3"
                  onClick={() =>
                    handleSelectClick(purchase.co2Emission, purchase.title)
                  }
                >
                  <span className="flex justify-start items-center gap-4">
                    <img
                      width={70}
                      height={50}
                      src={purchase.imageUrl}
                      alt={purchase.title}
                    />
                    <span className="font-bold">
                      {purchase.title} <br />
                      <span className="text-gray-500 font-normal">
                        {purchase.co2Emission.toFixed(2)} tons of CO2
                      </span>
                    </span>
                  </span>
                  <span className="text-gray-500">select</span>
                </div>
              ))}
            </div>
            <div className="xl:px-10 h-full flex flex-col justify-between py-1">
              <div className="w-full">
                <div className="w-full max-w-sm m-auto flex flex-col">
                  <div
                    key={0}
                    className="mx-9 shadow-xl rounded-full h-10 flex p-0 border-2 border-primary relative items-center"
                  >
                    <div className="w-full flex justify-center">
                      <span
                        className={`p-2 rounded-3xl px-12 md:px-16  text-[#101110] ${
                          switchPositions[0]
                            ? "bg-none text-black"
                            : "bg-primary text-white"
                        }`}
                      >
                        CO2
                      </span>
                    </div>
                    <div className="w-full flex justify-center cursor-text">
                      <span
                        className={`p-2 rounded-3xl px-12 md:px-16  text-[#101110] ${
                          switchPositions[0]
                            ? "bg-primary text-white"
                            : "bg-none text-black"
                        }`}
                      >
                        USD
                      </span>
                    </div>
                    <span
                      onClick={() =>
                        handleButtonClick(activeTab === "CO2" ? "USD" : "CO2")
                      }
                      className={`elSwitch bg-transparent flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute ${
                        activeTab === "USD" ? "left-1" : "left-[155px]"
                      } cursor-pointer`}
                    ></span>
                  </div>
                </div>
              </div>
              <p className="mt-5">
                <label className="text-lg font-bold">Amount</label>
                <p className="relative w-full p-0 mt-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="block w-full rounded-md py-3 text-gray-600 shadow-md focus:ring focus:ring-primary focus:ring-opacity-50 placeholder:text-gray-400 focus:outline-none focus:border-primary sm:leading-6 outline-none px-3 text-xl"
                  />
                  {activeTab === "CO2" ? (
                    <span className="text-gray-600 absolute right-5 top-1/2 transform -translate-y-1/2 text-lg">
                      Tons
                    </span>
                  ) : (
                    <span className="text-gray-600 absolute right-5 top-1/2 transform -translate-y-1/2 text-lg">
                      $
                    </span>
                  )}
                </p>
              </p>
              <p className="mt-7">
                <span className="text-lg">Note</span>
                <span className="block w-full rounded-md text-lg text-gray-500">
                  {noteSelected ? noteSelected : ""}
                </span>
              </p>
              <p className="mt-5">
                {/* <Link to="/subscription-plan"> */}
                <button
                  // onClick={() => {
                  //   const paymentAmount = selectedCO2 * dollarPerTon;
                  //   handlePayment(paymentAmount);
                  // }}
                  onClick={() =>
                    isAuthentication == "true"
                      ? handlePayment(selectedCO2 * dollarPerTon)
                      : setShowConfirmation(true)
                  }
                  type="button"
                  className="block w-full rounded-md py-3
                  bg-primary px-2 mt-2 text-xl text-white"
                >
                  {selectedCO2 &&
                    `${selectedCO2.toFixed(2)} tons of CO2  ( ${(
                      selectedCO2 * dollarPerTon
                    ).toFixed(2)}$ )`}
                </button>
                {/* </Link> */}
              </p>
            </div>
          </div>
        </div>
      )}
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

export default SinglePurchase;
