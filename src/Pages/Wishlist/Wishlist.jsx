import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { Panel } from "rsuite";
import Swal from "sweetalert2";
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
          Swal.fire({
            title: "Blog remove from your SuccessFully!!",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
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
  return (
    <>
      <h2 className="text-3xl font-bold text-center">
        WishList Blogs {myWishlistBlogs.length}
      </h2>

      <div className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:my-8 lg:min-h-screen">
        {myWishlistBlogs?.map((blog) => (
          <div key={blog._id}>
            <Panel
              shaded
              bordered
              bodyFill
              style={{ display: "inline-block", width: 340, height: 500 }}
              className="shadow-2xl p-4 rounded-lg flex flex-col justify-between border border-silver"
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
                  to={`/blogdetails/${blog._id}`}
                  className="bg-orange-600 text-sm text-white font-medium flex items-center justify-center px-2 rounded-lg"
                  appearance="primary"
                >
                  Details
                </Link>
                <Button
                  onClick={() => handleRemove(blog._id)}
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
    </>
  );
}
