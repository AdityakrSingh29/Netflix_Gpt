import React from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[14%] px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold to-black">{title}</h1>
      <p className="p-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white p-5 px-12 text-xl text-black flex items-center gap-3 font-bold rounded-md hover:bg-opacity-70">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-700 p-5 px-12 text-xl text-white flex items-center gap-3 font-bold bg-opacity-50 rounded-md hover:bg-opacity-65">
          <GoInfo size={24} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
