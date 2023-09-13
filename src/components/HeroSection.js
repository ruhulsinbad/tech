import React from "react";
import DivChanger from "./DivChanger";
import ImgSrc from "../photos/5721524.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="  h-screen  grid place-items-center px-2 lg:px-24  lg:h-screen bg-gradient-to-br from-red-200 via-rose-300 to-stone-200 ">
      {/* <h1 className=" font-teko text-6xl lg:pt-2 "> Techsinu </h1> */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 py-32">
        <div className="  grid place-items-center ">
          <div className=" grid place-items-center w-full lg:pt-24 uppercase text-5xl lg:text-7xl font-lexend font-bold text-[#03001C] opacity-90 ">
            <div className="  flex justify-center gap-4 w-full">
              We <DivChanger />
            </div>
            <div> Website</div>
          </div>
          <div className=" hidden lg:flex w-[50%] lg:w-[75%] gap-2   mt-8 flex-col lg:flex-row lg:gap-4 lg:justify-center">
            <button className=" w-full  border-2 border-cyan-900 text-cyan-900 px-10 py-2 font-viga text-xl hover:rounded-full">
              <Link to={`pro`}> Start a project </Link>
            </button>
            <button
              name="portfolio"
              className="  w-full border-2 border-cyan-900   bg-cyan-900 text-white  px-10 py-2 font-viga text-xl hover:rounded-none"
            >
              <Link to={`portfolio`}>See Portfolio</Link>
            </button>
          </div>
        </div>

        {/* Photo Part  */}
        <div className=" hidden lg:block">
          <img src={ImgSrc} alt=" hi" width={616} height={411} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
