import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About"
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        Home: true,
        element: <Home />,
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "About",
        element: <About/>
      },
    ],
  },
]);
