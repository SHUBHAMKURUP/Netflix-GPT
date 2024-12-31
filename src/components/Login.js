import React from "react";
import { useState } from "react";
import Header from "./Header";
import backgroundImg from "../Images/backgroundImg.jpg";
function Login() {
  const [signIn, setSignIn] = useState(true);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="" src={backgroundImg} alt="Background" />
      </div>
      <div className="flex w-2/5 absolute p-12 my-36 mx-auto right-0 left-0 justify-center items-center min-h-screen bg-black bg-opacity-80  text-white">
        <div className="w-full max-w-md p-8 rounded">
          <h1 className="text-3xl font-bold mb-6">
            {signIn ? "Sign In" : "Sign up"}
          </h1>
          <form className="">
            {!signIn && (
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 text-black rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email or phone number
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-black rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 text-black rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {signIn ? "Sign In" : "Sign up"}
            </button>
            <div className="flex justify-between items-center mt-4 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-gray-400 hover:underline">
                Need help?
              </a>
            </div>
          </form>
          <div className="mt-8 text-gray-400 text-sm">
            <p
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignIn}
            >
              {signIn
                ? "New to Netflix? Sign up"
                : "Already registered? Sign In"}
            </p>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
