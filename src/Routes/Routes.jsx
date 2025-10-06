import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../LayOuts/MainLayout";

import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
