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
import Blog from "./Blog";
import Hire from "./Hire";
import Footer from "./Footer";

const Circle = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" relative opacity-100 h-screen">
      <div className=" z-50 fixed right-0 grid place-items-center border-8 mb-1 mr-1 lg:mt-10 lg:mr-10 shadow-2xl bg-white border-white rounded-full rounded-bl-none opacity-70">
        {menu ? (
          <IconButton
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <CancelIcon style={{ fontSize: 32, color: "blue" }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => setMenu(!menu)}>
            <WidgetsIcon style={{ fontSize: 32, color: "blue" }} />
          </IconButton>
        )}
      </div>
      <div>
        <div className={menu ? "invisible absolute" : "absolute"}>
          <HeroSection />
          <Project />
          <Portfolio />
          <Service />
          <Brand />
          <Testimonial />
          <Faq />
          <Blog />
          <Hire />
          <Footer />
        </div>
        <div className={!menu ? "invisible absolute" : "  fixed w-full "}>
          <OverleyMenu />
        </div>
      </div>
    </div>
  );
};

export default Circle;
