import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className=" py-20 px-2 lg:px-32 lg:w-[60%] mx-auto flex flex-col justify-center items-center gap-5">
      <div className=" font-lexend text-center">
        71 West Burleigh Road, Burleigh Heads, Gold Coast, Queensland 4220
      </div>
      <div className=" font-lexend text-center">
        Made with on the Gold Coast. We acknowledge and pay respect to the
        traditional custodians of the land on which we live and work. We pay
        respect to their Elders, both past and present, and recognise their deep
        connection to this land.
      </div>
      <div className=" flex gap-2 text-white px-10 py-4 rounded-full bg-sky-600">
        <Instagram className=" hover:scale-125" />{" "}
        <FacebookOutlined className=" hover:scale-125" />{" "}
        <Twitter className=" hover:scale-125" />
        <LinkedIn className=" hover:scale-125" />
      </div>
    </div>
  );
};

export default Footer;
