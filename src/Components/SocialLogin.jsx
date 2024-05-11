import useAuth from "../Hooks/useAuth";
import Img from "../assets/react.svg";

export default function SocialLogin() {
  const { googleLogin } = useAuth();
  return (
    <>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => googleLogin()}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <img
            className="w-8 h-8 object-contain"
            src={Img}
            alt="Google Login"
          />
        </button>

        <button
          //   onClick={() => githubLogin()}
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm"
        >
          <img className="w-8 h-8 object-contain" alt="" />
        </button>
      </div>
    </>
  );
}
