import React from "react";
import Logo from "../assets/images/footer-logo-2.png";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-70 w-48   " src={Logo} alt="Your Company" />
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <Link
                    to="/forget-pass"
                    class="font-semibold text-primary hover:text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-text-primary px-3 py-1.5 text-sm font-semibold leading-6 bg-primary text-white shadow-sm     "
              >
                Sign In
              </button>
            </div>
            <Link to='/home'><p className="text-indigo-600">click me to go to home page</p></Link>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              to="/sign-up"
              class="font-semibold leading-6 text-primary hover:text-primary px-2"
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
