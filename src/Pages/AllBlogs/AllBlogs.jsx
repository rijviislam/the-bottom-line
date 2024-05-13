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
import useAuth from "../../Hooks/useAuth";

export default function AllBlogs() {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const {
    data: allblogs = [],
    isError,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allblogs"],
  });

  useEffect(() => {
    getData();
  }, [filter, search]);
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/allblogs`);
    setBlogs(data);
    return data;
  };
  // const filterCategory = (categorys) => {
  //   const blogs = allblogs.map((blog) => {
  //     return blog.category === categorys;
  //   });
  //   setFilter(blogs);
  // };

  const handleWishlist = async (id) => {
    const wishlist = allblogs?.filter((blog) => blog._id === id);
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
    alert(isError, error);
  }
  if (allblogs.length === 0)
    return (
      <p className="w-full text-center text-3xl font-bold text-red-600 lg:mt-10">
        No Blog Avaiable right now!
      </p>
    );

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const text = e.target.search.value;
  //   setSearch(text);
  // };
  return (
    <div className="px-10 flex flex-col items-center">
      <div>All Blogs {blogs.length}</div>
      <div className="flex justify-between  w-full my-5">
        {" "}
        <div>
          <select
            //  onChange={(e) => setFilter(e.target.value)}

            // value={filter}
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="Travel">Travel</option>
            <option value="Health and Fitness">Health and Fitness</option>
            <option value="Finance">Finance</option>
            <option value="Technology">Technology</option>
            <option value="Photography">Photography</option>
            <option value="Education and Learning">
              Education and Learning
            </option>
          </select>
        </div>
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {allblogs?.map((blog) => (
          <div key={blog._id}>
            <Card maxW="sm" className="shadow-xl">
              <CardBody>
                <img
                  src={blog.image}
                  className="object-cover w-full h-[250px] rounded-t-2xl"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3" className="px-5 py-3">
                  <Heading size="md" className="text-xl font-semibold">
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
                  <p>{blog.shortdescription}</p>
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
                    variant="solid"
                    className="text-black border border-red-600"
                  >
                    Details
                  </Link>
                  <Button
                    onClick={() => handleWishlist(blog._id)}
                    variant="ghost"
                    className="text-black border border-red-600"
                  >
                    Wishlist
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
