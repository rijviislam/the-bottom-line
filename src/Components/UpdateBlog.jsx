import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

// import { Button, ButtonToolbar, Form } from "rsuite";

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

export default function UpdateBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [defaultData, setDefaultData] = useState();
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { title, category, shortdescription, longdescription } = data;

    // fetch(`${import.meta.env.VITE_API_URL}/allblogs`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       console.log("Data was Added SuccessFully!!");
    //       reset();
    //     }
    //   });

    setDefaultData(data);
  };
  console.log(defaultData);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl">UpdateBlog{blog._id}</h2>
      {/* <Form fluid className=" w-[600px]" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="category-1" className="">
          <Form.ControlLabel>Category</Form.ControlLabel>
          <Form.Control
            name="category"
            defaultValue={blog.category}
            className="w-full h-[50px] border-2 border-black
          "
            {...register("category", { required: true })}
          />
        </Form.Group>
        <Form.Group controlId="title-1">
          <Form.ControlLabel>Title</Form.ControlLabel>
          <Form.Control
            name="title"
            type="text"
            defaultValue={blog.title}
            className="w-full h-[50px] border-2 border-black
          "
            {...register("title", { required: true })}
          />
        </Form.Group>
        <Form.Group controlId="password-1">
          <Form.ControlLabel>Short Description</Form.ControlLabel>
          <Form.Control
            name="shortdescription"
            type="text"
            defaultValue={blog.shortdescription}
            className="w-full h-[50px] border-2 border-black
          "
            {...register("shortdescription", { required: true })}
          />
        </Form.Group>
        <Form.Group controlId="textarea-1">
          <Form.ControlLabel>Long Description</Form.ControlLabel>
          <Form.Control
            rows={5}
            name="longshortdescription"
            defaultValue={blog.longshortdescription}
            className="w-full h-[80px] border-2 border-black
          "
            {...register("longshortdescription", { required: true })}
          />
        </Form.Group>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" className="btn btn-active">
              Submit
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form> */}
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
