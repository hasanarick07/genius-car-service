import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const serviceDetails = id => {
    navigate(`/services/:${id}`);
  };
  return (
    <div className="w-4/5 mt-3 shadow-2xl">
      <img className="rounded" src={img} alt="" />
      <h1>Name : {name}</h1>
      <h1>price : {price}</h1>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => serviceDetails(id)}
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md 
            w-full  md:px-14 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
      >
        Get :{name}
      </button>
    </div>
  );
};

export default Service;
