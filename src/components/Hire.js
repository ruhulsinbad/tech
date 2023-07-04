import React from "react";
import { ReactComponent as Final } from "../svg/final.svg";

const Hire = () => {
  return (
    <div className=" bg-red-300">
      <div className=" flex flex-col justify-center">
        <h1 className=" lg:w-[65%] mt-28 mx-auto uppercase text-5xl lg:text-7xl px-2 lg:px-32 text-center font-lexend font-semibold">
          Ready to start a project?
        </h1>
        <button className=" px-8 py-3 bg-green-700 rounded-full text-xl font-semibold font-lexend text-white mx-auto mt-10 lg:my-10">
          Let's do this{" "}
        </button>
      </div>

      <Final className=" w-full" />
    </div>
  );
};

export default Hire;
