import React from "react";
import { Link } from 'react-router-dom';

const CardMain = ({ painting }) => {
  return (
    <Link to={`/painting/1`} className="mx-3">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img className="w-full rounded-lg object-cover object-center" src={painting.first_image} alt="product" />
          <p className="my-4 pl-4 font-bold text-gray-500">{ painting.name }</p>
          <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{ painting.price + ' '}$</p>
      </div>
    </Link>
  );
};

export default CardMain;
