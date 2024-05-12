import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

// import { Button, ButtonToolbar, Form } from "rsuite";

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

export default function UpdateBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [defaultData, setDefaultData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/allblogs/${id}`
      );
      setBlog(data);
    };
    getData();
  }, [id]);
  console.log(blog);
  const { _id } = blog;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title, category, shortdescription, longdescription } = data;

    fetch(`${import.meta.env.VITE_API_URL}/blogupdated/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Blog was Updated SuccessFully!",
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
          navigate("/myblogs");
        }
      });
    setDefaultData(data);
  };
  console.log(defaultData);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold py-4">{blog.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          placeholder="Title"
          defaultValue={blog.title}
          className="w-[500px] h-[50px] border border-black pl-3"
          name="title"
          {...register("title")}
        />
        <input
          placeholder="category"
          defaultValue={blog.category}
          className="w-[500px] h-[50px] border border-black pl-3"
          name="category"
          {...register("category")}
        />
        <input
          placeholder="Short Description"
          defaultValue={blog.shortdescription}
          className="w-[500px] h-[50px] border border-black pl-3"
          name="shortdescription"
          {...register("shortdescription")}
        />
        <input
          placeholder="Long Description"
          defaultValue={blog.longshortdescription}
          className="w-[500px] h-[50px] border border-black pl-3"
          name="longdescription"
          {...register("longdescription")}
        />
        <input type="submit" className="btn btn-active" />
      </form>
    </div>
  );
}
