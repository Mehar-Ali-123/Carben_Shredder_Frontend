import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../server";

function CheckProfileData() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const authToken = localStorage.getItem("authToken");
          if (!authToken) {
            throw new Error("Authentication token not found");
          }
      
          const response = await axios.get(`${server}/get-profile-data`, {
            headers: {
              Authorization: `Bearer ${authToken}`, 

            },
          });
          const { user } = response.data;
          setUserData(user);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setLoading(false);
        }
      };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to your profile</h1>
      {userData && (
        <div className="my-72">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Country: {userData.country}</p> 
        </div>
      )}
    </div>
  );
} 
export default CheckProfileData