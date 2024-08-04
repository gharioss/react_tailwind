import React from "react";
import { Link } from 'react-router-dom';

const CardMain = ({ painting }) => {
  return (
    <Link to={`/painting/${painting.id_painting}`} className="mx-3">
          <div className="w-auto cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:opacity-50 hover:shadow-md">
          <img className="w-full rounded-lg object-cover object-center" src={'http://localhost:8000/' + painting.first_image} alt="product" />
          <p className="my-4 pl-4 text-xl font-semibold text-gray-800">{ painting.name }</p>
          <p className="mb-4 ml-4 font-bold text-gray-500">{ painting.price + ' '}$</p>
      </div>
    </Link>
  );
};

export default CardMain;
