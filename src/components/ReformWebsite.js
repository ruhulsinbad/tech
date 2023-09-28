import React, { lazy, useState } from "react";

import { Button } from "@mui/material";
import OverleyMenu from "./OverleyMenu";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CancelIcon from "@mui/icons-material/Cancel";
import { Outlet, useRoutes } from "react-router-dom";
import menus from "./route/menus";

const MenuBar = lazy(() => import("./Menubar"));
const Footer = lazy(() => import("./Footer"));

const ReformWebsite = () => {
  const [menu, setMenu] = useState(false);
  const element = useRoutes(menus);
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
      <div className={` absolute bg-white top-0 z-40 ${menu && "hidden"}`}>
        <MenuBar />

        {element}

        <Footer />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ReformWebsite;
