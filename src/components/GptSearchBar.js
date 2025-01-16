import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div>
      <form className="bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang.en.gptSearchPlaceholder}
          className="p-4 m-4 col-span-10"
        />
        <button className="py-2 px-4 col-span-2 bg-red-600 text-white rounded-lg">
          {lang.en.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
