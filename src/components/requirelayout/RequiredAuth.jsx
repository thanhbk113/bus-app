import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { userSelector } from "../../features/userSlice";
import NavBar from "../navbar/NavBar";

interface Props {
  children?: React.ReactNode;
}

const RequiredAuth: React.FC<Props> = ({ children }) => {
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();
  if (!user.auth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default RequiredAuth;
