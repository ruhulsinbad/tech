import React from "react";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const OverleyMenu = () => {
  return (
    <div className="  bg-sky-400 h-screen text-white px-20 py-10">
      <h1 className=" font-oswald text-3xl "> TECHSINU </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-24">
        <div className=" col-span-1 uppercase">
          <h1 className=" font-raleway text-lg">Sitemap </h1>
          <ul className=" mt-24 font-lexend text-5xl font-bold flex flex-col gap-8">
            <li> At Techsinu </li>
            <li> What we do </li>
            <li> We are </li>
            <li> Portfolio</li>
            <li> Contact </li>
          </ul>
        </div>
        <div className=" col-span-1 uppercase">
          <div>
            <h1 className=" font-raleway text-lg">Learn </h1>
            <ul className=" mt-24 font-lexend text-5xl font-bold flex flex-col gap-8">
              <li> Blog </li>
              <li> The Lab </li>
            </ul>
          </div>
        </div>
        <div className=" col-span-1">
          <h1 className="font-raleway text-lg uppercase">Contact </h1>
          <div className=" flex flex-col gap-2 mt-12 font-lexend text-md">
            <a href="tel:+880172988667"> 0172988667 </a>
            <a href="Mailto:ruhulsinbad@gmail.com"> ruhulsinbad@gmail.com </a>
          </div>
          <p className=" mt-8">
            71 West Burleigh Road, <br /> Burleigh Heads, Gold Coast, <br />{" "}
            Queensland 4220
          </p>

          <h1 className=" mt-12 font-raleway text-lg uppercase"> Follow Us </h1>
          <div className=" mt-8 flex gap-2 w-fit bg-white px-10 py-4 rounded-full text-sky-600">
            <Instagram className=" hover:scale-125" />{" "}
            <FacebookOutlined className=" hover:scale-125" />{" "}
            <Twitter className=" hover:scale-125" />
            <LinkedIn className=" hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverleyMenu;
