import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  if (!posterPath) {
    return null;
  }

  return (
    <div className="w-36 md:w-48 pr-4 hover:scale-110 transition duration-300 ease-in-out">
      <img
        alt={title || "movie poster"}
        src={IMG_CDN_URL + posterPath}
        className="rounded-sm"
      />
    </div>
  );
};

export default MovieCard;
