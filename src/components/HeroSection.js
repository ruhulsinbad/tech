import React from "react";
import DivChanger from "./DivChanger";
import ImageSrc from "../photos/4300578.png";
import { ReactComponent as Bulb } from "../photos/blob.svg";
import WebSrc from "../photos/web.png";
import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
// import Circle from "./Circle";

const HeroSection = () => {
  return (
    <div className=" flex justify-between items-center px-36  h-screen bg-gradient-to-br from-[#ffffff] via-[#d8e5eb] to-[#f4f4f4]">
      {/* <div className=" float-right">
        <Circle />
      </div> */}
      <div>
        <div className=" pt-24 uppercase text-8xl font-saira font-bold text-[#03001C] opacity-90 ">
          <div className=" flex gap-8 ">
            We <DivChanger />
          </div>
          <div> Website</div>
        </div>
        <div className=" flex gap-4">
          <button className=" mt-12 border-2 border-cyan-600 text-cyan-600 px-10 py-2 font-viga text-xl hover:rounded-full">
            Start a project
          </button>
          <button className=" rounded-full mt-12  bg-cyan-600 text-white  px-10 py-2 font-viga text-xl hover:rounded-none">
            See Portfolio
          </button>
        </div>
      </div>

      {/* Photo Part  */}
      <div className="relative">
        <div className="relative">
          <img
            className="absolute z-50 opacity-100"
            src={ImageSrc}
            alt="Content"
            width="400"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Bulb />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
