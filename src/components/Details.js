import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";

function Details({
  title,
  price,
  description,
  category,
  rating,
  country,
  ...rest
}) {
  const { rate, count } = rating === undefined ? { rate: 0, count: 0 } : rating;

  const [rates] = useState(parseInt(rate));

  return (
    <>
      <div className="px-4 mx-2">
        <p className="text-3xl a-color-secondary">{title}</p>
        <div className="text-green-700">{category}</div>
        <div className="flex space-x-4">
          <span className="flex text-yellow-700">
            {Array(rates)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </span>
          <span className="text-green-700 blue-link">{count} ratings</span>
          <span> | </span>
          <span className="text-green-700 blue-link">
            23 answered questions
          </span>
        </div>
        <div className="my-2">
          <span className="a-declarative">
            <span className="a-size-small aok-float-left ac-badge-rectangle">
              <span className="ac-badge-text-primary text-white">Amazon's</span>
              <span className="ac-badge-text-secondary text-yellow-700">
                Choice
              </span>
            </span>
            <span className="aok-float-left ac-badge-triangle"></span>
          </span>
        </div>
        <hr />
        <span className="text-gray-600"> Price: </span>
        <span className="text-yellow-700 text-lg mb-3">
          <Currency quantity={price} />
        </span>
        <p className="text-gray-600 mt-3">
          $61.05 Shipping & Import Fees Deposit to
          <br />
          {country}
          <span className="link"> Details </span>
        </p>
        <div className="mt-4">
          <p className="font-semibold text-left">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Details;
