import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { Panel } from "rsuite";
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
  // console.log(myBlog);
  if (loader) {
    return <Skeleton count={5} />;
  }
  if (myBlog.length === 0) {
    return (
      <div className="flex flex-col items-center lg:min-h-screen">
        <p className="text-4xl text-center py-3 text-red-500 font-semibold">
          You Don't have any Blogs{" "}
        </p>
        <Link to="/addblog" className="btn btn-active bg-emerald-500">
          Add Blog
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="text-3xl font-bold text-center">
        MyBlogs {myBlog.length}
      </div>
      <div className="mt-7 grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:my-8 lg:min-h-screen">
        {myBlog?.map((blog) => (
          <div key={blog._id}>
            <Panel
              shaded
              bordered
              bodyFill
              style={{ display: "inline-block", width: 340, height: 500 }}
              className="shadow-2xl p-4 rounded-lg flex flex-col justify-between border border-silver object-cover"
            >
              <div className="h-[410px]">
                <img src={blog.image} height="240" />
                <Panel header={blog.title} className=" mt-3">
                  <p>
                    <small>{blog.shortdescription}</small>
                  </p>
                </Panel>
              </div>
              <div className="mt-5 flex justify-between">
                <Link
                  to={`/updateblogpage/${blog._id}`}
                  className="bg-orange-600 text-sm text-white font-medium flex items-center justify-center px-2 rounded-lg"
                  appearance="primary"
                >
                  Update
                </Link>
                <Button
                  // onClick={() => handleRemove(blog._id)}
                  className="bg-red-500 text-white font-medium"
                  appearance="primary"
                >
                  Remove
                </Button>
              </div>
            </Panel>
          </div>
        ))}
      </div>
    </div>
  );
}
