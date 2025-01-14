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
    <div className=" px-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex hover:overflow-x-auto overflow-hidden scroll-smooth">
        <div className="flex">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
