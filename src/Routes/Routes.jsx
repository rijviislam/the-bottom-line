import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyBlogs from "../Pages/MyBlogs/MyBlogs";
import Register from "../Pages/Register/Register";
import Wishlist from "../Pages/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addblog",
        element: <AddBlog />,
      },
      {
        path: "/allblogs",
        element: <AllBlogs />,
      },
      {
        path: "/featuredblogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myblogs",
        element: <MyBlogs />,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);
