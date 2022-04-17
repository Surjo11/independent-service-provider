import React from "react";
import "./Service.css";
const Service = (props) => {
  const { price, picture, name, description } = props.service;
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
      <img className="service-picture" src={picture} alt="product image" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-2xl font-medium text-gray-900 dark:text-white">
          {price}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
