import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import backgroundImg from "../Images/backgroundImg.jpg";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="" src={backgroundImg} alt="Background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
