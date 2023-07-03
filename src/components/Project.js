import React from "react";
import ImgSrc from "../photos/4300578.png";
import { ReactComponent as Projects } from "../svg/projects.svg";
import { ReactComponent as Client } from "../svg/client.svg";
import { ReactComponent as Experience } from "../svg/experience.svg";

const Project = () => {
  return (
    <div className=" relative h-screen ">
      <div className=" flex">
        <div className=" w-[50%] grid place-items-center">
          <img src={ImgSrc} alt="Web Dev" />
        </div>
        <div className=" w-[50%] flex flex-col justify-center gap-4 ">
          <div className=" px-24 font-cabin text-lg">At Techsinu</div>
          <div className=" px-24 font-lexend text-5xl">
            We design and develop beautiful hand-crafted websites in-house on
            the Gold Coast, Australia.
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 bg-teal-800 w-full h-40 flex justify-evenly items-center drop-shadow-sm shadow-teal-300 ">
        <div className=" flex items-center gap-4 rounded-full bg-white px-2  drop-shadow-sm shadow-teal-300 ">
          <Projects style={{ width: 60 }} />
          <div className=" pr-4 ">
            <p className=" font-ubuntu text-3xl">+350</p>
            <p className=" text-sm font-cabin"> Project completed</p>
          </div>
        </div>
        <div className=" flex items-center gap-4 rounded-full bg-white px-2 drop-shadow-sm shadow-teal-300 ">
          <Client style={{ width: 60 }} />
          <div className=" pr-4 ">
            <p className=" font-ubuntu text-3xl">+250</p>
            <p className=" text-sm font-cabin"> Satisfied Clients</p>
          </div>
        </div>
        <div className=" flex items-center gap-4 rounded-full bg-white px-2 drop-shadow-sm shadow-teal-300 ">
          <Experience style={{ width: 60 }} />
          <div className=" pr-4 font-ubuntu ">
            <p className=" font-ubuntu text-3xl">+5</p>
            <p className=" text-sm font-cabin "> Years experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
