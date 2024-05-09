import { Outlet } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import Navbar from "../Components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
