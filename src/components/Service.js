import { Card } from "@mui/material";
import React from "react";
import { ReactComponent as Design } from "../svg/design.svg";
import { ReactComponent as Coding } from "../svg/coding.svg";
import { ReactComponent as Seo } from "../svg/seo.svg";
import { ReactComponent as Hosting } from "../svg/hosting.svg";

const Service = () => {
  return (
    <div className=" bg-teal-100 px-2 lg:px-32 py-28">
      <h1 className=" font-lexend text-4xl text-center mb-16"> What we do </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className=" lg:col-span-1 flex items-center">
          <Card className=" p-8 bg-white rounded-lg">
            {" "}
            <Design width={60} />{" "}
            <h1 className=" text-2xl font-ubuntu"> Web Design & Print </h1>
            <p className=" mt-3 font-cabin text-md">
              At Thrive Digital we put the funky in functional by creating
              fresh, striking, custom-designed websites that are fast loading
              and easy to update. We also provide complete branding solutions,
              print design packages and digital strategies for your business.
            </p>
            <div className=" mt-4">
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                branding
              </button>
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                web design
              </button>
            </div>
          </Card>
        </div>
        <div className=" lg:col-span-1 flex flex-col gap-4">
          <Card className=" p-8 bg-white rounded-lg">
            {" "}
            <Coding width={60} />{" "}
            <h1 className=" text-2xl font-ubuntu"> Web Design & Print </h1>
            <p className=" mt-3 font-cabin text-md">
              At Thrive Digital we put the funky in functional by creating
              fresh, striking, custom-designed websites that are fast loading
              and easy to update. We also provide complete branding solutions,
              print design packages and digital strategies for your business.
            </p>
            <div className=" mt-4">
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                branding
              </button>
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                web design
              </button>
            </div>
          </Card>
          <Card className=" p-8 bg-white rounded-lg">
            {" "}
            <Seo width={60} />{" "}
            <h1 className=" text-2xl font-ubuntu"> Web Design & Print </h1>
            <p className=" mt-3 font-cabin text-md">
              At Thrive Digital we put the funky in functional by creating
              fresh, striking, custom-designed websites that are fast loading
              and easy to update. We also provide complete branding solutions,
              print design packages and digital strategies for your business.
            </p>
            <div className=" mt-4">
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                branding
              </button>
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                web design
              </button>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-1 flex items-center">
          <Card className=" p-8 bg-white rounded-lg">
            {" "}
            <Hosting width={60} />{" "}
            <h1 className=" text-2xl font-ubuntu"> Web Design & Print </h1>
            <p className=" mt-3 font-cabin text-md">
              At Thrive Digital we put the funky in functional by creating
              fresh, striking, custom-designed websites that are fast loading
              and easy to update. We also provide complete branding solutions,
              print design packages and digital strategies for your business.
            </p>
            <div className=" mt-4">
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                branding
              </button>
              <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
                web design
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Service;
