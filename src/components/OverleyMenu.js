import React from "react";
import DivCircle from "./DivCircle";

const OverleyMenu = () => {
  return (
    <div className=" grid grid-cols-12 w-screen h-screen absolute">
      <div className=" col-span-3 bg-slate-700">
        <div>
          <ul className=" absolute top-32 flex flex-col gap-4 ml-28 font-saira text-3xl text-white">
            <li> Industries </li>
            <li> Services </li>
            <li> Professional </li>
            <li> Insights </li>
            <li> Events</li>
          </ul>
        </div>

        <ul className=" absolute bottom-32 flex flex-col gap-2 ml-28 font-play text-xl text-white">
          <li> About Us </li>
          <li> Careers </li>
          <li> Professional </li>
        </ul>
      </div>
      <div className=" relative col-span-9 ">
        <div className=" absolute flex justify-center  bottom-28 right-16 w-28 h-28 shadow-sm shadow-rose-400 rounded-full border-[1px] border-rose-500">
          <DivCircle />
          <div className=" absolute w-6 h-6 rounded-full bg-teal-500 self-baseline translate-y-6 -translate-x-6 ">
            {" "}
          </div>
          <div className=" absolute w-2 h-2 rounded-full bg-amber-600 self-end -translate-y-8 ">
            {" "}
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center w-full h-full">
          {/* <form className=" flex flex-col gap-6 w-[60%] m-auto border-4 p-16">
            <label htmlFor="name"> Full Name </label>
            <input
              className=" border-b-2 border-gray-700"
              id="name"
              type="text"
            />
            <label htmlFor="email"> Email Address </label>
            <input
              className=" border-b-2 border-gray-700"
              id="email"
              type="text"
            />

            <label htmlFor="cost"> Estimate Budget (Amount + Currency ) </label>
            <input
              className=" border-b-2 border-gray-700"
              id="cost"
              type="text"
            />

            <label htmlFor="message"> Project Description </label>
            <textarea
              className=" border-2 border-gray-700"
              rows={5}
              id="email"
              type="text"
            />
          </form> */}
          <p className=" font-oswald text-4xl">
            {" "}
            Contact <span className=" underline"> Information </span>{" "}
          </p>
          <p className=" mt-10 text-lg font-raleway">
            {" "}
            We understand the value of your time. We response very Fast.{" "}
          </p>
          <div className=" grid grid-cols-4 w-[70%] mx-auto mt-16">
            <div className=" col-span-2 flex flex-col items-center  gap-8">
              <h1 className=" text-3xl font-saira"> For Project</h1>
              <div className=" bg-cyan-700 text-white border-b-8 border-l-8 border-rose-700 px-6 py-12 shadow-md shadow-cyan-100 text-lg font-saira">
                <h1 className=" uppercase"> Ruhul Sinbad </h1>
                <p> ruhulsinbad@gmail.com </p>
                <p>
                  Skype: <span> ruhulsinbad </span>
                </p>
              </div>
            </div>
            <div className=" col-span-2 flex flex-col items-center gap-8">
              <h1 className=" text-3xl font-saira"> For Partnership</h1>
              <div className=" bg-amber-500 border-b-8 border-l-8 border-rose-700 px-6 py-12 shadow-md shadow-cyan-100 text-lg font-saira">
                <h1 className=" uppercase"> Ruhul Sinbad </h1>
                <p> ruhulsinbad@gmail.com </p>
                <p>
                  Skype: <span> ruhulsinbad </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid place-items-center absolute bottom-8 w-[100%] border-t border-gray-800 my-4">
          Copyright @ 2023
        </div>
      </div>
    </div>
  );
};

export default OverleyMenu;
