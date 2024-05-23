import React, { useEffect, useState } from "react";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";
import { server } from "../server";
import plaidImg from "../assets/images/icon-6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function PlaidIntegration() {
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
      } else {
        console.error("Error fetching Link token:", response.data.error);
      }
    } catch (error) {
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
      <div className="mb-10 mt-64" data-aos="zoom-in">
        <h1 className="md:text-[2rem] leading-[30px] md:leading-[50px]  uppercase text-center mt-24">
          Bank Linking
        </h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 px-5 text-start md:px-20">
          <div className="  flex justify-center items-center">
            <svg
              className="w-[90%] h-[90%]"
              width="3000"
              height="2500"
              enable-background="new 0 0 3000 2500"
              viewBox="0 0 3000 2500"
              id="man-working-on-laptop"
            >
              <g>
                <rect width="3000" height="2500" fill="transparent"></rect>
              </g>
              <g>
                <g>
                  <defs>
                    <path
                      id="a"
                      d="M629.19,1995.464c0,0-401.554-327.065,49.625-755.91c451.18-428.843,1091.31-535.865,1462.081-370.582
				c370.771,165.284,636.98,834.293,194.735,1103.828L629.19,1995.464z"
                    ></path>
                  </defs>
                  <use fill="#E6F5FF" overflow="visible"></use>
                  <clipPath id="b">
                    <use overflow="visible"></use>
                  </clipPath>
                  <g clip-path="url(#b)">
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      d="M-22.792,1279.711
				c-190.72,414.479,170.261,767.596,542.858,749.971c372.597-17.625,313.296,707.109-152.924,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="1.222"
                      d="M42.583,1255.428
				c-190.72,414.48,170.261,767.598,542.858,749.973s313.296,707.109-152.924,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="1.444"
                      d="M107.958,1231.145
				c-190.72,414.48,170.26,767.597,542.857,749.972c372.597-17.625,313.296,707.109-152.924,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="1.667"
                      d="M173.333,1206.863
				c-190.72,414.479,170.26,767.596,542.858,749.971c372.597-17.625,313.296,707.109-152.924,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="1.889"
                      d="M238.707,1182.581
				c-190.719,414.48,170.261,767.595,542.858,749.97c372.597-17.625,313.296,707.109-152.924,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="2.111"
                      d="M304.082,1158.297
				c-190.72,414.48,170.261,767.597,542.858,749.972c372.597-17.625,313.296,707.109-152.925,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="2.333"
                      d="M369.458,1134.015
				c-190.72,414.479,170.26,767.596,542.858,749.971c372.596-17.625,313.296,707.109-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="2.555"
                      d="M434.832,1109.732
				c-190.72,414.479,170.261,767.596,542.857,749.971s313.296,707.109-152.924,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="2.778"
                      d="M500.207,1085.45
				c-190.72,414.48,170.261,767.597,542.858,749.972c372.596-17.625,313.296,707.109-152.925,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="3"
                      d="M565.582,1061.167
				c-190.72,414.479,170.261,767.596,542.858,749.971c372.597-17.625,313.295,707.109-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="3.222"
                      d="M630.957,1036.884
				c-190.72,414.479,170.261,767.596,542.858,749.971c372.596-17.625,313.295,707.109-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="3.444"
                      d="M696.332,1012.602
				c-190.72,414.48,170.26,767.595,542.857,749.972c372.597-17.625,313.296,707.109-152.924,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="3.667"
                      d="M761.707,988.319
				c-190.72,414.48,170.26,767.597,542.857,749.972c372.597-17.625,313.296,707.109-152.925,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="3.889"
                      d="M827.082,964.037
				c-190.72,414.479,170.26,767.596,542.857,749.971c372.597-17.625,313.296,707.109-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="4.111"
                      d="M892.457,939.754
				c-190.72,414.48,170.26,767.596,542.857,749.971c372.597-17.625,313.296,707.111-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="4.333"
                      d="M957.832,915.471
				c-190.721,414.48,170.26,767.597,542.857,749.972c372.597-17.625,313.296,707.109-152.925,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="4.556"
                      d="M1023.207,891.189
				c-190.72,414.479,170.26,767.596,542.857,749.971c372.597-17.625,313.296,707.109-152.925,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="4.778"
                      d="M1088.582,866.906
				c-190.721,414.479,170.26,767.596,542.857,749.971c372.597-17.625,313.296,707.109-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="5"
                      d="M1153.957,842.624
				c-190.721,414.48,170.26,767.595,542.857,749.97c372.597-17.625,313.296,707.111-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="5.222"
                      d="M1219.332,818.34
				c-190.72,414.48,170.26,767.597,542.858,749.972c372.597-17.625,313.296,707.109-152.925,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="5.444"
                      d="M1284.707,794.058
				c-190.721,414.479,170.26,767.596,542.857,749.971c372.597-17.625,313.295,707.109-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="5.667"
                      d="M1350.082,769.775
				c-190.72,414.479,170.26,767.596,542.858,749.971c372.597-17.625,313.296,707.111-152.926,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="5.889"
                      d="M1415.457,745.493
				c-190.72,414.479,170.26,767.597,542.858,749.972c372.597-17.625,313.296,707.109-152.925,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="6.111"
                      d="M1480.831,721.21
				c-190.72,414.48,170.261,767.597,542.858,749.972c372.597-17.625,313.295,707.109-152.926,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="6.333"
                      d="M1546.206,696.927
				c-190.72,414.48,170.26,767.596,542.857,749.971s313.296,707.111-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="6.556"
                      d="M1611.581,672.645
				c-190.72,414.479,170.261,767.597,542.857,749.97c372.598-17.623,313.296,707.111-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="6.778"
                      d="M1676.956,648.362
				c-190.72,414.479,170.26,767.597,542.858,749.972c372.596-17.625,313.295,707.109-152.926,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="7"
                      d="M1742.331,624.08
				c-190.72,414.479,170.261,767.596,542.858,749.971c372.596-17.625,313.295,707.111-152.926,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="7.222"
                      d="M1807.706,599.797
				c-190.72,414.48,170.26,767.596,542.857,749.971s313.296,707.111-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="7.444"
                      d="M1873.081,575.514
				c-190.721,414.48,170.261,767.597,542.857,749.972c372.598-17.625,313.296,707.109-152.926,764.324"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="7.667"
                      d="M1938.456,551.231
				c-190.721,414.48,170.26,767.597,542.857,749.972s313.296,707.109-152.925,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="7.889"
                      d="M2003.831,526.949
				c-190.72,414.48,170.26,767.596,542.858,749.971c372.596-17.625,313.294,707.111-152.927,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="8.111"
                      d="M2069.206,502.667
				c-190.721,414.48,170.26,767.597,542.857,749.97c372.597-17.624,313.296,707.111-152.926,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="8.333"
                      d="M2134.581,478.383
				c-190.721,414.48,170.26,767.597,542.857,749.972c372.597-17.625,313.295,707.11-152.926,764.325"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="8.556"
                      d="M2199.956,454.101
				c-190.721,414.479,170.261,767.597,542.857,749.971c372.597-17.624,313.295,707.112-152.925,764.327"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="8.778"
                      d="M2265.331,429.818
				c-190.721,414.48,170.26,767.598,542.857,749.971c372.597-17.624,313.295,707.111-152.926,764.326"
                    ></path>
                    <path
                      fill="none"
                      stroke="#FFF"
                      stroke-miterlimit="10"
                      stroke-width="9"
                      d="M2330.706,405.536
				c-190.721,414.48,170.26,767.597,542.857,749.971c372.597-17.625,313.295,707.11-152.926,764.325"
                    ></path>
                  </g>
                </g>
                <g>
                  <path
                    fill="#756855"
                    d="M1281.558,1548.024c0,0,22.635,139.037,22.635,220.52s-22.635,246.387-22.635,246.387
			s89.566,76.633,240.892,64.022c151.324-12.611,222.137-56.263,222.137-56.263s1.938-148.414-12.61-228.927
			c-14.55-80.512,26.19-291.008,26.19-291.008l22.633-186.894l-12.871-30.394l-93.83-31.686h-187.541l-105.41-14.229
			l-112.524,45.915l-11.64,223.754L1281.558,1548.024z"
                  ></path>
                  <path
                    fill="#F7BF6D"
                    d="M1441.936,1130.911c0,53.028,1.939,72.428-23.928,90.535c-25.866,18.107-36.861,18.107-36.861,18.107
			s28.667,67.256,139.467,64.022c110.802-3.232,153.483-49.793,153.483-49.793s-65.412-26.294-70.49-65.97
			c-5.08-39.677-7.76-67.896-7.76-67.896L1441.936,1130.911z"
                  ></path>
                  <path
                    fill="#FFCC7B"
                    d="M1328.928,966.813c-2.688,30.684,4.85,56.747,24.25,74.693c19.4,17.945,32.011,17.461,32.011,17.461
			s21.824,51.249,50.279,80.998c28.455,29.747,71.135,64.021,117.05,39.447c45.915-24.574,71.782-54.322,87.303-79.542
			c15.521-25.22,20.697-47.854,20.697-47.854s9.376,9.376,25.218-11.964c15.843-21.342,29.101-32.335,26.838-75.663
			c-2.265-43.328-7.114-53.998-7.114-53.998s-47.207-89.566-173.311-78.896c-126.104,10.67-179.456,50.441-179.456,50.441
			l-17.46,70.326C1335.233,952.263,1329.704,957.948,1328.928,966.813z"
                  ></path>
                  <path
                    fill="#191919"
                    d="M1335.233,952.263c13.095-0.484,26.675,2.425,33.951,28.131c7.275,25.706,3.395,45.592,10.669,48.018
			c7.275,2.425,5.82-29.101,4.366-54.322c-1.455-25.221-8.246-74.691,32.495-72.268c40.741,2.426,76.954,97.166,166.845,13.744
			c0,0-9.7,36.421-61.434,49.574c0,0,65.314,29.319,111.23-23.708c0,0-0.811,28.778,13.256,29.263
			c14.065,0.484,20.854,21.826,15.036,45.591c-5.82,23.767,5.334,26.676,12.125-5.335c6.789-32.011,0.485-48.5,20.37-55.776
			s18.431,9.215,18.431,9.215s46.562-247.357-128.044-259.968s-248.328,94.405-252.208,165.061
			C1328.442,940.138,1335.233,952.263,1335.233,952.263z"
                  ></path>
                  <path
                    fill="#74CFB7"
                    d="M1268.623 1285.469c-90.535 29.747-115.109 65.962-128.043 174.604-12.934 108.643-33.627 271.609-36.215 322.05-2.586 50.442 13.579 117.052 59.495 138.393 45.915 21.341 164.905 15.521 164.905 15.521l5.174-92.477c0 0-98.943-41.389-109.937-53.029-10.994-11.639 56.908-177.191 69.519-256.734C1306.132 1454.254 1268.623 1285.469 1268.623 1285.469zM1767.928 1285.469c90.534 29.747 115.107 65.962 128.042 174.604 12.934 108.643 33.626 271.609 36.214 322.05 2.589 50.442-13.58 117.052-59.494 138.393-45.918 21.341-164.905 15.521-164.905 15.521l-5.175-92.477c0 0 98.944-41.389 109.938-53.029 10.994-11.639-56.909-177.191-69.52-256.734C1730.418 1454.254 1767.928 1285.469 1767.928 1285.469z"
                  ></path>
                </g>
                <path
                  fill="#BCBCBC"
                  d="M1836.798,1883.234c0,25.371-20.566,45.938-45.938,45.938h-543.937c-25.371,0-45.938-20.566-45.938-45.938
		l-45.938-254.367c0-25.372,20.567-45.938,45.938-45.938h616.543c25.372,0,45.938,20.566,45.938,45.938L1836.798,1883.234z"
                ></path>
                <rect
                  width="2118.428"
                  height="45.328"
                  x="464.873"
                  y="1972.8"
                  fill="#828282"
                ></rect>
                <rect
                  width="1997.295"
                  height="81.102"
                  x="525.44"
                  y="2018.128"
                  fill="#6D6D6D"
                ></rect>
                <path
                  fill="#565656"
                  d="M1836.798,1962.858c0,5.49-4.45,9.941-9.94,9.941h-615.93c-5.492,0-9.942-4.451-9.942-9.941v-15.889
		c0-5.491,4.451-9.943,9.942-9.943h615.93c5.49,0,9.94,4.452,9.94,9.943V1962.858z"
                ></path>
                <path
                  fill="#AAA"
                  d="M1836.798,1891.089c0,25.371-20.566,45.938-45.938,45.938h-543.937c-25.371,0-45.938-20.566-45.938-45.938
		l-45.938-254.366c0-25.372,20.567-45.938,45.938-45.938h616.543c25.372,0,45.938,20.566,45.938,45.938L1836.798,1891.089z"
                ></path>
                <g>
                  <rect
                    width="581.149"
                    height="332.624"
                    x="2137.059"
                    y="1302.522"
                    fill="#74cfb7"
                  ></rect>
                  <g>
                    <rect
                      width="49.137"
                      height="49.138"
                      x="2172.338"
                      y="1332.604"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="257.975"
                      height="19.215"
                      x="2238.799"
                      y="1332.604"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="130.721"
                      height="19.214"
                      x="2238.799"
                      y="1362.527"
                      fill="#FFF"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      width="49.137"
                      height="49.138"
                      x="2172.338"
                      y="1408.482"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="257.975"
                      height="19.214"
                      x="2238.799"
                      y="1408.482"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="130.721"
                      height="19.213"
                      x="2238.799"
                      y="1438.407"
                      fill="#FFF"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      width="49.137"
                      height="49.138"
                      x="2172.338"
                      y="1484.361"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="257.975"
                      height="19.214"
                      x="2238.799"
                      y="1484.361"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="130.721"
                      height="19.213"
                      x="2238.799"
                      y="1514.286"
                      fill="#FFF"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      width="49.137"
                      height="49.138"
                      x="2172.338"
                      y="1560.241"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="257.975"
                      height="19.213"
                      x="2238.799"
                      y="1560.241"
                      fill="#FFF"
                    ></rect>
                    <rect
                      width="130.721"
                      height="19.215"
                      x="2238.799"
                      y="1590.164"
                      fill="#FFF"
                    ></rect>
                  </g>
                  <rect
                    width="184.266"
                    height="143.792"
                    x="2517.877"
                    y="1329.769"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="184.266"
                    height="122.752"
                    x="2517.877"
                    y="1491.133"
                    fill="#FFF"
                  ></rect>
                  <path
                    fill="#76C1AC"
                    d="M2534.885 1438.407c11.814-31.152 31.657-67.375 47.25-46.587 15.591 20.789 37.797 42.459 42.994 35.876 5.198-6.582 16.537-27.845 30.239-29.733 13.702-1.89 37.325 40.444 37.325 40.444H2534.885zM2534.885 1586.6c11.814-31.151 31.657-67.376 47.25-46.587 15.591 20.79 37.797 42.46 42.994 35.877 5.198-6.583 16.537-27.844 30.239-29.733 13.702-1.891 37.325 40.443 37.325 40.443H2534.885z"
                  ></path>
                  <polygon
                    fill="#FF8500"
                    points="2175.487 1355.439 2187.457 1374.653 2218.012 1349.455 2216.436 1347.88 2187.732 1366.896 2176.393 1354.258"
                  ></polygon>
                  <polygon
                    fill="#FF8500"
                    points="2175.487 1428.8 2187.457 1448.015 2218.012 1422.815 2216.436 1421.24 2187.732 1440.258 2176.393 1427.619"
                  ></polygon>
                  <polygon
                    fill="#FF8500"
                    points="2175.487 1502.16 2187.457 1521.375 2218.012 1496.177 2216.436 1494.602 2187.732 1513.618 2176.393 1500.979"
                  ></polygon>
                  <polygon
                    fill="#FF8500"
                    points="2175.487 1575.521 2187.457 1594.735 2218.012 1569.537 2216.436 1567.962 2187.732 1586.979 2176.393 1574.34"
                  ></polygon>
                </g>
                <g>
                  <rect
                    width="581.149"
                    height="332.625"
                    x="503.702"
                    y="980.839"
                    fill="#74cfb7"
                  ></rect>
                  <rect
                    width="232.459"
                    height="13.859"
                    x="549.476"
                    y="1018.12"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="136.704"
                    height="13.86"
                    x="549.476"
                    y="1043.949"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="232.459"
                    height="13.86"
                    x="549.476"
                    y="1093.086"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="136.704"
                    height="13.86"
                    x="549.476"
                    y="1118.915"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="232.459"
                    height="13.86"
                    x="549.476"
                    y="1168.053"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="136.704"
                    height="13.861"
                    x="549.476"
                    y="1193.881"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="232.459"
                    height="13.86"
                    x="549.476"
                    y="1243.02"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="136.704"
                    height="13.861"
                    x="549.476"
                    y="1268.849"
                    fill="#FFF"
                  ></rect>
                  <path
                    fill="#FF8500"
                    d="M1038.96,1153.881c0,56.887-46.114,103.001-103,103.001s-103-46.114-103-103.001
			c0-56.885,46.114-103,103-103c3.648,0,7.257,0.189,10.811,0.567l-10.811,102.433l101.8-15.761
			C1038.554,1143.261,1038.96,1148.524,1038.96,1153.881z"
                  ></path>
                  <path
                    fill="#76C1AC"
                    d="M1046.895,1129.028l-101.8,15.761l10.811-102.433C1002.491,1047.213,1039.845,1083.122,1046.895,1129.028z
			"
                  ></path>
                </g>
                <g>
                  <rect
                    width="322.951"
                    height="417.393"
                    x="1836.798"
                    y="716.866"
                    fill="#74cfb7"
                  ></rect>
                  <rect
                    width="235.574"
                    height="18.334"
                    x="1880.486"
                    y="751.043"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="235.574"
                    height="18.335"
                    x="1880.486"
                    y="787.209"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="235.574"
                    height="18.335"
                    x="1880.486"
                    y="823.375"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="159.5"
                    height="18.334"
                    x="1880.486"
                    y="859.542"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="235.574"
                    height="18.335"
                    x="1880.486"
                    y="895.708"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="235.574"
                    height="18.335"
                    x="1880.486"
                    y="931.874"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="117.788"
                    height="100.944"
                    x="1998.272"
                    y="1005.392"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="108.116"
                    height="100.944"
                    x="1880.486"
                    y="1005.392"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="117.786"
                    height="18.335"
                    x="1880.486"
                    y="968.04"
                    fill="#FFF"
                  ></rect>
                </g>
                <g>
                  <rect
                    width="322.951"
                    height="417.393"
                    x="970.695"
                    y="390.891"
                    fill="#74cfb7"
                  ></rect>
                  <rect
                    width="235.574"
                    height="18.335"
                    x="1014.384"
                    y="542.734"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="235.574"
                    height="18.335"
                    x="1014.384"
                    y="578.9"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="120.367"
                    height="18.335"
                    x="1129.59"
                    y="444.053"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="78.485"
                    height="18.335"
                    x="1129.59"
                    y="480.219"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="120.367"
                    height="18.335"
                    x="1129.59"
                    y="680.295"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="78.485"
                    height="18.335"
                    x="1129.59"
                    y="716.461"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="100.523"
                    height="93.854"
                    x="1018.18"
                    y="664.809"
                    fill="#FFF"
                  ></rect>
                  <rect
                    width="117.786"
                    height="18.335"
                    x="1014.384"
                    y="615.067"
                    fill="#FFF"
                  ></rect>
                  <g>
                    <circle
                      cx="1047.599"
                      cy="460.534"
                      r="27.979"
                      fill="none"
                      stroke="#FF8500"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    ></circle>
                    <line
                      x1="1066.2"
                      x2="1111.132"
                      y1="481.428"
                      y2="523.673"
                      fill="none"
                      stroke="#FF8500"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    ></line>
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      width="581.148"
                      height="332.624"
                      x="329.125"
                      y="1483.615"
                      fill="#74cfb7"
                    ></rect>
                  </g>
                  <g>
                    <rect
                      width="36.19"
                      height="63.649"
                      x="424.524"
                      y="1698.151"
                      fill="#FF8500"
                    ></rect>
                    <rect
                      width="36.191"
                      height="101.264"
                      x="488.296"
                      y="1660.537"
                      fill="#76C1AC"
                    ></rect>
                    <rect
                      width="36.19"
                      height="127.298"
                      x="552.069"
                      y="1634.503"
                      fill="#FF8500"
                    ></rect>
                    <rect
                      width="36.19"
                      height="74.405"
                      x="615.842"
                      y="1687.396"
                      fill="#76C1AC"
                    ></rect>
                    <rect
                      width="36.19"
                      height="138.182"
                      x="679.615"
                      y="1623.619"
                      fill="#FF8500"
                    ></rect>
                    <rect
                      width="36.19"
                      height="189.81"
                      x="743.388"
                      y="1571.991"
                      fill="#76C1AC"
                    ></rect>
                  </g>
                  <path
                    fill="none"
                    stroke="#76C1AC"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    d="M385.193,1666.896
			c-1.89,2.287,190.881-106.068,190.881-106.068l43.49,62.792l156.841-100.59"
                  ></path>
                  <rect
                    width="108.355"
                    height="13.858"
                    x="371.963"
                    y="1523.029"
                    fill="#E6F5FF"
                  ></rect>
                  <rect
                    width="68.037"
                    height="13.858"
                    x="371.963"
                    y="1552.953"
                    fill="#E6F5FF"
                  ></rect>
                </g>
                <g>
                  <rect
                    width="202.453"
                    height="16.526"
                    x="854.072"
                    y="1581.603"
                    fill="#76C1AC"
                  ></rect>
                  <rect
                    width="139.188"
                    height="16.526"
                    x="854.072"
                    y="1611.361"
                    fill="#76C1AC"
                  ></rect>
                  <rect
                    width="166.526"
                    height="16.526"
                    x="854.072"
                    y="1641.118"
                    fill="#76C1AC"
                  ></rect>
                  <rect
                    width="96.849"
                    height="16.526"
                    x="854.072"
                    y="1670.876"
                    fill="#76C1AC"
                  ></rect>
                </g>
                <g>
                  <rect
                    width="195.922"
                    height="23.848"
                    x="694.563"
                    y="772.893"
                    fill="#FF8500"
                  ></rect>
                  <rect
                    width="292.141"
                    height="23.847"
                    x="598.344"
                    y="815.833"
                    fill="#FF8500"
                  ></rect>
                  <rect
                    width="191.313"
                    height="23.847"
                    x="607.984"
                    y="858.774"
                    fill="#FF8500"
                  ></rect>
                  <rect
                    width="139.754"
                    height="23.848"
                    x="598.344"
                    y="901.715"
                    fill="#FF8500"
                  ></rect>
                </g>
                <g>
                  <rect
                    width="246.507"
                    height="20.123"
                    x="2252.636"
                    y="1108.087"
                    fill="#74cfb7"
                  ></rect>
                  <rect
                    width="148.44"
                    height="20.122"
                    x="2252.636"
                    y="1144.32"
                    fill="#74cfb7"
                  ></rect>
                  <rect
                    width="246.507"
                    height="20.122"
                    x="2252.636"
                    y="1180.554"
                    fill="#74cfb7"
                  ></rect>
                  <rect
                    width="117.924"
                    height="20.123"
                    x="2252.636"
                    y="1216.787"
                    fill="#74cfb7"
                  ></rect>
                </g>
                <g>
                  <path
                    fill="#424242"
                    d="M2047.97,1972.8H1866.44c0,0,8.199,0,31.529-21.13c23.34-21.14,70-83.34,140-120.21
			c0,0,20.13,70.38,21.391,111.81C2059.89,1960.74,2057.06,1973.06,2047.97,1972.8z"
                  ></path>
                  <path
                    fill="#EAEAEA"
                    d="M2415.37,2049c-54,50.23-147.039,282.337-242.369,192.667C2132.351,2203.437,2296.37,2054,2338.37,2035
			s42-61,42-61s-13.12,1.06-33.42,2.41c-64.7,4.28-202.311,11.46-220.58-3.61c-11.19-9.24-29.13-24.609-45.09-38.38
			c-18.25-15.75-33.91-29.42-33.91-29.42l2.95-93.79c42.989-82.21,228.05-85.34,315.05-33.34S2469.37,1998.77,2415.37,2049z"
                  ></path>
                  <path
                    fill="#424242"
                    d="M2190.725 2172.135c-3.058 21.532-3.058 23.533 12.942 36.866s14.934-24.668 31.134-13.334 33.534 0 52.2-27.333 21.168-23.999 41.584-41.333 54.407-36.673 54.407-36.673-55.853 105.34-96.922 142.673-76.402 44.784-105.069 29.059-24.668-48.727-16.001-62.727S2190.725 2172.135 2190.725 2172.135zM2346.95 1976.41c-26.62 1.76-65.601 4.01-103.521 5.01-54.229 1.41-106.31.25-117.06-8.62-9.64-7.96-24.28-20.46-38.351-32.569-2.27-1.961-4.52-3.9-6.739-5.811 1.819-37.03 3.72-75.27 3.72-75.27l-7-79.15c58-15 98.95 4 107.97 19 9.03 15 20.03 10 53.03 22s60-13 76 20-26.2 64.34-21.6 88.17c4.6 23.83 27.6 27.66 40.6 25.74C2342.28 1953.69 2347.72 1964.59 2346.95 1976.41z"
                  ></path>
                  <path
                    fill="#EAEAEA"
                    d="M2047.97 1972.8H1867.5c10.46-4.131 23.167-13.133 45.75-16.05 12.969-1.675 87.885-8.032 91.56-13.75 6.86-10.67 24.12-20.91 46.49-3.12 2.17 1.72 4.891 2.811 8.061 3.39C2059.89 1960.74 2057.06 1973.06 2047.97 1972.8zM2265.656 1981.42c-54.229 1.41-128.536.25-139.286-8.62-9.64-7.96-24.28-20.46-38.351-32.569 32.15-8.36 72.45-27.91 82.311-19.061 14.67 13.16 39.03-.12 42.18 15.86 3.16 15.97 7.207 19.468 27.157 29.668C2245.207 1969.528 2262.767 1977.54 2265.656 1981.42z"
                  ></path>
                  <path
                    fill="#F4F4F4"
                    d="M2207.31,1895.67c-7.46,29.29-16.18,48.5-27.54,61c-16.05,17.66-37.35,21.94-67.8,22.33
			c-52,0.67-64-6.2-64-6.2c-84-74.47-31.33-188.47,38.67-194.47c38.091-3.26,75.78,10.84,99.33,35.76
			C2205.71,1834.97,2215.52,1863.45,2207.31,1895.67z"
                  ></path>
                  <path
                    fill="#EAA03D"
                    d="M2192.64,1875c91.667-35.666,100.736,0,100.736,0s4.264,30.667-98.069,35.333
			c-41.377,1.887-2.667-31.877-2.667-31.877V1875z"
                  ></path>
                  <path
                    fill="#EAA03D"
                    d="M2207.31,1895.67c-7.46,29.29-16.18,48.5-27.54,61c-36.21,1.46-52.829-19.29-53.77-33.17
			c-0.99-14.65-38.5-9.5-31.98-27c6.511-17.5,17.98-21.5,28.48-37.35c10.5-15.851,31-3.65,63.47-45.061
			C2205.71,1834.97,2215.52,1863.45,2207.31,1895.67z"
                  ></path>
                  <path
                    fill="#F4F4F4"
                    d="M2065.089,1826.665c-70.065-69.034-41.237-91.909-41.237-91.909s26.234-16.444,72.383,75.013
			c18.659,36.979-27.992,15.482-27.992,15.482L2065.089,1826.665z"
                  ></path>
                  <path
                    fill="#232323"
                    d="M2042.973,1950.161c0,13.266,12.334,19.506,21.334,15.173s5.333-10.346-6.667-15.173
			S2042.973,1943.321,2042.973,1950.161z"
                  ></path>
                  <g>
                    <g>
                      <polygon
                        fill="#A0A0A0"
                        points="2100.666 1936.262 2218.641 1943.001 2100.613 1937.26"
                      ></polygon>
                    </g>
                    <g>
                      <polygon
                        fill="#A0A0A0"
                        points="2098.463 1942.526 2207.974 1979.046 2098.15 1943.476"
                      ></polygon>
                    </g>
                    <g>
                      <polygon
                        fill="#A0A0A0"
                        points="2094.273 1947.196 2185.973 2002.833 2093.758 1948.054"
                      ></polygon>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <polygon
                          fill="#A0A0A0"
                          points="2041.389 1921.635 1931.629 1877.861 2041.756 1920.705"
                        ></polygon>
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon
                          fill="#A0A0A0"
                          points="2045.464 1916.393 1953.168 1847.054 2046.062 1915.59"
                        ></polygon>
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon
                          fill="#A0A0A0"
                          points="2050.918 1913.289 1981.572 1831.464 2051.678 1912.639"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                  <path
                    fill="#EAA03D"
                    d="M2185.973 1744.646c1.527 25.854 26.527 44.925 36.027 37.89s16.598-19.48 24.799-8.008 9.201 17.707 25.701 3.34 44.896-20.521 44.896-20.521S2254.611 1735.624 2185.973 1744.646zM2325.5 1890c-16.129 11.318-20 10.982-11.5 25.991s29.545 20.009 33.022 2.509S2336.189 1882.499 2325.5 1890z"
                  ></path>
                </g>
              </g>
            </svg>
            {/* <img width="400px" height="800px" className="object-cover" src="https://cdn.vectorstock.com/i/500p/09/70/reduce-carbon-dioxide-emission-co2-level-vector-41990970.avif"/> */}
          </div>
          <div className="max-w-md mx-auto mt-8 flex justify-center items-center">
            {linkTokenData && linkTokenData.linkToken ? (
              <>
                <div className="flex flex-col p-10 gap-10">
                  <div className=" ">
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
                </div>
              </>
            ) : (
              <div className="">
                <h1 className="text-2xl leading-[30px] capitalize">
                  Track carbon emissions with open-source tech
                </h1>
                <p className="py-8 text-lg">
                  Quickly link your Carbon Shredder to Plaid for instant bank
                  connection, simplifying carbon footprint tracking with
                  real-time data sync and informed decision-making
                </p>
                <div className="flex flex-col md:flex-row md:justify-start md:items-center justify-center gap-3">
                  <button
                    className="flex gap-3 justify-center items-center bg-primary hover:bg-secondary text-white font-bold py-2 px-4  rounded-3xl"
                    onClick={fetchLinkToken}
                  >
                    Bank Linking
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
                    className="flex gap-3 justify-center items-center bg-primary hover:bg-secondary text-white font-bold py-2 px-4  rounded-3xl"
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
                    Linked Bank
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
