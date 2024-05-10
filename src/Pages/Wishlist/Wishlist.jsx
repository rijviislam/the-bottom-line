import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

export default function Wishlist() {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  const [myWishlistBlogs, setMyWishlistBlogs] = useState([]);
  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`
    );
    setMyWishlistBlogs(data);
  };
  console.log(myWishlistBlogs);

  return (
    <>
      <h2 className="text-2xl">WishList Blogs {myWishlistBlogs.length}</h2>

      <div className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {myWishlistBlogs?.map((blog) => (
          <div key={blog._id}>
            <div>{blog.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}
