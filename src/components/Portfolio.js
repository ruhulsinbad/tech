import { ArrowForward } from "@mui/icons-material";
import { Card } from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <div className=" px-32 relative  ">
      <div className="  mt-20 font-lexend text-4xl text-center">
        {" "}
        Browse some of our recent work{" "}
      </div>
      <div className=" flex gap-6 mt-20 mb-40">
        <Card
          variant="outlined"
          sx={{ bgcolor: "white", width: "fit-content", borderRadius: "10px" }}
        >
          <div className=" p-4 mt-4">
            <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
              branding
            </button>
            <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
              web design
            </button>
            <div className=" text-black mt-3 text-xl font-cabin">
              {" "}
              Aurora Traning Institute{" "}
            </div>
          </div>

          <img
            src="https://d14pjowmeoxkey.cloudfront.net/wp-content/uploads/Aurora-Training-Institute_Mockup-Device-850x850.jpg"
            alt=" Aurora"
            width={433.33}
          />
        </Card>

        <Card
          variant="outlined"
          sx={{ bgcolor: "white", width: "fit-content", borderRadius: "10px" }}
        >
          <div className=" p-4 mt-4">
            <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
              branding
            </button>
            <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
              web design
            </button>
            <div className=" text-black mt-3 text-xl font-cabin">
              {" "}
              Aurora Traning Institute{" "}
            </div>
          </div>

          <img
            src="https://d14pjowmeoxkey.cloudfront.net/wp-content/uploads/Aurora-Training-Institute_Mockup-Device-850x850.jpg"
            alt=" Aurora"
            width={433.33}
          />
        </Card>

        <Card
          variant="outlined"
          sx={{ bgcolor: "white", width: "fit-content", borderRadius: "10px" }}
        >
          <div className=" p-4 mt-4">
            <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
              branding
            </button>
            <button className=" uppercase bg-cyan-200 text-cyan-700 px-4 font-cabin text-sm rounded-full py-1">
              web design
            </button>
            <div className=" text-black mt-3 text-xl font-cabin">
              {" "}
              Aurora Traning Institute{" "}
            </div>
          </div>

          <img
            src="https://d14pjowmeoxkey.cloudfront.net/wp-content/uploads/Aurora-Training-Institute_Mockup-Device-850x850.jpg"
            alt=" Aurora"
            width={433.33}
          />
        </Card>
      </div>
      <button className=" group absolute shadow-md -bottom-2 -right-4 mr-32 bg-cyan-200 text-lg font-oswald rounded-full px-4 py-1 hover:bg-cyan-600 hover:text-white ">
        See More <ArrowForward className=" group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default Portfolio;
