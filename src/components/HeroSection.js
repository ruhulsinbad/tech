import React from "react";
import DivChanger from "./DivChanger";
// import ImgSrc from "../photos/5721524.png";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import developer from "../json/animation_ln0mmlgx.json";
import background from "../json/background2.json";
import tick from "../json/tick.json";
import go from "../json/go.json";

const HeroSection = () => {
  return (
    <div className=" relative  h-screen bg-[#00041B]  grid place-items-center lg:h-screen  ">
      {/* <h1 className=" font-teko text-6xl lg:pt-2 "> Techsinu </h1> */}
      {/* bg-[#00041B] */}
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        {/* <div className="  grid place-items-center ">
          <div className=" grid place-items-center w-full lg:pt-24 uppercase text-5xl lg:text-7xl font-lexend font-bold text-white opacity-90 ">
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
        </div> */}

        <div className=" text-white ">
          <div className=" flex flex-col justify-between px-4 lg:px-20 py-20 lg:py-32 h-screen">
            <div className=" flex flex-col gap-4">
              <div className=" flex gap-6">
                <div className=" flex gap-2 items-center">
                  <Lottie className=" w-8" animationData={tick} loop={true} />
                  <p className=" font-raleway"> Premium support </p>
                </div>
                <div className=" flex gap-2 items-center">
                  <Lottie className=" w-8" animationData={tick} loop={true} />
                  <p className=" font-raleway"> Money back gurantee </p>
                </div>
              </div>
              <div className=" text-5xl font-raleway">
                Our team practice web development.{" "}
              </div>
              <div className=" font-raleway">
                {" "}
                For SME and Enterprise level business.{" "}
              </div>
            </div>
            <Link className=" relative z-50  place-self-center" to={`pro`}>
              <button className=" flex flex-col gap-6 items-center ring-2 ring-white py-4 px-8  w-fit mt-8 ">
                <Lottie animationData={go} loop={true} />
                <p className=" text-xl font-raleway"> Start a project </p>
              </button>
            </Link>
          </div>
        </div>

        {/* Photo Part  */}
        <div className="  hidden text-center h-screen  bg-white lg:grid lg:place-items-center">
          <Lottie className="" animationData={developer} loop={true} />
          {/* <img src={ImgSrc} alt=" hi" width={616} height={411} /> */}
        </div>
      </div>
      <div
        className=" grid place-items-center  w-full h-screen absolute z-20 opacity-90
      "
      >
        <Lottie animationData={background} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;
