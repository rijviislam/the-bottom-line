import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, ButtonGroup } from "flowbite-react";
import { useEffect, useState } from "react";

export default function AllBlogs() {
  const [myWishlist, setMywishlist] = useState({});
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
  }, []);
  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/allblogs`);
    return data;
  };

  const handleWishlist = async (id) => {
    const wishlist = allblogs?.filter((blog) => blog._id === id);
    wishlist.map((list) => setMywishlist(list));

    fetch(`${import.meta.env.VITE_API_URL}/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myWishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("Data was Added SuccessFully!!");
        }
      });
  };
  console.log(myWishlist);
  if (isLoading) return <Spinner size="xl" />;
  if (isError || error) {
    console.log(isError, error);
  }
  if (allblogs.length === 0)
    return (
      <p className="w-full text-center text-3xl font-bold text-red-600 lg:mt-10">
        No Blog Avaiable right now!
      </p>
    );
  return (
    <div className="px-10">
      <div>All Blogs {allblogs.length}</div>
      <div className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {allblogs?.map((blog) => (
          <>
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
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    className="text-black border border-red-600"
                  >
                    Details
                  </Button>
                  <Button
                    onClick={() => handleWishlist(blog._id)}
                    variant="ghost"
                    colorScheme="blue"
                    className="text-black border border-red-600"
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
