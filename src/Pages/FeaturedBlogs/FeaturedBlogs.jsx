import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useAuth from "../../Hooks/useAuth";
export default function FeaturedBlogs() {
  const { loader } = useAuth();
  const [featureBlog, setFeatureBlog] = useState([]);
  const data = useMemo(() => featureBlog, [featureBlog]);

  const columns = [
    {
      header: "Serial Number",
      accessorKey: "serialNumber",
    },
    {
      header: "Blog Title",
      accessorKey: "title",
    },
    {
      header: "Blog Owner",
      accessorKey: "owner",
    },
    {
      header: "Blog Owner Profile Picture",
      accessorKey: "ownerProfilePic",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/featureblog`
      );
      setFeatureBlog(data);
    };
    getData();
  }, []);
  // CALL THIS FUNCTION IN ONCLICK
  const getTopBlogs = () => {
    return featureBlog
      .sort((a, b) => b.shortdescription.length - a.shortdescription.length)
      .slice(0, 10);
  };
  const tenBlog = getTopBlogs();
  console.log(featureBlog);
  if (loader) {
    return <Skeleton count={15} />;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl w-full text-center font-bold">
        Our Featured Blogs
      </h2>
      <div className="container mx-auto flex items-center justify-center my-5">
        <table>
          <thead className="">
            <tr className="">
              {columns.map((column, idx) => (
                <th
                  key={idx}
                  className="cursor-pointer py-3 border px-4 text-left"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((blog, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2 text-center">{idx + 1}</td>
                <td className="border px-4 py-2 text-center">{blog.title}</td>
                <td
                  className={`border px-4 py-2 text-center flex items-center justify-center ${
                    screen.sm ? "360px" : "hidden-sm"
                  }`}
                >
                  {blog.email}
                </td>
                <td className="border px-4 py-2 text-center">
                  <img
                    src={blog.userImage}
                    className="w-[40px] h-[40px] rounded-full"
                    alt="Profile Pic"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
