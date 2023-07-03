import React, { useEffect, useState } from "react";

const DivCircle = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDiv((prevActiveDiv) =>
        prevActiveDiv === 2 ? 1 : prevActiveDiv + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=" text-lg font-lexend flex justify-center items-center ">
      <div
        className=" text-cyan-600"
        style={{ display: activeDiv === 1 ? "block" : "none" }}
      >
        FUN
      </div>
      <div
        className=" text-rose-500"
        style={{ display: activeDiv === 2 ? "block" : "none" }}
      >
        No BullShit
      </div>
    </div>
  );
};

export default DivCircle;
