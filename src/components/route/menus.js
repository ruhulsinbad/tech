import Example from "../company/Example";
import Contact from "../company/Contact";
import Home from "../Home";

const menus = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/portfolio", element: <Example /> },
];

export default menus;
