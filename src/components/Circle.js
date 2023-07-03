import React, { useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import OverleyMenu from "./OverleyMenu";
import HeroSection from "./HeroSection";
import Project from "./Project";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Brand from "./Brand";
import Testimonial from "./Testimonial";
import Faq from "./Faq";

const Circle = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" relative opacity-70">
      <div className=" z-50 absolute right-0 grid place-items-center  h-48 w-48 border-8 shadow-2xl bg-white border-blue-500 rounded-full rounded-tr-none opacity-70">
        {menu ? (
          <IconButton
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <CancelIcon style={{ fontSize: 48, color: "blue" }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => setMenu(!menu)}>
            <WidgetsIcon style={{ fontSize: 48, color: "blue" }} />
          </IconButton>
        )}
      </div>
      <div>
        <div className={menu ? " absolute  invisible" : "absolute"}>
          <HeroSection />
          <Project />
          <Portfolio />
          <Service />
          <Brand />
          <Testimonial />
          <Faq />
        </div>
        <div className={!menu ? " absolute  invisible" : "absolute"}>
          {/* <OverleyMenu /> */}
        </div>
      </div>
    </div>
  );
};

export default Circle;
