import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { Button, ButtonGroup } from "flowbite-react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function Wishlist() {
  // const { user } = useContext(AuthContext);
  const { user, loader } = useAuth();
  const [myWishlistBlogs, setMyWishlistBlogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`
      );
      console.log(data);
      setMyWishlistBlogs(data);
    };
    getData();
  }, [user]);
  console.log(myWishlistBlogs);
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
    return <Skeleton count={5} />;
  }

  return (
    <>
      <h2 className="text-2xl">WishList Blogs {myWishlistBlogs.length}</h2>

      <div className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {myWishlistBlogs?.map((blog) => (
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
                    onClick={() => handleRemove(blog._id)}
                    variant="ghost"
                    className="text-black border border-red-600"
                  >
                    Remove
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
