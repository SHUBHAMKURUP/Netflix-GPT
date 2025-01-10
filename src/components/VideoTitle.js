import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-24 absolute text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white  p-4 px-12 text-xl  text-black bg-opacity-50 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 mx-2 p-4 px-12 text-xl  text-white bg-opacity-50 rounded-lg">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
