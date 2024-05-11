import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../Components/Table";
import useAuth from "../../Hooks/useAuth";

export default function MyBlogs() {
  const { user } = useAuth();
  const [myBlog, setMyBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const email = user?.email;
  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/allblogs`);
    setBlogs(data);
  };
  useEffect(() => {
    const filteredMyBlogs = blogs.filter((blog) => blog.email === email);
    setMyBlog(filteredMyBlogs);
  }, [blogs, email]);
  console.log(myBlog);
  //   const data = useMemo(() => myBlog, []);
  //   const columns = [
  //     {
  //       header: "category",
  //       accessorykey: "_id",
  //     },
  //     {
  //       header: "category",
  //       accessorykey: "_id",
  //     },
  //   ];
  //   const table = useReactTable({ data, columns });
  return (
    <div>
      <div>MyBlogs {myBlog.length}</div>
      {/* <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup._id}>
              {headerGroup.headers.map((header) => (
                <th key={header._id}>
                  {flexRender(
                    header.colum.columnsDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
          </tr>
        </tbody>
      </table> */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Email</th>
                <th>Category</th>
                <th>Detsils</th>
              </tr>
            </thead>
            <tbody>
              {myBlog?.map((blog, idx) => (
                <Table key={idx} blog={blog} idx={idx + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
