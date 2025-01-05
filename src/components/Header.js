import React from "react";
import NetflixLogo from "../Images/NetflixLogo.png";
import { CgUserlane } from "react-icons/cg";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={NetflixLogo} alt="Netflix Logo" />
      </div>

      <div className="absolute flex top-0 right-0 p-4">
        <CgUserlane className="bg-red-500 text-3xl" />
        <button onClick={handleSignOut} className="ml-4 font-bold text-red-500">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
