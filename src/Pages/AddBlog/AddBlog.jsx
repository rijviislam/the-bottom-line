import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

export default function AddBlog() {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  const email = user?.email;
  const [category, setCategory] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { image, title, category, shortdescription, longdescription, email } =
      data;

    fetch(`${import.meta.env.VITE_API_URL}/allblogs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("Data was Added SuccessFully!!");
          reset();
        }
      });
  };

  return (
    <div className="flex bg-base-100 items-center justify-center lg:w-full my-5">
      <div className="flex flex-col items-center lg:w-10/12  p-6 rounded-md sm:p-10  text-gray-100 dark:text-gray-800 w-[360px]">
        <div className="mb-8 text-center w-full">
          <h1 className="my-3 text-4xl font-bold dark:text-violet-600">
            Add your Blog
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 rounded-lg p-5 lg:p-10 bg-slate-300 lg:w-[800px]  md:w-[600px] w-[360px]"
        >
          <div className=" flex items-start gap-5">
            <div className="w-full lg:gap-5 md:gap-3 gap-2 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="use image URL"
                  className="w-full h-[50px] px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 outline-none"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="Item Name" className="text-sm">
                    Title
                  </label>
                </div>
                <input
                  type="title"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className="w-full h-[50px] px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 outline-none"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="shortdescription" className="text-sm">
                    Short Description
                  </label>
                </div>
                <textarea
                  type="shortdescription"
                  name="shortdescription"
                  id="shortdescription"
                  placeholder="short description"
                  className="w-full h-[100px] px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 outline-none resize-none"
                  {...register("shortdescription", { required: true })}
                />
                {errors.shortdescription && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="longdescription" className="text-sm">
                    Long Description
                  </label>
                </div>
                <textarea
                  type="longdescription"
                  name="longdescription"
                  id="longdescription"
                  placeholder="Long Description"
                  className="w-full h-[100px] px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 outline-none resize-none"
                  {...register("longshortdescription", { required: true })}
                />
                {errors.longshortdescription && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="flex flex-col">
                <h2 className="text-sm">Category</h2>
                <select
                  id="category"
                  defaultValue="Category"
                  name="category"
                  className="bg-white p-2 h-[50px] outline-none rounded-md text-gray-500"
                  onChange={(e) => setCategory(e.target.value)}
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
              <div className="flex items-center gap-2">
                <input
                  id="email"
                  type="hidden"
                  defaultValue={email}
                  name="email"
                  {...register("email")}
                />
              </div>
            </div>
          </div>

          <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-violet-400 dark:bg-violet-600">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}
