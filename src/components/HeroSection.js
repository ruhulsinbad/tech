import React from "react";
import DivChanger from "./DivChanger";
import ImgSrc from "../photos/5721524.png";

const HeroSection = () => {
  return (
    <div className="   px-2 lg:px-36  lg:h-screen bg-gradient-to-br from-[#ffffff] via-[#d8e5eb] to-[#f4f4f4] py-28">
      <h1 className=" font-teko text-6xl "> Techsinu </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 ">
        <div className=" grid place-items-center ">
          <div className=" grid place-items-center w-full pt-24 uppercase text-5xl lg:text-7xl font-lexend font-bold text-[#03001C] opacity-90 ">
            <div className="  place-items-center flex justify-center gap-4 w-full">
              We <DivChanger />
            </div>
            <div> Website</div>
          </div>
          <div className=" w-[50%] lg:w-[75%] gap-2  flex mt-8 flex-col lg:flex-row lg:gap-4 lg:justify-center">
            <button className=" w-full  border-2 border-cyan-900 text-cyan-900 px-10 py-2 font-viga text-xl hover:rounded-full">
              Start a project
            </button>
            <button
              name="portfolio"
              className="  w-full border-2 border-cyan-900   bg-cyan-900 text-white  px-10 py-2 font-viga text-xl hover:rounded-none"
            >
              See Portfolio
            </button>
          </div>
        </div>

        {/* Photo Part  */}
        <div className=" hidden lg:block">
          <img src={ImgSrc} alt=" hi" width={3125} height={2084} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
