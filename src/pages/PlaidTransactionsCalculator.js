import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../server";
import PlaidDataFormula from "../PlaidDataFormula";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderPage from "../components/Loader/LoaderPage";
import { loadStripe } from "@stripe/stripe-js";

function PlaidTransactionsCalculator() {
  const dollarPerTon = 25;
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [plaidData, setPlaidData] = useState();
  const [isBankLinked, setIsBankLinked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!authToken) {
          throw new Error("Authentication token not found");
        }
        const response = await axios.get(`${server}/get-profile-data`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const { user } = response.data;
        console.log("userAccess", user?.plaidAccessTokenData[0]?.accessToken);
        setUserData(user?.plaidAccessTokenData[0]?.accessToken);
      } catch (error) {
        if (
          error?.message == "Network Error" ||
          error?.data?.message == "500"
        ) {
        } else {
          console.error("Error fetching user data:", error);
          if (error) {
            toast.error("Please login to continue", {
              autoClose: 3000,
              style: {
                marginTop: "100px",
              },
            });
          }
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (userData) {
      setIsLoading(false);
      setIsBankLinked(true);
      fetchTransData();
    }
  }, [userData]);

  const fetchTransData = async function transactionData() {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${server}/transactions/get`,
        {
          accessToken: userData,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const responseData = response.data;
      setTransactions(responseData.transactions);
      setPlaidData(PlaidDataFormula);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error retrieving transaction data:", error);
    }
  };

  const calculateCO2 = (transaction, plaidData) => {
    const { amount } = transaction;
    const matchingPlaidData = plaidData.find(
      (data) => String(data?.id) === transaction.category_id
    );

    if (!matchingPlaidData) {
      return null;
    }

    const { co2PerMods } = matchingPlaidData;
    const co2Emission = (amount * co2PerMods) / 1000 / 1000;
    return co2Emission;
  };

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.amount >= 0
  );

  const totalCO2 = filteredTransactions.reduce((sum, transaction) => {
    const co2 = calculateCO2(transaction, plaidData) || 0;
    return sum + co2;
  }, 0);

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
    }
  };
  return (
    <>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <div>
          {isBankLinked ? (
            <div className="">
              <section className="h-48 md:h-56 md:96 bg-primary bg-opacity-10 mt-12  md:mt-15 lg:mt-0">
                <div className="conatiner mx-auto px-4 h-full">
                  <div className="flex flex-col justify-end items-center h-full">
                    <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px] text-center uppercase mb-10 ">
                      Calculated Offsets from Transactions of Linked Bank
                    </h1>
                  </div>
                </div>
              </section>
              <div className="w-full xl:max-w-[70%] 2xl:max-w-[55%] flex flex-col justify-center items-center mx-auto">
                <div className="mx-2  p-3 mt-10 w-full">
                  <h2 className="py-5 text-xl">
                    What's your max you want to pay ?{" "}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                    <button
                      onClick={() => {
                        handlePayment(50);
                      }}
                      className="rounded-md bg-text-primary px-3 py-2 text-sm leading-6 bg-primary text-white  w-full text-center"
                    >
                      Up to $50 / month
                    </button>
                    <button
                      onClick={() => {
                        handlePayment(20);
                      }}
                      className="rounded-md bg-text-primary px-3 py-2 text-sm leading-6 bg-primary text-white  w-full text-center"
                    >
                      Up to $20 / month
                    </button>
                    <button
                      onClick={() => {
                        handlePayment(10);
                      }}
                      className="rounded-md bg-text-primary px-3 py-2 text-sm leading-6 bg-primary text-white  w-full text-center"
                    >
                      Up to $10 / month
                    </button>
                  </div>
                  <p className="py-5 text-md font-thin text-center  mb-5">
                    Your monthly credits will match your impact from the month
                    prior, up to the limit you set.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10 gap-3">
                    <div class="bg-white hover:bg-[#DAECEA] rounded-xl w-full h-[150px] p-4 flex flex-col justify-center items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 53.7 67.76"
                        id="house"
                      >
                        <path
                          d="M51,53.12a1,1,0,0,0,.83.45l.17,0c.19,0,4.67-.82,6-3.86,1.22-2.84-.35-7.77-.53-8.32a1,1,0,0,0-.56-.61,1,1,0,0,0-.82,0c-.53.24-5.14,2.5-6.37,5.34h0C48.41,49.16,50.91,53,51,53.12Zm.54-6.21h0c.62-1.43,2.82-2.91,4.34-3.77.43,1.69.88,4.32.26,5.76s-2.58,2.2-3.82,2.53C51.74,50.3,51,48.31,51.56,46.91Z"
                          transform="translate(-23.15 -16.12)"
                        ></path>
                        <path
                          d="M75.39,33.12,53.73,17a4.55,4.55,0,0,0-5.26-.11l-8,5.43v-.39a4,4,0,0,0-4-4h-2.4a1,1,0,0,0-1,1v8.4L24.74,33a3.61,3.61,0,0,0,2,6.59h1.1V78a.8.8,0,0,0,0,.15.78.78,0,0,0,0,.21,1.08,1.08,0,0,0,.11.18s0,.09.07.13l0,0h0a14.89,14.89,0,0,0,10.9,5.14,11.39,11.39,0,0,0,4.82-1,12.51,12.51,0,0,0,6.23-7,1,1,0,0,0,0-.76l0,.08h0a8.64,8.64,0,0,1,.76-6,8.29,8.29,0,0,1,1.72-2.2,15.76,15.76,0,0,0,1.82.1c2.12,0,5.39-.4,7.31-2.57,2.84-3.23,2.83-10.83,2.83-11.16a1,1,0,0,0-.34-.74,1,1,0,0,0-.79-.24c-.31,0-7.81,1-10.65,4.26-2.34,2.66-1.79,7-1.43,8.77a10.34,10.34,0,0,0-2.23,2.83,10.13,10.13,0,0,0-.71,1.65c-.33-.86-.59-1.49-.64-1.6A21.29,21.29,0,0,0,44,62.75c1.59-1.4,4.77-4.64,4.33-8.08-.55-4.3-7-9.24-7.27-9.45a1,1,0,0,0-1.39.18c-.54.68-5.29,6.75-4.75,11s5.91,6.63,7,7.11A19.61,19.61,0,0,1,46,69.08a39.2,39.2,0,0,1,2.16,6.31A10.62,10.62,0,0,1,43,81c-4.14,1.92-9.51.52-13.18-3.4v-38H69.54V78a1,1,0,0,0,2,0V39.62h1.7a3.61,3.61,0,0,0,2.15-6.5ZM54.28,57.9c1.64-1.86,5.81-3,8.25-3.41-.12,2.49-.67,6.79-2.3,8.65a6,6,0,0,1-3.58,1.71,7.29,7.29,0,0,0,1.14-.76,8.68,8.68,0,0,0,3-5.07,1,1,0,0,0-2-.39,6.77,6.77,0,0,1-2.32,3.91,6.67,6.67,0,0,1-3.12,1.37,1.17,1.17,0,0,0-.26.1C52.92,62.27,52.84,59.54,54.28,57.9ZM36.87,56.13c-.32-2.51,2.19-6.58,3.72-8.69,2,1.66,5.39,5,5.71,7.49.27,2.11-1.7,4.5-3.23,5.93a.94.94,0,0,0-.29-.42,6.19,6.19,0,0,1-2-2.83,5.83,5.83,0,0,1,.4-4.46,1,1,0,1,0-1.79-.9,7.84,7.84,0,0,0-.51,6,7.6,7.6,0,0,0,.83,1.69C38.32,58.93,37.06,57.61,36.87,56.13ZM50.08,75.05A.43.43,0,0,0,50,75v0A.48.48,0,0,1,50.08,75.05ZM35.09,20h1.4a2,2,0,0,1,2,2v1.75L35.09,26ZM74.76,36.52a1.56,1.56,0,0,1-1.52,1.1H26.76a1.6,1.6,0,0,1-.9-2.93L49.6,18.55A2.52,2.52,0,0,1,51,18.12a2.49,2.49,0,0,1,1.51.5L74.2,34.73A1.56,1.56,0,0,1,74.76,36.52Z"
                          transform="translate(-23.15 -16.12)"
                        ></path>
                      </svg>
                      <h2 className="text-2xl font-semibold tracking-wide">
                        {totalCO2.toFixed(6)} Ton
                      </h2>
                      <span className="tracking-wide text-gray-600">
                        Total CO2e Offset
                      </span>
                    </div>
                    <div class="bg-white hover:bg-[#DAECEA] rounded-xl w-full h-[150px] p-4 flex flex-col justify-center items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 64 64"
                        viewBox="0 0 64 64"
                        id="insurance"
                      >
                        <path d="M27 51h-5c-.552 0-1 .447-1 1v3c0 .553.448 1 1 1h5c.552 0 1-.447 1-1v-3C28 51.447 27.552 51 27 51zM26 54h-3v-1h3V54zM43.729 50.916l-1.459 1.367 2.25 2.4C44.709 54.886 44.974 55 45.25 55s.541-.114.729-.316l3.75-4-1.459-1.367-3.021 3.222L43.729 50.916z"></path>
                        <path
                          d="M35,4.114V4c0-1.654-1.346-3-3-3s-3,1.346-3,3v0.114C13.309,5.287,1,15.55,1,28c0,0.347,0.18,0.669,0.475,0.851
c0.295,0.183,0.663,0.198,0.973,0.044l0.395-0.198c4.551-2.248,9.898-2.252,14.31-0.002l0.4,0.2
c0.249,0.125,0.539,0.139,0.799,0.042l3.706-1.39c2.375-0.953,5.072-0.641,7.223,0.842L31,29.535V35H10c-0.552,0-1,0.447-1,1v22
c0,0.553,0.448,1,1,1h30.834c1.203,1.382,2.732,2.657,4.636,3.848C45.632,62.949,45.816,63,46,63s0.368-0.051,0.53-0.152
c4.832-3.021,7.335-6.559,7.877-11.131l0.586-4.944c0.062-0.522-0.292-1.004-0.809-1.101c-1.099-0.207-2.169-0.538-3.185-0.978V36
c0-0.553-0.448-1-1-1H33v-5.42l2.65-1.514c0.036-0.021,0.07-0.043,0.104-0.068c1.628-1.22,4.109-1.33,6.924-0.334l2.928,1.255
c0.225,0.096,0.477,0.108,0.71,0.029l3.664-1.223c2.816-1.104,6.412-0.943,9.843,0.43l1.783,0.764
c0.309,0.134,0.664,0.101,0.944-0.084C62.831,28.649,63,28.336,63,28C63,15.55,50.691,5.287,35,4.114z M11,37h18v20H11V37z
M52.421,51.481c-0.452,3.811-2.439,6.709-6.421,9.331c-3.981-2.622-5.969-5.521-6.421-9.332L39.1,47.438
c2.167-0.532,4.214-1.488,5.973-2.796L46,44.139l0.927,0.504c1.759,1.308,3.807,2.264,5.973,2.796L52.421,51.481z M49,43.616
c-0.315-0.2-0.635-0.394-0.932-0.617c-0.039-0.029-0.08-0.056-0.122-0.078l-1.468-0.799c-0.298-0.162-0.658-0.162-0.956,0
l-1.468,0.799c-0.042,0.022-0.083,0.049-0.122,0.078c-1.773,1.33-3.888,2.254-6.117,2.673c-0.517,0.097-0.871,0.578-0.809,1.101
l0.586,4.943c0.23,1.937,0.835,3.679,1.796,5.284H31V37h5v4.777c0,0.357,0.19,0.688,0.5,0.866c0.31,0.178,0.691,0.178,1,0l2-1.155
l2,1.155c0.155,0.089,0.328,0.134,0.5,0.134c0.172,0,0.345-0.045,0.5-0.134c0.31-0.179,0.5-0.509,0.5-0.866V37h6V43.616z M38,37h3
v3.045l-1-0.578c-0.31-0.178-0.691-0.178-1.001,0l-1,0.578V37z M31,4c0-0.552,0.449-1,1-1s1,0.448,1,1v0.02
C32.667,4.011,32.335,4,32,4s-0.667,0.011-1,0.02V4z M3.076,26.396C4.102,15.64,15.371,7.006,29.5,6.086l-5.843,5.843
c-3.931,3.931-6.22,9.053-6.583,14.549C12.678,24.574,7.599,24.531,3.076,26.396z M30.402,26.733C28.74,25.587,26.808,25,24.872,25
c-1.199,0-2.399,0.226-3.538,0.682l-2.262,0.848c0.348-4.981,2.434-9.622,5.999-13.187L31,7.414v19.718L30.402,26.733z
M34.606,26.359L33,27.277V7.414l5.929,5.929c3.547,3.547,5.631,8.158,5.995,13.11l-1.518-0.65
C39.908,24.562,36.786,24.76,34.606,26.359z M60.589,26.308c-3.921-1.571-8.053-1.733-11.29-0.461l-2.365,0.788
c-0.328-5.555-2.622-10.738-6.59-14.706L34.5,6.086c14.154,0.922,25.438,9.585,26.429,20.368L60.589,26.308z"
                        ></path>
                      </svg>
                      <h2 className="text-2xl font-semibold tracking-wide">
                        {(totalCO2 * dollarPerTon).toFixed(6)} $
                      </h2>
                      <span className="tracking-wide text-gray-600">
                        Total Offsets Price
                      </span>
                    </div>
                  </div>
                  <div className="w-full  flex justify-center items-center">
                    <Link
                      className="w-[90%] md:w-[40%]"
                      to="/subscription-plan"
                      onClick={() => {
                        localStorage.setItem(
                          "carbonPriceTotal",
                          (totalCO2 * dollarPerTon).toFixed(6)
                        );
                      }}
                    >
                      <button className="rounded-md bg-text-primary px-3 py-2 text-sm leading-6 bg-primary text-white  w-full text-center">
                        Subscribe to our dynamic carbon offset subscription
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="relative overflow-x-auto mx-1 p-5 mb-20 mt-10 w-full">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs  uppercase bg-[#FBB15F] text-white">
                      <tr>
                        <th scope="col" class="px-6 py-3 tracking-widest">
                          Transaction Category
                        </th>
                        <th scope="col" class="px-6 py-3 tracking-widest  text-center">
                          TRANSACTION Amount
                        </th>
                        <th scope="col" class="px-6 py-3 tracking-widest  text-center">
                          COE2
                        </th>
                        <th scope="col" class="px-6 py-3 tracking-widest  text-center">
                          Offsets Price / ton
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {transaction.category}
                          </th>
                          <td class="px-6 py-4   text-center">
                            {transaction.amount} $
                          </td>
                          <td class="px-6 py-4 text-center">
                            {(
                              calculateCO2(transaction, plaidData) || 0
                            ).toFixed(6)}
                          </td>
                          <td class="px-6 py-4  text-center">
                            {(
                              calculateCO2(transaction, plaidData) *
                                dollarPerTon || 0
                            ).toFixed(6)}{" "}
                            $
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-72 mb-20 text-center text-2xl font-bold capitalize">
              kindly link your plaid bank
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default PlaidTransactionsCalculator;
