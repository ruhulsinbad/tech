import Example from "../company/Example";
import Contact from "../company/Contact";
import Home from "../Home";
import CreateAProject from "../CreateAProject";

const menus = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/portfolio", element: <Example /> },
  { path: "/pro", element: <CreateAProject /> },
];

export default menus;
