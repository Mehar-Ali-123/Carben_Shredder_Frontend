import React, { useState } from "react";
import Logo from "../assets/images/footer-logo-2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import react-hook-form

function ForgetPass() {
  const [otpField, setOtpField] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const email = watch("email");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-70 w-48" src={Logo} alt="Your Company" />
        </div>

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
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^\S+@\S+$/i,
                  })}
                  className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-sm sm:leading-6 outline-none px-2 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="text-md">
                <button
                  type="button"
                  className="font-semibold text-sm border-2 border-primary p-2 text-primary rounded-md mt-2 w-full"
                  onClick={() => {
                    setOtpField(true);
                  }}
                >
                  Send OTP
                </button>
              </div>

              {otpField && (
                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    autoComplete="off"
                    placeholder="enter otp here"
                    {...register("otp", { required: "otp is required" })}
                    className={` block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-sm sm:leading-6 outline-none px-2 ${
                      errors.otp ? "border-red-500" : ""
                    }`}
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.otp.message}
                    </p>
                  )}
                </div>
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
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2  focus:ring-primary focus:ring-opacity-50 text-sm sm:leading-6 outline-none px-2  ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                 Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                  className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2  focus:ring-primary focus:ring-opacity-50 text-sm sm:leading-6 outline-none px-2  ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-text-primary px-3 py-2 text-md font-semibold leading-6 bg-primary text-white shadow-sm text-sm"
              >
                Set Password
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-md text-gray-500">
            Not a member?
            <Link
              to="/sign-up"
              className="text-sm font-semibold leading-6 text-primary hover:text-primary px-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForgetPass;
