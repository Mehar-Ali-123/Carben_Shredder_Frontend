import React from "react"; 
import profilePic from "../assets/images/person-2.jpg";
import { Link } from "react-router-dom";
import ProfileChart from "../components/ProfileChart";
import SubcriptionCard from "../components/SubcriptionCard";

function PersonalProfile() {
  return (
    <>
      <div class="bg-gray-100 mt-44">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    src={profilePic}
                    class=" object-cover w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  />

                  <h1 class="text-xl font-bold">John Doe</h1>
                  <p class="text-gray-700">Carben Shredder</p>
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
                  <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Options to upgrade, downgrade, or cancel subscription plans.
                    Include clear information on how changes affect billing and
                    offset contributions.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9"> 
              <div class="bg-white shadow rounded-lg p-6">
                <h2 class="text-3xl font-bold mb-6">Progress Chart</h2>
                <ProfileChart />
                <h2 class="text-3xl font-bold mb-4 mt-20">Subcription Plan</h2>
                <SubcriptionCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalProfile;
