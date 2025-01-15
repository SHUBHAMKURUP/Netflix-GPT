import React, { useEffect } from "react";
import NetflixLogo from "../Images/NetflixLogo.png";
import { CgUserlane } from "react-icons/cg";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { SiOpenai } from "react-icons/si";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    console.log("GPT Search clicked");
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={NetflixLogo} alt="Netflix Logo" />
      </div>

      {user && (
        <div className="absolute flex top-0 right-0 p-4 items-center">
          <button
            onClick={handleGptSearch}
            className="bg-red-500 mx-4 my-2 py-2 px-4 flex justify-center items-center rounded-md"
          >
            <SiOpenai className=" mr-2" />
            GPT Search
          </button>
          <CgUserlane className="bg-red-500 text-3xl" />
          <button
            onClick={handleSignOut}
            className="ml-4 font-bold text-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
