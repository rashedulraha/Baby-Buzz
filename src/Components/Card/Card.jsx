import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardData }) => {
  const { toyName, pictureURL, rating, price, availableQuantity, toyId } =
    cardData;

  return (
    <div className="bg-base-100 border border-base-300 rounded-xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-36 object-cover rounded-lg mb-4 border border-base-200"
      />

      <h3 className="text-xl font-semibold text-base-content mb-2 line-clamp-2">
        {toyName}
      </h3>

      <p className="text-accent text-sm mb-2 flex items-center gap-1">
        Rating: <span className="font-bold">{rating} ★</span>
      </p>

      <div className="flex items-center justify-between text-sm mb-4">
        <p className="text-base-content/70">
          Available:{" "}
          <span className="text-primary font-bold">{availableQuantity}</span>
        </p>
        <p className="text-base-content/70">
          Price: <span className="text-primary font-bold">${price}</span>
        </p>
      </div>

      <Link
        to={`/details/${toyId}`}
        className="btn btn-block bg-secondary hover:bg-primary text-secondary-content font-semibold border-none shadow-md hover:shadow-xl transition-all">
        View More
      </Link>
    </div>
  );
};

export default Card;
