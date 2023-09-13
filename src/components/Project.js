import React from "react";
import ImgSrc from "../photos/4300578.png";
import { ReactComponent as Projects } from "../svg/projects.svg";
import { ReactComponent as Client } from "../svg/client.svg";
import { ReactComponent as Experience } from "../svg/experience.svg";

const Project = () => {
  return (
    <div className="  lg:h-screen bg-slate-100 ">
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className=" lg:col-span-1 grid place-items-center">
          <img src={ImgSrc} alt="Web Dev" width={500} height={500} />
        </div>
        <div className=" lg:col-span-1 flex flex-col justify-center gap-4 my-12 lg:my-0 ">
          <div className=" px-2 lg:px-24 font-cabin text-lg"> At Techsinu </div>
          <div className=" px-2 lg:px-24 font-lexend text-3xl lg:text-5xl">
            We design and develop beautiful hand-crafted websites in-house on
            the Gold Coast, Australia.
          </div>
        </div>
      </div>
      <div className=" px-20 lg:px-0  py-12 lg:py-4 bg-teal-800 w-full lg:h-40 flex flex-col gap-8 lg:flex-row justify-evenly items-center drop-shadow-sm shadow-teal-300 ">
        <div className=" flex justify-center  w-full lg:w-fit items-center gap-4 rounded-full bg-white px-2 drop-shadow-sm shadow-teal-300 ">
          <Projects style={{ width: 60 }} />
          <div className=" pr-4 ">
            <p className=" font-ubuntu text-3xl">+350</p>
            <p className=" text-sm font-cabin"> Project completed</p>
          </div>
        </div>
        <div className=" flex justify-center  w-full lg:w-fit items-center gap-4 rounded-full bg-white px-2 drop-shadow-sm shadow-teal-300 ">
          <Client style={{ width: 60 }} />
          <div className=" pr-4 ">
            <p className=" font-ubuntu text-3xl">+250</p>
            <p className=" text-sm font-cabin"> Satisfied Clients</p>
          </div>
        </div>
        <div className=" flex justify-center w-full lg:w-fit items-center gap-4 rounded-full bg-white px-2 drop-shadow-sm shadow-teal-300 ">
          <Experience style={{ width: 60 }} />
          <div className=" pr-4 font-ubuntu ">
            <p className=" flex  font-ubuntu text-3xl">+5</p>
            <p className=" text-sm font-cabin "> Years experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
