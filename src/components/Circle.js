import React, { lazy, useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import MenuBar from "./Menubar";

const OverleyMenu = lazy(() => import("./OverleyMenu"));
const HeroSection = lazy(() => import("./HeroSection"));
const Project = lazy(() => import("./Project"));
const Service = lazy(() => import("./Service"));
const Brand = lazy(() => import("./Brand"));
const Portfolio = lazy(() => import("./Portfolio"));
const Testimonial = lazy(() => import("./Testimonial"));
const Faq = lazy(() => import("./Faq"));
const Blog = lazy(() => import("./Blog"));
const Hire = lazy(() => import("./Hire"));
const Footer = lazy(() => import("./Footer"));

const Circle = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" relative opacity-100 h-screen">
      <div className=" z-50 fixed right-0 grid place-items-center border-8 mb-1 mr-1 lg:mt-10 lg:mr-10 shadow-2xl bg-white border-white rounded-full rounded-bl-none opacity-70">
        {menu ? (
          <IconButton
            title="true-menu"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <CancelIcon style={{ fontSize: 24, color: "blue" }} />
          </IconButton>
        ) : (
          <IconButton title="false-menu" onClick={() => setMenu(!menu)}>
            <WidgetsIcon style={{ fontSize: 24, color: "blue" }} />
          </IconButton>
        )}
      </div>
      <div>
        <div className={menu ? "invisible absolute" : "absolute"}>
          <MenuBar />
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
