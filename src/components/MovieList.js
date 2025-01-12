import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    console.log("Movies is null/undefined");
    return (
      <div className="p-6">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        {movies.length > 0 ? (
          movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
