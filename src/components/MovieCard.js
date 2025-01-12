import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-64 pr-4">
      <img alt={title} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
