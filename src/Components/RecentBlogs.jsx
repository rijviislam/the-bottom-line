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
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
export default function RecentBlogs() {
  // const [recentBlog, setRecentBlog] = useState([]);

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
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/recentblog`);
    // setRecentBlog(data);
    return data;
  };

  if (isLoading) return <Skeleton count={15} />;
  if (isError || error) {
    console.log(isError, error);
  }
  return (
    <div className="px-10 bg-sky-50">
      <div className="font-semibold text-center text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 via-blue-500 to-green-400 bg-clip-text  text-4xl -500 py-6">
        Our Recent Blogs
      </div>
      <div
        className="grid lg:gap-8 md:gap-5 gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
        key={recentblog._id}
      >
        {recentblog?.slice(0, 6).map((blog) => (
          <>
            <Card maxW="sm" className="border-2 border-red-700 shadow-xl">
              <CardBody>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                />
                <Stack mt="6" spacing="3" className="px-5 py-3">
                  <Heading size="md">{blog.title}</Heading>
                  <p>{blog.description}</p>
                  <p color="blue.600" fontSize="2xl">
                    {blog.category}
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
                    variant="solid"
                    className="text-black border border-red-600"
                  >
                    Details
                  </Link>
                  <Button
                    variant="ghost"
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
