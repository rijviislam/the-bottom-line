import axios from "axios";
import { useEffect, useState } from "react";

export default function FeaturedBlogs() {
  // Each table of row will include Serial Number, Blog Title, Blog Owner, and Blog owner
  // Profile Picture
  const [featureBlog, setFeatureBlog] = useState([]);
  const [topBlogs, setTopBlogs] = useState();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/featureblog`
      );
      setFeatureBlog(data);
    };
    getData();
  }, []);
  const getTopBlogs = () => {
    return featureBlog
      .sort((a, b) => b.shortdescription.length - a.shortdescription.length)
      .slice(0, 10);
  };
  const tenBlog = getTopBlogs();
  console.log(tenBlog);
  return (
    <div>
      <h2 className="text-3xl">FeaturedBlogs: {tenBlog.length}</h2>
    </div>
  );
}
