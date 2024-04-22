import React, { useEffect } from "react";
import axios from "axios";
import { server } from "../server";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
const PlaidLinkComponent = () => {
  useEffect(() => {
    const exchangeToken = async () => {
      try {
        const response = await axios.post(`${server}/api/create_link_token`);
        console.log(response);
      } catch (error) {
        console.error("Error exchanging token:", error);
      }
    };

    exchangeToken();
  }, []);

  return (
    <div>
      <h1>Plaid Integration</h1>
      <button>Link Bank Account</button>
    </div>
  );
};

export default PlaidLinkComponent;
