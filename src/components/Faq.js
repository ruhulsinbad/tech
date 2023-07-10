import { Card } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Faq = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);
  const [display6, setDisplay6] = useState(false);
  return (
    <div className=" p-2 lg:p-32 flex flex-col justify-center items-center bg-rose-50">
      <p className=" uppercase text-md  font-lexend text-green-900">
        More Info
      </p>
      <p className=" font-opensans font-semibold text-3xl"> Web Design FAQs</p>
      <div className=" grid grid-cols-1 gap-6  lg:w-[60%] mt-10 mx-auto">
        <Card onClick={(e) => setDisplay1(!display1)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display1 ? "rotate-45 text-sky-900" : " text-sky-900"}
            />
          </div>

          <div
            className={
              display1
                ? "inherit border-l-4 mt-4 border-cyan-900 pl-6 font-play"
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
        <Card onClick={(e) => setDisplay2(!display2)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?
            </h1>
            <AddIcon
              className={display2 ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display2
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
        <Card onClick={(e) => setDisplay3(!display3)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display3 ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display3
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
        <Card onClick={(e) => setDisplay4(!display4)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display4 ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display4
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
        <Card onClick={(e) => setDisplay5(!display5)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display5 ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display5
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
        <Card onClick={(e) => setDisplay6(!display6)} className=" py-4 px-8">
          <div className=" flex justify-between items-center">
            {" "}
            <h1 className="text-2xl font-lexend">
              {" "}
              Do you build websites with accessibility in mind?{" "}
            </h1>
            <AddIcon
              className={display6 ? "rotate-45 text-sky-700" : " text-sky-700"}
            />
          </div>

          <div
            className={
              display6
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
