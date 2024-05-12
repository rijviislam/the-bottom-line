import PropTypes from "prop-types";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function PrivateRoute({ children }) {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return <Skeleton count={15} />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
}
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
