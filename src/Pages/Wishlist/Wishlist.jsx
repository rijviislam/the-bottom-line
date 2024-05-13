import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useAuth from "../../Hooks/useAuth";

export default function Wishlist() {
  const { user, loader } = useAuth();
  const [myWishlistBlogs, setMyWishlistBlogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      if (user) {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/wishlist/${user.email}`,
          {
            withCredentials: true,
          }
        );
        console.log(data);
        setMyWishlistBlogs(data);
      } else {
        return alert("Not Data Found!");
      }
    };
    getData();
  }, [user]);

  const handleRemove = (_id) => {
    fetch(`${import.meta.env.VITE_API_URL}/wishlist/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Blog Deleted SuccessFully!!");
          const afterRemove = myWishlistBlogs.filter(
            (wishlist) => wishlist._id !== _id
          );
          setMyWishlistBlogs(afterRemove);
        }
      });
  };

  if (loader) {
    return <Skeleton count={15} />;
  }

  console.log(myWishlistBlogs);
  return (
    <>
      <h2 className="text-2xl">WishList Blogs {myWishlistBlogs.length}</h2>

      <div className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {myWishlistBlogs?.map((blog) => {
          <p key={blog._id}>{blog.category}</p>;
        })}
      </div>
    </>
  );
}
