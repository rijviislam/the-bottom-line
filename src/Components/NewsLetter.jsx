import { useForm } from "react-hook-form";

export default function NewsLetter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    console.log("Data was Added SuccessFully!!");
  };
  return (
    <div className=" text-center  flex flex-col items-center lg:py-5 lg:my-10">
      <h2 className="text-5xl font-semibold">
        Subscribe To Our Newsletter <br /> And Be The First To Know
      </h2>
      <p className="text-center">
        Stay Ahead Of The Curve with TheDaily Blogs. <br /> Be The First To
        Access Our New Blogs and Receive Exclusive Perks
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" shadow-2xl border border-silver my-3 rounded-r-xl"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-[250px] h-[50px] pl-5 outline-none"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
        <button className="p-3.5 bg-purple-700 rounded-r-xl text-white font-medium">
          Subscribe
        </button>
      </form>
    </div>
  );
}
