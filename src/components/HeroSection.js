import React from "react";
import DivChanger from "./DivChanger";
import ImgSrc from "../photos/5721524.png";

const HeroSection = () => {
  return (
    <div className="   px-2 lg:px-36  lg:h-screen bg-gradient-to-br from-[#ffffff] via-[#d8e5eb] to-[#f4f4f4] py-28">
      <h1 className=" font-teko text-6xl "> Techsinu </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 ">
        <div className=" ">
          <div className=" w-full pt-24 uppercase text-6xl lg:text-7xl font-lexend font-bold text-[#03001C] opacity-90 ">
            <div className=" flex gap-4 ">
              We <DivChanger />
            </div>
            <div> Website</div>
          </div>
          <div className="  flex  lg:flex-row gap-4">
            <button className=" w-fit mt-12 border-2 border-cyan-600 text-cyan-600 px-10 py-2 font-viga text-xl hover:rounded-full">
              Start a project
            </button>
            <button className="  w-fit rounded-full mt-12  bg-cyan-600 text-white  px-10 py-2 font-viga text-xl hover:rounded-none">
              See Portfolio
            </button>
          </div>
        </div>

        {/* Photo Part  */}
        <div className=" hidden lg:block">
          <img src={ImgSrc} alt=" hi" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
