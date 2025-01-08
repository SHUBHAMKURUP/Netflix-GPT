import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";

const Browse = () => {
  usePlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
