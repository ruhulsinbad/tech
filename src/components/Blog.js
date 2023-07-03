import { Card } from "@mui/material";
import React from "react";
import Gmb from "../photos/blog/gmb.jpg";
import Fbad from "../photos/blog/fbad.png";
import Woo from "../photos/blog/woo.jpg";

const Blog = () => {
  return (
    <div className=" px-2 lg:px-32 py-24 flex flex-col justify-center items-center bg-gray-300">
      <p className=" uppercase text-md  font-lexend text-blue-500">
        Have a read
      </p>
      <p className=" font-opensans font-semibold text-3xl mt-6">
        Our latest blog articles
      </p>
      <div className=" grid col-span-1 lg:grid-cols-3 gap-10 mt-12">
        <Card>
          <img src={Gmb} alt="gmb" />
          <div className=" p-4 flex flex-col gap-4">
            <h1 className=" font-lexend text-2xl ">
              Connecting Woocommerce to Your Google Business Listing
            </h1>
            <p className=" font-sarabun">
              {" "}
              Increase your online visiblity and reach more customers
            </p>
            <button className=" uppercase underline font-semibold font-lexend">
              know more
            </button>
          </div>
        </Card>
        <Card>
          <img src={Fbad} alt="gmb" />
          <div className=" p-4 flex flex-col gap-4">
            <h1 className=" font-lexend text-2xl ">
              How to advertise on Facebook for free in 2023
            </h1>
            <p className=" font-sarabun">
              8 tips to help you advertise on Facebook without spending a cent
              in facebook
            </p>
            <button className=" uppercase underline font-semibold font-lexend">
              know more
            </button>
          </div>
        </Card>
        <Card>
          <img src={Woo} alt="gmb" />
          <div className=" p-4 flex flex-col gap-4">
            <h1 className=" font-lexend text-2xl ">
              Techsinu - Platinum expert Shopify Experts
            </h1>
            <p className=" font-sarabun">
              We don't like to brag but some things are worth talking about
            </p>
            <button className=" uppercase underline font-semibold font-lexend">
              know more
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
