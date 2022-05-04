import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { userSelector } from "../../features/userSlice";

interface Props {
  children?: React.ReactNode;
}

const RequiredAuth: React.FC<Props> = ({ children }) => {
  const user = useAppSelector(userSelector);
  if (!user.auth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default RequiredAuth;
