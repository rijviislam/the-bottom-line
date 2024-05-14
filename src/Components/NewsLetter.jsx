import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Thank You for Subscribe!!",
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
  };
  return (
    <div className=" text-center  flex flex-col items-center lg:py-5 lg:my-10 py-5">
      <h2 className="  text-transparent bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 via-green-500 to-blue-400 bg-clip-text font-bold lg:text-4xl md:text-2xl text-xl">
        Subscribe To Our Newsletter <br /> And Be The First To Know
      </h2>
      <p className="text-center lg:text-sm text-xs my-3 lg:w-full w-[300px]">
        Stay Ahead Of The Curve with TheDaily Blogs. Be The First To Access Our
        New Blogs and Receive Exclusive Perks
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
