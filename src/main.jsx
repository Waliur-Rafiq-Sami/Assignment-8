import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home/Home";
import ListedBook from "./components/ListedBook/ListedBook";
import ListedBooksSection from "./components/ListedBooksSection/ListedBooksSection";
import ReadBooks from "./components/ListedBooksSection/ReadBooks";
import WishlistBooks from "./components/ListedBooksSection/WishlistBooks";

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
        children: [
          {
            path: "/listed-books/read",
            loader: () => fetch("../../fackBooksInfo.json"),
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "/listed-books/wishlist",
            loader: () => fetch("../../fackBooksInfo.json"),
            element: (
              <>
                <WishlistBooks></WishlistBooks>
              </>
            ),
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
