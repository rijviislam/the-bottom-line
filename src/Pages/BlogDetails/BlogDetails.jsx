import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Comment from "../../Components/Comment";
import useAuth from "../../Hooks/useAuth";

export default function BlogDetails() {
  const { user } = useAuth();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [updateBtn, setUpdateBtn] = useState(false);
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/allblogs/${id}`
      );
      setDetails(data);
      if (user?.email === details?.email) {
        setUpdateBtn(true);
      }
    };

    getData();
  }, [details?.email, id, user]);

  const { _id, title, image, shortdescription, longshortdescription } = details;

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
          setComments((prevComments) => [
            ...prevComments,
            { ...commentData, _id: data.insertedId },
          ]);
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
      setComments(data);
    };
    getCmntData();
  }, [id]);
  return (
    <div className="flex flex-col gap-5 items-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <img
        className="lg:w-[800px] lg:h-[400px] md:w-[500px] w-[300px] h-[300px] object-cover"
        src={image}
        alt=""
      />
      <div className="lg:w-full md:w-[600px] w-[300px]  lg:px-20">
        <strong className="text-xl">Short Description:</strong>
        {shortdescription}
      </div>
      <div className="lg:w-full md:w-[600px] w-[300px] lg:px-20">
        <strong className="text-xl">Description:</strong>
        {longshortdescription}
      </div>

      <form
        onSubmit={handleComment}
        className="lg:w-full w-[300px] mt-5 flex items-end justify-center"
      >
        <textarea
          name="comment"
          id="comment"
          className="w-[500px] border-b  border-b-black outline-none  ml-20  resize-none"
        ></textarea>

        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
          comment
        </button>
        {updateBtn ? (
          <>
            <Link
              to={`/updateblogpage/${_id}`}
              className="ml-3 btn btn-primary"
            >
              Update
            </Link>
          </>
        ) : null}
      </form>
      <div>
        {comments?.map((comment, idx) => (
          <Comment key={idx} comment={comment} />
        ))}
      </div>
    </div>
  );
}
