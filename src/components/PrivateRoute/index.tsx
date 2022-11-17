import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthUserContext";

export const PrivateRoute = () => {
  
   const {token} = useContext(AuthUserContext);
  
  return token ? <Outlet /> : <Navigate to="/" />;
}