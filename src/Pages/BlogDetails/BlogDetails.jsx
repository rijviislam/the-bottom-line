import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Comment from "../../Components/Comment";
import useAuth from "../../Hooks/useAuth";

export default function BlogDetails() {
  const { user } = useAuth();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/allblogs/${id}`
      );
      setDetails(data);
    };
    getData();
  }, [id]);

  const { title, image, shortdescription, longshortdescription } = details;

  const handleComment = (e) => {
    e.preventDefault();
    if (user?.email === details?.email) {
      return Swal.fire({
        title: "You Can not comment on own blog",
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
    const form = e.target;
    const commenterName = user?.displayName;
    const commenterPhoto = user?.photoURL;
    const comment = form.comment.value;
    const blogId = id;
    const commentData = { comment, commenterName, commenterPhoto, blogId };

    fetch(`${import.meta.env.VITE_API_URL}/blogdetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Comment added SuccessFully!!",
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
    form.reset();
  };

  useEffect(() => {
    const getCmntData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/blogdetails/${id}`
      );
      // console.log(data);
      setComments(data);
    };
    getCmntData();
  }, [id]);
  console.log(details);
  return (
    <div className="flex flex-col gap-5 items-center">
      <h2 className="text-5xl">{title}</h2>
      <img className="w-[800px] h-[400px] object-cover" src={image} alt="" />
      <div className="w-full  lg:px-20">
        <strong className="text-xl">Short Description:</strong>
        {shortdescription}
      </div>
      <div className="w-full  lg:px-20">
        <strong className="text-xl">Description:</strong>
        {longshortdescription}
      </div>

      <form
        onSubmit={handleComment}
        className="w-full mt-5 flex items-end justify-center"
      >
        <textarea
          name="comment"
          id="comment"
          className="w-[500px] border-b  border-b-black outline-none  ml-20  resize-none"
        ></textarea>

        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
          comment
        </button>
      </form>
      <div>
        {comments?.map((comment) => (
          <Comment key={comment._id} comment={comment} id={id} />
        ))}
      </div>
    </div>
  );
}
