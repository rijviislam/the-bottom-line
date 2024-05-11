import { Link } from "react-router-dom";
import ErrImg from "../../assets/browser.png";

export default function ErrorPage() {
  return (
    <div>
      <div className="flex flex-col gap-5 w-full h-[100vh] items-center justify-center">
        <img
          src={ErrImg}
          className="w-[200px] h-[200px]"
          alt="Page Not Fdund"
        />
        <h2 className="text-[#FE5D0D] text-2xl font-semibold">
          Page Not Found
        </h2>
        <Link className="btn bg-[#FE5D0D] text-white" to="/">
          Back To Home Page
        </Link>
      </div>
    </div>
  );
}
