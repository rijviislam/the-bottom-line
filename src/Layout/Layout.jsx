import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import MyNavbar from "../Components/MyNavbar";

export default function Root() {
  return (
    <div>
      <MyNavbar />
      <div className="h-1/2 border border-red-800">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
