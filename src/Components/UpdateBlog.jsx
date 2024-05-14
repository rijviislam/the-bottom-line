import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Update() {
  const [selectCategory, setSelectCategory] = useState();
  const [blog, setBlog] = useState([]);
  const [defaultData, setDefaultData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const { _id } = blog;
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/allblogs/${id}`
      );
      setBlog(data);
    };
    getData();
  }, [id]);
  const { register, handleSubmit } = useForm();
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

  return (
    <div>
      <div className="hero min-h-screen my-5">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl mb-5 font-semibold">Update your product</h2>
          <div className="card shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body shadow-xl border border-silver rounded-lg"
            >
              <div className="flex flex-col lg:flex-row gap-5 w-full">
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-black">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="input input-bordered"
                    defaultValue={blog.title}
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-black">
                      Short Description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="shortdescription"
                    placeholder="Short Description"
                    className="input input-bordered"
                    defaultValue={blog.shortdescription}
                    {...register("shortdescription", { required: true })}
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 w-full">
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-black">
                      Long Description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="longdescription"
                    placeholder="Long Description"
                    className="input input-bordered"
                    defaultValue={blog.longdescription}
                    {...register("longdescription", { required: true })}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <h2 className="text-sm text-black">Subcategory Name</h2>
                <select
                  id="fruits"
                  defaultValue="Select Subcategory"
                  name="category"
                  className="bg-white p-2 outline-none rounded-md text-gray-500"
                  onChange={(e) => setSelectCategory(e.target.value)}
                  {...register("category", { required: true })}
                >
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

              <input
                type="submit"
                placeholder="Update Product"
                className="btn bg-cyan-900 w-full my-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
