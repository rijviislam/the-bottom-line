export default function AddBlog() {
  return (
    <div className="flex bg-base-100 items-center justify-center lg:w-full my-5">
      <div className="flex flex-col items-center lg:w-10/12  p-6 rounded-md sm:p-10  text-gray-100 dark:text-gray-800 w-[360px]">
        <div className="mb-8 text-center w-full">
          <h1 className="my-3 text-4xl font-bold dark:text-violet-600">
            Add your craft item
          </h1>
        </div>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 rounded-lg p-5 lg:p-10 bg-slate-300 lg:w-[800px]  md:w-[600px] w-[360px]"
        >
          <div className=" flex items-start gap-5">
            <div className="w-1/2">
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="use image URL"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  // {...register("image", { required: true })}
                />
                {/* {errors.image && (
                <span className="text-red-500">This field is required</span>
              )} */}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="Item Name" className="text-sm">
                    Item Name
                  </label>
                </div>
                <input
                  type="name"
                  name="itemName"
                  id="itemName"
                  placeholder="Item Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  // {...register("name", { required: true })}
                />
                {/* {errors.name && (
                <span className="text-red-500">This field is required</span>
              )} */}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="shortdescription" className="text-sm">
                    Short Description
                  </label>
                </div>
                <input
                  type="shortdescription"
                  name="shortdescription"
                  id="shortdescription"
                  placeholder="short description"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  // {...register("shortdescription", { required: true })}
                />
                {/* {errors.shortdescription && (
                <span className="text-red-500">This field is required</span>
              )} */}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="price" className="text-sm">
                    Price
                  </label>
                </div>
                <input
                  type="price"
                  name="price"
                  id="price"
                  placeholder="Price"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  // {...register("price", { required: true })}
                />
                {/* {errors.price && (
                <span className="text-red-500">This field is required</span>
              )} */}
              </div>

              <div className="flex flex-col">
                <h2 className="text-sm">Subcategory Name</h2>
                <select
                  id="fruits"
                  defaultValue="Select Subcategory"
                  name="subcategory_Name"
                  className="bg-white p-2 outline-none rounded-md text-gray-500"
                  // onChange={(e) => setSubcategory_Name(e.target.value)}
                  // {...register("subcategory_Name", { required: true })}
                >
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 space-y-2">
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="rating" className="text-sm">
                    Rating
                  </label>
                </div>
                <input
                  type="rating"
                  name="rating"
                  id="rating"
                  placeholder="rating"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  // {...register("rating", { required: true })}
                />
              </div>
              {/* {errors.rating && (
              <span className="text-red-500">This field is required</span>
            )} */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="processing_time" className="text-sm">
                    Processing Time
                  </label>
                </div>
                <input
                  type="processing_time"
                  name="processing_time"
                  id="processing_time"
                  placeholder="Processing Time"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
                  // {...register("processing_time", { required: true })}
                />
              </div>
              {/* {errors.processing_time && (
              <span className="text-red-500">This field is required</span>
            )} */}

              <div className="flex flex-col lg:gap-5 ">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="customization" className="text-sm">
                      customization
                    </label>
                  </div>
                  <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row md:flex-row">
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="customization"
                        className="text-sm font-semibold"
                      >
                        Yes
                      </label>
                      <input
                        id="Yes"
                        type="radio"
                        value="Yes"
                        name="radio-1"
                        className="radio radio-primary"
                        // {...register("customization")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="customization"
                        className="text-sm font-semibold"
                      >
                        No
                      </label>
                      <input
                        id="No"
                        type="radio"
                        value="No"
                        name="radio-1"
                        className="radio radio-primary"
                        // {...register("customization")}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="stockStatus" className="text-sm">
                      Stock Status
                    </label>
                  </div>
                  <div className="flex gap-3 lg:gap-8 flex-col lg:flex-row md:flex-row">
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="stockStatus"
                        className="text-sm font-semibold"
                      >
                        In Stock
                      </label>
                      <input
                        id="in_stock"
                        type="radio"
                        value="in stock"
                        name="radio-1"
                        className="radio radio-primary"
                        // {...register("stockStatus")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="stockStatus"
                        className="text-sm font-semibold"
                      >
                        Made to Order
                      </label>
                      <input
                        id="made_to_order"
                        type="radio"
                        value="made to order"
                        name="radio-1"
                        className="radio radio-primary"
                        // {...register("stockStatus")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                      <input
                        id="email"
                        type="hidden"
                        // defaultValue={email}
                        name="email"
                        // {...register("email")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        id="displayName"
                        type="hidden"
                        // defaultValue={displaName}
                        name="displayName"
                        // {...register("displayName")}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        id="userImage"
                        type="hidden"
                        // defaultValue={userImage}
                        name="userImage"
                        // {...register("userImage")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-violet-400 dark:bg-violet-600">
            Add Craft
          </button>
        </form>
      </div>
    </div>
  );
}
