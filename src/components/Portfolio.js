// import { ArrowForward } from "@mui/icons-material";
import { Card } from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <div className=" lg:px-32 mt-12 ">
      <div className="  mt-20 font-lexend text-4xl text-center">
        Browse some of our recent work
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 mb-40">
        <Card
          className=" mx-auto col-span-1"
          variant="outlined"
          sx={{ bgcolor: "white", width: "fit-content", borderRadius: "10px" }}
        >
          <div className="  p-4 mt-4">
            <div className=" flex gap-4">
              <button
                name="branding"
                className=" uppercase border-2 border-cyan-900 bg-white text-cyan-900 px-4 font-cabin text-xs rounded-full py-1"
              >
                branding
              </button>
              <button
                name="design"
                className=" uppercase border-2  border-cyan-900  bg-white text-cyan-900 px-4 font-cabin text-xs rounded-full py-1"
              >
                web design
              </button>
            </div>

            <div className=" text-black mt-3 text-xl font-cabin">
              Aurora Traning Institute
            </div>
          </div>

          <img
            src="https://d14pjowmeoxkey.cloudfront.net/wp-content/uploads/Aurora-Training-Institute_Mockup-Device-850x850.jpg"
            alt=" Aurora"
            width={433.33}
          />
        </Card>

        <Card
          className=" col-span-1  mx-auto"
          variant="outlined"
          sx={{ bgcolor: "white", width: "fit-content", borderRadius: "10px" }}
        >
          <div className=" p-4 mt-4">
            <div className=" flex gap-4">
              <button
                name="branding"
                className=" uppercase border-2 border-cyan-900 bg-white text-cyan-900 px-4 font-cabin text-xs rounded-full py-1"
              >
                branding
              </button>
              <button
                name="design"
                className=" uppercase border-2  border-cyan-900  bg-white text-cyan-900 px-4 font-cabin text-xs rounded-full py-1"
              >
                web design
              </button>
            </div>
            <div className=" text-black mt-3 text-xl font-cabin">
              Aurora Traning Institute
            </div>
          </div>

          <img
            src="https://d14pjowmeoxkey.cloudfront.net/wp-content/uploads/Aurora-Training-Institute_Mockup-Device-850x850.jpg"
            alt=" Aurora"
            width={433.33}
          />
        </Card>

        <Card
          className=" col-span-1 mx-auto"
          variant="outlined"
          sx={{ bgcolor: "white", width: "fit-content", borderRadius: "10px" }}
        >
          <div className=" p-4 mt-4">
            <div className=" flex gap-4">
              <button
                name="branding"
                className=" uppercase border-2 border-cyan-900 bg-white text-cyan-900 px-4 font-cabin text-xs rounded-full py-1"
              >
                branding
              </button>
              <button
                name="design"
                className=" uppercase border-2  border-cyan-900  bg-white text-cyan-900 px-4 font-cabin text-xs rounded-full py-1"
              >
                web design
              </button>
            </div>
            <div className=" text-black mt-3 text-xl font-cabin">
              Aurora Traning Institute
            </div>
          </div>

          <img
            src="https://d14pjowmeoxkey.cloudfront.net/wp-content/uploads/Aurora-Training-Institute_Mockup-Device-850x850.jpg"
            alt=" Aurora"
            width={433.33}
          />
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
