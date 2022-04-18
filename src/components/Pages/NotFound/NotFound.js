import React from "react";
import image from "./404.jpg";
const NotFound = () => {
  return (
    <div className="flex justify-center">
      <img src={image} alt="404" />
    </div>
  );
};

export default NotFound;
