import { ButtonBase, Card } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Faq = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className=" p-32 flex flex-col justify-center items-center bg-rose-50">
      <p className=" uppercase text-md  font-lexend text-green-500">
        More Info
      </p>
      <p className=" font-opensans font-semibold text-3xl"> Web Design FAQs</p>
      <div className=" grid grid-cols-1 gap-6  w-[60%] mt-10 mx-auto">
        <Card onClick={(e) => setDisplay(!display)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display
                ? "inherit border-l-4 mt-4 border-cyan-600 pl-6 font-play"
                : "hidden"
            }
          >
            Making websites accessible can help businesses and organisations
            reach a wider audience and enhance the user experience for all
            users, not just those with disabilities. When designing a new
            website, we prioritise ensuring that the website has a clear and
            intuitive navigation that is easy to use and consistent page
            structure. Additionally, we make sure that text is easy to read with
            sufficient contrast. We offer the option to align with varying
            levels of Web Content Accessibility Guidelines (WCAG) to ensure that
            websites are designed with accessibility in mind. View accessible
            websites in our portfolio.
          </div>
        </Card>
        <Card onClick={(e) => setDisplay(!display)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display
                ? "inherit border-l-4 mt-4 border-cyan-600 pl-6 font-play"
                : "hidden"
            }
          >
            Making websites accessible can help businesses and organisations
            reach a wider audience and enhance the user experience for all
            users, not just those with disabilities. When designing a new
            website, we prioritise ensuring that the website has a clear and
            intuitive navigation that is easy to use and consistent page
            structure. Additionally, we make sure that text is easy to read with
            sufficient contrast. We offer the option to align with varying
            levels of Web Content Accessibility Guidelines (WCAG) to ensure that
            websites are designed with accessibility in mind. View accessible
            websites in our portfolio.
          </div>
        </Card>
        <Card onClick={(e) => setDisplay(!display)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display
                ? "inherit border-l-4 mt-4 border-cyan-600 pl-6 font-play"
                : "hidden"
            }
          >
            Making websites accessible can help businesses and organisations
            reach a wider audience and enhance the user experience for all
            users, not just those with disabilities. When designing a new
            website, we prioritise ensuring that the website has a clear and
            intuitive navigation that is easy to use and consistent page
            structure. Additionally, we make sure that text is easy to read with
            sufficient contrast. We offer the option to align with varying
            levels of Web Content Accessibility Guidelines (WCAG) to ensure that
            websites are designed with accessibility in mind. View accessible
            websites in our portfolio.
          </div>
        </Card>
        <Card onClick={(e) => setDisplay(!display)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display
                ? "inherit border-l-4 mt-4 border-cyan-600 pl-6 font-play"
                : "hidden"
            }
          >
            Making websites accessible can help businesses and organisations
            reach a wider audience and enhance the user experience for all
            users, not just those with disabilities. When designing a new
            website, we prioritise ensuring that the website has a clear and
            intuitive navigation that is easy to use and consistent page
            structure. Additionally, we make sure that text is easy to read with
            sufficient contrast. We offer the option to align with varying
            levels of Web Content Accessibility Guidelines (WCAG) to ensure that
            websites are designed with accessibility in mind. View accessible
            websites in our portfolio.
          </div>
        </Card>
        <Card onClick={(e) => setDisplay(!display)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display
                ? "inherit border-l-4 mt-4 border-cyan-600 pl-6 font-play"
                : "hidden"
            }
          >
            Making websites accessible can help businesses and organisations
            reach a wider audience and enhance the user experience for all
            users, not just those with disabilities. When designing a new
            website, we prioritise ensuring that the website has a clear and
            intuitive navigation that is easy to use and consistent page
            structure. Additionally, we make sure that text is easy to read with
            sufficient contrast. We offer the option to align with varying
            levels of Web Content Accessibility Guidelines (WCAG) to ensure that
            websites are designed with accessibility in mind. View accessible
            websites in our portfolio.
          </div>
        </Card>
        <Card onClick={(e) => setDisplay(!display)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display
                ? "inherit border-l-4 mt-4 border-cyan-600 pl-6 font-play"
                : "hidden"
            }
          >
            Making websites accessible can help businesses and organisations
            reach a wider audience and enhance the user experience for all
            users, not just those with disabilities. When designing a new
            website, we prioritise ensuring that the website has a clear and
            intuitive navigation that is easy to use and consistent page
            structure. Additionally, we make sure that text is easy to read with
            sufficient contrast. We offer the option to align with varying
            levels of Web Content Accessibility Guidelines (WCAG) to ensure that
            websites are designed with accessibility in mind. View accessible
            websites in our portfolio.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Faq;
