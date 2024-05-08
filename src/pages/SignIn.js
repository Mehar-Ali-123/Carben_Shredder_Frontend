import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
import Loader from "../components/Loader/Loader";

function SignIn() {
  const Navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    try {
      const response = await axios.post(`${server}/login-user`, data);

      if (response.status === 200 || response.status === 201) {
        console.log("Login successful");
        reset();
        console.log("login data ", response.data);

        const { token } = response.data;
        const { user } = response.data;

        console.log("authToken", token);
        localStorage.setItem("authToken", token);

        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.email);
        if (
          user.cnughtCreatedSubaccunt?.[0]?.subaccountId ||
          user.cnughtCreatedSubaccunt?.subaccountId
        ) {
          localStorage.setItem("isSubaccountCnaught", true);
        } else {
          localStorage.setItem("isSubaccountCnaught", false);
        }
        toast.success("Successful Login", {
          autoClose: 1000,
          style: {
            marginTop: "100px",
          },
        });
        Navigate("/");
        setTimeout(() => {
          window.location.reload();
        }, [1000]);
        setLoader(false);
      } else {
        console.log("Error Server:");
        setLoader(false);
      }
    } catch (error) {
      console.log("Error Server:", error.message);
      setLoader(false);
      toast.error(error.response.data.error, {
        autoClose: 3000,
        style: {
          marginTop: "100px",
        },
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-52">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-70 w-48" src={Logo} alt="Your Company" />
        </div> */}
        <h1 className="w-full text-center font-extrabold   text-3xl mt-5 flex justify-center gap-3">
          <p className="text-primary">Sign In</p>to unlock Carbon Shredder.
        </h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", { required: true })}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-md focus:ring focus:ring-primary focus:ring-opacity-50 placeholder:text-gray-400 focus:outline-none focus:border-primary sm:text-sm sm:leading-6 outline-none px-2"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Email address is required *
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forget-pass"
                    className="font-semibold text-primary hover:text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", { required: true })}
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-md focus:ring focus:ring-primary focus:ring-opacity-50 placeholder:text-gray-400 focus:outline-none focus:border-primary sm:text-sm sm:leading-6 outline-none  px-2"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required *
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-text-primary px-3 py-2 text-sm font-semibold leading-6 bg-primary text-white shadow-md"
              >
                {loader ? <Loader /> : " Sign In"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/sign-up"
              className="font-semibold leading-6 text-primary hover:text-primary px-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
