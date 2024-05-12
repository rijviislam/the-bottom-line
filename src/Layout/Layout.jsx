import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import MyNavbar from "../Components/MyNavbar";

export default function Root() {
  return (
    <div>
      <MyNavbar />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
