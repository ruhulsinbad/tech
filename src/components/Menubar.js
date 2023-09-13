import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowMenuBar(true);
      } else {
        setShowMenuBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-300 shadow-lg ${
        showMenuBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Menu items */}
      <ul className="flex font-ubuntu text-lg justify-center items-center bg-white text-gray-900 py-6">
        <li className="mx-4">Portfolio</li>
        <li className="mx-4">Career</li>
        <li className="mx-4">
          {" "}
          <Link to={`contact`}> Contact</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
