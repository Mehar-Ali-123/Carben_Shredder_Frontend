import React, { useEffect, useState } from "react";
import profilePic from "../assets/images/founder-img.jpeg";
import { Link } from "react-router-dom";
import ProfileChart from "../components/ProfileChart";
import SubcriptionCard from "../components/SubcriptionCard";
import axios from "axios";
import { backend_url, server } from "../server";

function PersonalProfile() {
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
    <>
      <div class="bg-gray-100 mt-44">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    src={`${backend_url}/${userData.avatar}`}
                    class=" object-cover w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  />

                  <h1 class="text-xl font-bold">
                    {userData.name || "Thijin Felix"}
                  </h1>
                  <p class="text-gray-700">Carbon Shredder</p>
                  <div class="mt-6 flex flex-wrap gap-4 justify-center">
                    <Link
                      to="/edit-profile"
                      class="  text-white py-2 text-sm rounded-md w-44 text-center bg-primary px-4"
                    >
                      Edit Profile     
                    </Link>
                  </div>
                </div>
                <hr class="my-6 border-t border-gray-300" />
                <div class="flex flex-col">
                  <span class="text-gray-700 text-justify font-semibolds tracking-wider mb-2">
                    At Carbon Shredder, we are not just a service; we are a
                    mission-driven movement. Our goal is to revolutionize the
                    way individuals and communities engage with their carbon
                    footprint. We're dedicated to developing a real-time carbon
                    tracking subscription service that not only informs but
                    empowers action towards a more sustainable world
                  </span>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <h2 class="text-3xl font-bold mb-6">Progress Chart</h2>
                <ProfileChart />
                <h2 class="text-3xl font-bold mb-4 mt-20">Subcription Plan</h2>
                <SubcriptionCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalProfile;
