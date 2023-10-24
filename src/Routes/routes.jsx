import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/OurShop/Shop/Shop";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Contact from "../Pages/Contact/Contact/Contact";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/our-menu",
            element: <Menu></Menu>
        },
        {
            path: "/our-shop",
            element: <Shop></Shop>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        
      ]
    },
  ]);