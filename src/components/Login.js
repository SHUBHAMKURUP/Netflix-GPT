import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import backgroundImg from "../Images/backgroundImg.jpg";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error: ${errorCode} - ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error: ${errorCode} - ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={backgroundImg}
          alt="Background"
        />
      </div>
      <div className=" w-full md:w-1/3 absolute items-center p-10 my-36 mx-auto right-0 left-0  bg-black bg-opacity-80 text-white">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl font-bold mb-6">
            {signIn ? "Sign In" : "Sign up"}
          </h1>
          {!signIn && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                ref={name}
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
              ref={email}
              type="email"
              id="email"
              className="w-full px-4 py-2 text-black rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email or phone number"
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
              ref={password}
              type="password"
              id="password"
              className="w-full px-4 py-2 text-black rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
          <p className="text-red-500">{errorMessage}</p>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={handleButtonClick}
          >
            {signIn ? "Sign In" : "Sign up"}
          </button>
          <div className="flex justify-between items-center mt-4 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <p className="text-gray-400 hover:underline">Need help?</p>
          </div>
        </form>
        <div className="mt-8 text-gray-400 text-sm">
          <p
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignIn}
          >
            {signIn ? "New to Netflix? Sign up" : "Already registered? Sign In"}
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-500 hover:underline">Learn more.</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
