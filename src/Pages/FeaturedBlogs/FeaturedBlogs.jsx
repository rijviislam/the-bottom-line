import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useAuth from "../../Hooks/useAuth";
export default function FeaturedBlogs() {
  const { user, loader } = useAuth();
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
  if (loader) {
    return <Skeleton count={15} />;
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl w-full text-center font-bold">
        Our Featured Blogs
      </h2>
      <div className="border-2 my-5 border-silver w-4/5 shadow-xl rounded-xl">
        <table className=" w-full">
          <thead className="">
            <tr className="">
              {columns.map((column, idx) => (
                <th className=" py-3" key={idx}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border border-purple-600">
            {data.map((blog, idx) => (
              <tr key={idx} className="">
                <td className="border text-center font-medium border-silver">
                  {idx + 1}
                </td>
                <td className="border text-center p-3 font-semibold border-silver">
                  {blog.title}
                </td>
                <td className="border text-center p-3 font-semibold border-silver">
                  {blog.email}
                </td>
                <td className="border text-center p-3 font-semibold border-silver">
                  <img src={blog.photoURL} alt="Profile Pic" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
