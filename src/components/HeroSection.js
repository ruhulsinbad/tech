import React from "react";
import DivChanger from "./DivChanger";

const HeroSection = () => {
  return (
    <div className=" flex justify-between items-center px-2 lg:px-36  h-screen bg-gradient-to-br from-[#ffffff] via-[#d8e5eb] to-[#f4f4f4]">
      <div>
        <div className=" pt-24 uppercase text-7xl lg:text-8xl font-lexend font-bold text-[#03001C] opacity-90 ">
          <div className=" flex gap-4 ">
            We Build
            {/* We <DivChanger /> */}
          </div>
          <div> Website</div>
        </div>
        <div className=" flex flex-col items-center justify-center lg:flex-row gap-4">
          <button className=" w-fit mt-12 border-2 border-cyan-600 text-cyan-600 px-10 py-2 font-viga text-xl hover:rounded-full">
            Start a project
          </button>
          <button className="  w-fit rounded-full mt-12  bg-cyan-600 text-white  px-10 py-2 font-viga text-xl hover:rounded-none">
            See Portfolio
          </button>
        </div>
      </div>

      {/* Photo Part  */}
    </div>
  );
};

export default HeroSection;
