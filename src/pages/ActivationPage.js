// Frontend ActivationPage.js

import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { slug } = useParams(); // Assuming your URL parameter is named 'slug'
  const [activationStatus, setActivationStatus] = useState("pending");
  const [errorMessage, setErrorMessage] = useState("");

  const activateAccount = async () => {
    const activationToken = slug;
    console.log("Activating account with token:", activationToken); // Add this line for debugging
    try {
      const response = await axios.post(`${server}/activation`, { activationToken });
      console.log("Account activation response:", response.data); // Add this line for debugging
      setActivationStatus("success");
    } catch (error) {
      console.error("Error activating account:", error);
      setErrorMessage("Error activating account. Please try again later.");
      setActivationStatus("error");
    }
  };

  console.log("Current activationStatus:", activationStatus); // Add this line for debugging

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Verify Your Account
        </h1>
        <p className="text-md mb-8 text-center">
          Welcome to Carbon Shredder Activation, <br />
          Click on the button below to activate your account
        </p>
        {activationStatus === "pending" && (
          <div className="flex justify-center">
            <button
              onClick={activateAccount}
              className="bg-primary text-white font-bold py-2 px-4 rounded tracking-wide"
            >
              Activate Account
            </button>
          </div>
        )}
        {activationStatus === "success" && (
          <p className="text-green-500 font-bold text-center">
            Account activated successfully! You can now log in.
          </p>
        )}
        {activationStatus === "error" && (
          <p className="text-red-500 font-bold text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
