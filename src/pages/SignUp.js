import React, { useState } from "react";
import Logo from "../assets/images/footer-logo-2.png";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../server";

function SignUp() {
  const Navigate = useNavigate();
  const [msg,setMessage]= useState("")
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("country", data.country || "ali");
      formData.append("file", data.avatar[0]);

      const response = await axios.post(`${server}/create-user`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || 201) {
        console.log("Sign Up successful");

        reset();

        toast.success("Sign Up successful! Redirecting to Login page.", {
          autoClose: 3000, // Auto close after 3 seconds
          onClose: () => {
            Navigate("/"); // Corrected Navigate("/") to Navigate("/")
          },
        });
      } else {
        console.error("Sign Up failed");
      }
    } catch (error) {
      console.log("Error Server:", error);
      setMessage(error.response.data.error)
      toast.error(error.response.data.error || error.message , {
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto mt-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-70 w-48" src={Logo} alt="Your Company" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-10">
            <div>
              <label
                className="text-md font-medium leading-6 text-gray-900 dark:text-gray-200"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                {...register("name", { required: true })}
                className={`block w-full py-2 mt-2 text-gray-700 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-opacity-50 sm:text-sm sm:leading-6 outline-none px-2 rounded-md ${
                  errors.username ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  Username is required
                </p>
              )}
            </div>

            <div>
              <label
                className="text-md font-medium leading-6 text-gray-900 dark:text-gray-200"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className={`block w-full py-2 mt-2 text-gray-700 shadow-md  placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-opacity-50 sm:text-sm sm:leading-6 outline-none px-2 rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Email Address is required
                </p>
              )}
            </div>

            <div>
              <label
                className="text-md font-medium leading-6 text-gray-900 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: true })}
                className={`block w-full py-2 mt-2 text-gray-700 shadow-md  placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-opacity-50 sm:text-sm sm:leading-6 outline-none px-2 rounded-md ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            <div>
            <label
              className="text-md font-medium leading-6 text-gray-900 dark:text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Confirm Password
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => value === password || "Passwords do not match",
              })}
              className={`block w-full py-2 mt-2 text-gray-700 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-opacity-50 sm:text-sm sm:leading-6 outline-none px-2 rounded-md ${
                errors.passwordConfirmation ? "border-red-500" : ""
              }`}
            />
            {errors.passwordConfirmation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>
            <div>
              <label
                className="text-md font-medium leading-6 text-gray-900 dark:text-gray-200"
                htmlFor="country"
              >
                Country
              </label>
              <select
                id="country"
                {...register("country", { required: true })}
                className={`block w-full px-2 py-3 mt-2 text-gray-700 shadow-md  placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-opacity-50 sm:text-sm sm:leading-6 outline-none rounded-md ${
                  errors.country ? "border-red-500" : ""
                }`}
              >
                <option>Surabaya</option>
                <option>Jakarta</option>
                <option>Tangerang</option>
                <option>Bandung</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">Country is required</p>
              )}
            </div>
            <br />
          </div>
          <div className="w-[100%] mt-5">
            <label className="block text-md font-medium leading-6 text-gray-900">
              Upload Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-sm font-medium leading-6 text-gray-900"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="avatar"
                    className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="bg-primary p-1 px-3 rounded-md text-white">
                      Upload a file
                    </span>
                    <input
                      id="avatar"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      {...register("avatar", { required: true })}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 text-sm font-medium leading-6 text-gray-900">
                    or drag and drop
                  </p>
                </div>
                <p className="text-sm font-medium leading-6 text-gray-900">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
              {errors.avatar && (
                <p className="text-red-500 text-sm mt-1">Image is required</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-text-primary px-3 py-1.5 text-sm font-semibold leading-6 bg-primary text-white shadow-md"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p class="mt-6 text-center text-sm text-gray-500">
          Already a member?
          <Link
            to="/ "
            class="font-semibold leading-6 text-primary hover:text-primary px-2"
          >
            Sign In
          </Link>
        </p>
      </section>
    </>
  );
}

export default SignUp;
