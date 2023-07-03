import React from "react";
import Logo1 from "../logos/logo1.png";
import Logo2 from "../logos/logo2.png";
import Logo3 from "../logos/logo3.png";
import Logo4 from "../logos/logo4.png";
import Logo5 from "../logos/logo5.png";
import Logo6 from "../logos/logo6.png";
import Logo7 from "../logos/logo7.png";
import Logo8 from "../logos/logo8.png";
import Logo9 from "../logos/logo9.png";
import Logo10 from "../logos/logo10.png";

const Brand = () => {
  return (
    <div>
      <h1 className=" mt-20 font-lexend text-4xl text-center">
        We have some serious brand experience
      </h1>
      <div className=" grid grid-cols-10 px-32 py-20 gap-8">
        <div className=" flex flex-col justify-between items-center col-span-2 gap-16">
          <img src={Logo1} alt="logo1" width={180} />
          <img src={Logo2} alt="logo2" width={158} />
        </div>
        <div className=" flex flex-col justify-between items-center gap-16 col-span-2">
          <img src={Logo3} alt="logo1 " width={126} />
          <img src={Logo7} alt="logo2" width={180} />
        </div>
        <div className=" flex flex-col justify-between items-center gap-16 col-span-2">
          <img src={Logo5} alt="logo1" width={125} />
          <img src={Logo6} alt="logo2" width={180} />
        </div>
        <div className=" flex flex-col justify-between items-center gap-16 col-span-2">
          <img className=" center" src={Logo4} alt="logo1" width={95} />
          <img src={Logo8} alt="logo2" width={180} />
        </div>
        <div className=" flex flex-col justify-between items-center gap-16 col-span-2">
          <img src={Logo9} alt="logo1" width={74} />
          <img src={Logo10} alt="logo2" width={180} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
