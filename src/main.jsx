import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home/Home";
import ListedBook from "./components/ListedBook/ListedBook";
import ListedBooksSection from "./components/ListedBooksSection/ListedBooksSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:id",
        loader: () => fetch("../fackBooksInfo.json"),
        element: <ListedBook></ListedBook>,
      },
      {
        path: "/listed-books",
        element: <ListedBooksSection></ListedBooksSection>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
