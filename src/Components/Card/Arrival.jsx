import React from "react";
import { Link } from "react-router-dom";

const Arrival = ({ Arrivals }) => {
  const { name, image, toyId } = Arrivals;

  return (
    <div className="bg-base-100 border border-base-300 rounded-xl p-5 transition-transform hover:scale-105 duration-300 shadow-sm hover:shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="w-full h-36 object-cover rounded-lg mb-4 border border-base-200"
        />
      </figure>

      <h3 className="text-xl font-semibold text-base-content mb-3 line-clamp-2">
        {name}
      </h3>

      <Link
        to={`/details/${toyId}`}
        className="btn btn-block bg-secondary text-secondary-content hover:bg-primary hover:text-primary-content font-medium border-none shadow-md">
        View Details
      </Link>
    </div>
  );
};

export default Arrival;
