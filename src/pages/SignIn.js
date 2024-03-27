import React from "react";
import { useForm } from "react-hook-form";
import Logo from "../assets/images/footer-logo-2.png";
import { Link } from "react-router-dom";

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

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
                  {...register("email", { required: true })}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-md focus:ring focus:ring-primary focus:ring-opacity-50 placeholder:text-gray-400 focus:outline-none focus:border-primary sm:text-sm sm:leading-6 outline-none px-2"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">Email address is required *</p>}
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
              {errors.password && <p className="text-red-500 text-sm mt-1">Password is required *</p>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-text-primary px-3 py-2 text-sm font-semibold leading-6 bg-primary text-white shadow-md"
              >
                Sign In
              </button>
            </div>
            <Link to='/home'><p className="text-indigo-600">click here to go to home page</p></Link>
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
