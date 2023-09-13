import React, { lazy, useState } from "react";

import { Button } from "@mui/material";
import OverleyMenu from "./OverleyMenu";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CancelIcon from "@mui/icons-material/Cancel";
import { Outlet } from "react-router-dom";

const MenuBar = lazy(() => import("./Menubar"));
const HeroSection = lazy(() => import("./HeroSection"));
const Project = lazy(() => import("./Project"));
const Portfolio = lazy(() => import("./Portfolio"));
const Service = lazy(() => import("./Service"));
const Brand = lazy(() => import("./Brand"));
const Testimonial = lazy(() => import("./Testimonial"));
const Faq = lazy(() => import("./Faq"));
const Blog = lazy(() => import("./Blog"));
const Hire = lazy(() => import("./Hire"));
const Footer = lazy(() => import("./Footer"));

const ReformWebsite = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" relative ">
      <div className=" absolute z-50 right-0 top-2">
        <Button title="menu" onClick={() => setMenu(!menu)}>
          {menu ? (
            <CancelIcon style={{ fontSize: 42, color: "white" }} />
          ) : (
            <WidgetsIcon style={{ fontSize: 42 }} />
          )}
        </Button>
      </div>
      <OverleyMenu className={`absolute top-0 z-30 ${!menu && "hidden"}`} />
      <div className={` absolute top-0 z-40 ${menu && "hidden"}`}>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ReformWebsite;
