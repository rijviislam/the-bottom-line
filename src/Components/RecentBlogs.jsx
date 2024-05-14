import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, ButtonGroup } from "flowbite-react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
export default function RecentBlogs() {
  const { user } = useAuth();
  const [recentBlog, setRecentBlog] = useState([]);
  const email = user?.email;
  const {
    data: recentblog = [],
    isError,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["recentblog"],
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/allblogs`);
    setRecentBlog(data);
    return data;
  };

  const handleWishlist = async (id) => {
    const wishlist = recentBlog?.filter((blog) => blog._id === id);
    const removeId = wishlist.map((list) => {
      const { _id, ...rest } = list;
      return { ...rest, wishlistuseremail: user?.email };
    });
    fetch(`${import.meta.env.VITE_API_URL}/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(removeId[0]),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added on your Wishlist!",
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
        }
      });
  };

  if (isLoading) return <Skeleton count={15} />;
  if (isError || error) {
    Swal.fire({
      title: (isError, error),
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
  }
  return (
    <div className="px-10 bg-sky-50">
      <div className="text-center text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 via-blue-500 to-green-400 bg-clip-text font-extrabold text-3xl -500 py-6">
        Our Recent Blogs
      </div>
      <div
        className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
        key={recentblog._id}
      >
        {recentblog?.slice(0, 6).map((blog) => (
          <>
            <Card
              maxW="sm"
              className="rounded-2xl shadow-xl border border-silver"
            >
              <CardBody>
                <img
                  src={blog.image}
                  className="w-full h-[250px] rounded-t-2xl"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3" className="px-5 py-3">
                  <Heading size="md" className="font-semibold">
                    {blog.title}
                  </Heading>
                  <p>{blog.description}</p>
                  <p
                    className="badge-accent my-2 badge inline-flex font-semibold"
                    color="blue.600"
                    fontSize="2xl"
                  >
                    {blog.category}
                  </p>
                  <p className="text-md font-normal">
                    {blog.short_description}
                  </p>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup
                  className="px-5 flex justify-between w-full pb-3"
                  spacing="2"
                >
                  <Link
                    to={`/blogdetails/${blog._id}`}
                    className="bg-orange-600 text-sm text-white font-medium flex items-center justify-center px-2 rounded-lg"
                    appearance="primary"
                  >
                    Details
                  </Link>
                  <Button
                    onClick={() => handleWishlist(blog._id)}
                    variant="ghost"
                    className="text-black bg-cyan-500"
                  >
                    Wishlist
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
