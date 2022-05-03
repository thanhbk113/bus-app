import React from "react";
import NavBar from "../navbar/NavBar";

const LayOut: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <>{children}</>
    </React.Fragment>
  );
};

export default LayOut;
