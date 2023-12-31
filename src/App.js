// import Circle from "./components/Circle";
import AnimatedCursor from "react-animated-cursor";
import ReformWebsite from "./components/ReformWebsite";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Blog from "./components/Blog";
import CreateAProject from "./components/CreateAProject";
import Contact from "./components/company/Contact";
import Example from "./components/company/Example";
import menus from "./components/route/menus";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ReformWebsite />,
//   },
//   { path: "/pro", element: <CreateAProject /> },
//   { path: "/blog", element: <Blog /> },
//   { path: "contact", element: <Contact /> },
//   { path: "portfolio", element: <Example /> },
// ]);

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedCursor
          innerSize={10}
          color="255,0,127"
          outerSize={35}
          innerScale={1}
        />
        <ReformWebsite />
        {/* <RouterProvider router={menus} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
