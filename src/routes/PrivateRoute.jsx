import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ allowedRoles, children }) => {
  const location = useLocation();

  const otpValue = localStorage.getItem("otp");
  const phone = localStorage.getItem("phone");
  let otp = JSON.parse(otpValue);
  // var  roleValue = JSON.parse(myRoleValue);

  const isAuthorized = otp;

  //   console.log("accessToken", accessToken);

  return isAuthorized ? (
    children
  ) : (
    <Navigate to="/signup" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
