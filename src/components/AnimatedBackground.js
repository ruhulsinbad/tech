import React, { useState } from "react";
import { ReactComponent as BackgroundSVG } from "../svg/hosting.svg";

const AnimatedBackground = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="relative h-screen w-screen">
      <BackgroundSVG
        className={`absolute top-0 left-0 w-45 transition-transform duration-300 ${
          isAnimating ? "animate-move" : ""
        }`}
        onClick={handleClick}
      />
    </div>
  );
};

export default AnimatedBackground;
