import React, { useEffect, useState } from "react";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";
import { server } from "../server";
import plaidImg from "../assets/images/icon-6.png";
import BankImg from "../assets/images/bankImg2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader/Loader";

function PlaidIntegration() {
  const [loader, setLoader] = useState(false);
  const [linkTokenData, setLinkTokenData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [authData, setAuthData] = useState("");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const authToken = localStorage.getItem("authToken");
  const Navigate = useNavigate();
  console.log("User Name:", userName);
  console.log("User Email:", userEmail);

  async function fetchLinkToken() {
    setLoader(true)
    try {
      const response = await axios.post(
        `${server}/api/create-link-token`,
        {
          user: { _id: "1" },
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.data.success) {
        setLinkTokenData(response.data);
        setLoader(false)
      } else {
        console.error("Error fetching Link token:", response.data.error);
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
      console.error("Error fetching Link token:", error);
      toast.error(error.response.data.error || error.message, {
        autoClose: 3000,
        style: {
          marginTop: "100px",
        },
      });
    }
  }

  async function exchangeToken(publicToken) {
    try {
      const response = await axios.post(
        `${server}/plaid/exchange-token`,
        {
          publicToken: publicToken,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.data.success) {
        localStorage.setItem("plaidAccessToken", response.data.accessToken);
        savePlaidAccessToken(
          "1",
          response.data.accessToken,
          response.data.itemId
        );
        setAccessToken(response.data.accessToken);
        retrieveAccounts(response.data.accessToken);
        authAccountData(response.data.accessToken);
        transactionData(response.data.accessToken);
      } else {
        console.error(
          "Error exchanging Plaid public token:",
          response.data.error
        );
      }
    } catch (error) {
      console.error("Error exchanging Plaid public token:", error);
    }
  }
  async function savePlaidAccessToken(userId, accessToken, itemId) {
    try {
      const response = await axios.post(
        `${server}/save-plaid-access-token`,
        {
          userId: userId,
          accessToken: accessToken,
          itemId: itemId,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("data saved of plaid to mongo ", response.data);
    } catch (error) {
      console.error("Error saving Plaid access token:", error); // Handle error
    }
  }
  async function retrieveAccounts(accessToken) {
    try {
      const response = await axios.post(
        `${server}/plaid/retrieve-accounts`,
        {
          accessToken: accessToken,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.data.success) {
        console.log("Accounts data:", response.data.accountsData);
      } else {
        console.error("Error retrieving accounts data:", response.data.error);
      }
    } catch (error) {
      console.error("Error retrieving accounts data:", error);
    }
  }
  async function authAccountData(accessToken) {
    try {
      const response = await axios.post(
        `${server}/plaid/auth`,
        {
          accessToken: accessToken,
          name: userName,
          email: userEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const responseData = response.data;
      if (responseData.accounts && responseData.numbers) {
        console.log("Accounts data Auth:", responseData);
        setAuthData(responseData.numbers.ach[0]);
      } else {
        console.error(
          "Error retrieving accounts data Auth:",
          responseData.error
        );
      }
    } catch (error) {
      console.error("Error retrieving accounts data Auth:", error);
    }
  }
  async function transactionData(accessToken) {
    try {
      const response = await axios.post(
        `${server}/transactions/get`,
        {
          accessToken: accessToken,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const responseData = response.data;
      console.log("Accounts data tranaction:", responseData);
    } catch (error) {
      console.error("Error retrieving tranaction data :", error);
    }
  }

  function onSuccess(publicToken, metadata) {
    console.log("Plaid Link success:", publicToken, metadata);
    exchangeToken(publicToken);
  }

  function onExit(error, metadata) {
    if (error) {
      console.error("Plaid Link error:", error);
    }
    console.log("Plaid Link exit:", metadata);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const isAuthentication = localStorage.getItem("isAuthentication");
  const isBankLinked = true;
  const handleNavigateLinkedBanks = () => {
    if (isAuthentication === "true") {
      if (isBankLinked) {
        Navigate("/linked-transactions-data");
      } else {
        toast.error("Please link your bank to access this page", {
          autoClose: 3000,
          style: {
            marginTop: "100px",
          },
        });
      }
    } else {
      toast.error("Please login to continue", {
        autoClose: 3000,
        style: {
          marginTop: "100px",
        },
      });
    }
  };
  return (
    <>
      <div className=" mb-10 lg:mb-0 mt-20" data-aos="zoom-in"> 
        <div className="grid  grid-cols-1 lg:grid-cols-2 px-5 text-start md:px-20">
          <div className="  flex justify-center items-center"> 
            <img width="500px" height="800px" className="object-cover" src={BankImg}/>
          </div>
          <div className="max-w-md mx-auto mt-0 flex justify-center items-center">
            {linkTokenData && linkTokenData.linkToken ? (
              <>
                <div className="flex flex-col p-0 gap-10">
                  <div className="">
                    <img className="w-[100%] h-[90%]  " src={plaidImg} />{" "}
                  </div>
                  <div className="border-2 flex justify-center  border-primary  rounded-3xl overflow-hidden">
                    <PlaidLink
                      className="w-full border-primary hover:bg-black"
                      token={linkTokenData.linkToken.link_token}
                      onSuccess={onSuccess}
                      onExit={onExit}
                    >
                      Connect a bank account
                    </PlaidLink>
                  </div>
                  <button
                    className=" text-white inline-flex bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-3xl text-md justify-center items-center gap-2 -mt-5"
                    onClick={handleNavigateLinkedBanks}
                  >
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
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                      />
                    </svg>
                    Estimate carbon footprint through a linked bank
                  </button>
                </div>
              </>
            ) : (
              <div className="">
                <h1 className="text-2xl leading-[30px] capitalize">
                Track your carbon footprint by connecting to your bank
                </h1>
                <p className="py-8 text-lg">
                Our enhanced Carbon Footprint Calculator now integrates customer transaction data, providing a method for calculating your carbon footprint with more accuracy.
                </p>
                <div className="flex flex-col  justify-center gap-3">
              <Link to="/sign-up" className="w-full">
              <button
                    className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-3xl text-md justify-center items-center w-full" 
                  >
                  Create profile
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
                  </button></Link>
                  <button
                    className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-3xl text-md justify-center items-center"
                    onClick={fetchLinkToken}
                  >
                   {loader ? <Loader /> : "Link bank"}
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
                  <button
                    className=" text-white inline-flex bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-3xl text-md justify-center items-center gap-2"
                    onClick={handleNavigateLinkedBanks}
                  >
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
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                      />
                    </svg>
                    Estimate carbon footprint through a linked bank
                  </button>
                </div>
              </div>
            )}

            <p className="flex gap-9"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaidIntegration;
