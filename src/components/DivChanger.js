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
    <div className=" underline decoration-[#03001C]">
      <div style={{ display: activeDiv === 1 ? "block" : "none" }}>Develop</div>
      <div style={{ display: activeDiv === 2 ? "block" : "none" }}>Design</div>
      <div style={{ display: activeDiv === 3 ? "block" : "none" }}> Build</div>
    </div>
  );
};

export default DivChanger;
