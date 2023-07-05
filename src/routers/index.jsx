import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages";
import About from "../pages/about";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import { posts, postById } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blog />,
        loader: posts,
      },
      {
        path: `/blog/:id`,
        element: <Post />,
        loader: postById,
      },
    ],
  },
]);
