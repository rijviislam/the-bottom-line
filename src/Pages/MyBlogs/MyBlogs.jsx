import axios from "axios";
import { useEffect, useState } from "react";
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

  return <div>MyBlogs{myBlog.length}</div>;
}
