import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Table from "../../Components/Table";
import useAuth from "../../Hooks/useAuth";

export default function MyBlogs() {
  const { user, loader } = useAuth();
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
  if (loader) {
    return <Skeleton count={5} />;
  }
  return (
    <div>
      <div>MyBlogs {myBlog.length}</div>
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
