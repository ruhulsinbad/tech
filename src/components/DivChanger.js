import React, { useState, useEffect } from "react";

const DivChanger = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDiv((prevActiveDiv) =>
        prevActiveDiv === 3 ? 1 : prevActiveDiv + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      <div
        className=" text-sky-600 "
        style={{ display: activeDiv === 1 ? "block" : "none" }}
      >
        Develop
      </div>
      <div
        className=" text-rose-600 "
        style={{ display: activeDiv === 2 ? "block" : "none" }}
      >
        Design
      </div>
      <div
        className=" text-teal-600"
        style={{ display: activeDiv === 3 ? "block" : "none" }}
      >
        {" "}
        Build
      </div>
    </div>
  );
};

export default DivChanger;
