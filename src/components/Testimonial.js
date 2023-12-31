import React from "react";
import { ReactComponent as Test } from "../svg/testimonial.svg";
import { Card } from "@mui/material";

const Testimonial = () => {
  return (
    <div className=" bg-sky-600 grid place-items-center py-20 lg:py-32">
      <div className=" px-2 lg:w-[50%] mx-auto text-xl lg:text-3xl text-white text-center font-raleway font-semibold ">
        {" "}
        "I have nothing but good words to say about Thrive. They've built,
        maintained and continue to improve our website over the last 5 years.
        It's fair to say the solution they created for us is a major factor in
        the success we have today. "
      </div>
      <Test className=" mt-5" />
      <Card className=" flex mt-10">
        <img
          className=" w-[45px] lg:w-[60px]"
          src="https://d14pjowmeoxkey.cloudfront.net/wp-content/uploads/julian.jpg"
          alt="pro"
        />
        <div className=" flex flex-col justify-center px-4">
          <h1 className=" font-lexend text-md lg:text-xl font-semibold">
            {" "}
            Ruhul Sinbad{" "}
          </h1>
          <p className=" uppercase font-cabin text-xs lg:text-md">
            {" "}
            Art Lovers Australia{" "}
          </p>
        </div>
      </Card>

      <div className=" mt-10 flex  gap-2 ">
        <p className=" h-4 w-4 bg-white rounded-full"></p>
        <p className=" h-4 w-4 bg-white rounded-full"></p>
        <p className=" h-4 w-4 bg-white rounded-full"></p>
      </div>
    </div>
  );
};

export default Testimonial;
