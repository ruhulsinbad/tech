import React from "react";
import HeroSection from "./HeroSection";
import Project from "./Project";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Brand from "./Brand";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Blog from "./Blog";
import Hire from "./Hire";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Project />
      <Portfolio />
      <Service />
      <Brand />
      <Testimonial />
      <Faq />
      <Blog />
      <Hire />
    </div>
  );
};

export default Home;
