import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";

function CartDetails(props) {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const { id, title, price, description, image, rating, category } =
    props.product;
  const country = props.country;
  const adToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setDisable(true);
  };

  const [Qty, setQty] = useState(1);

  const handleQty = (e) => {
    if (parseInt(e.target.value) < 0) {
      setQty(1);
    } else setQty(e.target.value);
  };

  return (
    <div className="rounded-lg border-1 md:mt-4">
      <div className="px-4 py-3">
        <span className="text-yellow-600 text-lg mb-3">
          <Currency quantity={price} />
        </span>
        <p className="text-gray-600 mt-3">
          $61.05 Shipping & Import Fees Deposit to
          <br />
          {country} <span className="link"> Details </span>
        </p>
        <div className="mt-2">
          <span> Arrives: </span>
          <span className="text-black text-lg font-semibold">
            Sep 28 - Oct 8
          </span>
        </div>
        <div className="mt-4 flex justify-start items-center">
          <LocationMarkerIcon className="h-12 p-4" />
          <p className="text-sm link">Deliver to {country}</p>
        </div>
        <div className="mt-3">
          <p className="instock">In Stock.</p>
        </div>
        <div>
          <div className="custom-number-input mt-3 h-10 w-20">
            <label
              htmlFor="custom-input-number"
              className="w-full text-gray-700 text-sm font-semibold"
            >
              Qty
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
              <input
                onChange={(e) => handleQty(e)}
                type="number"
                className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                name="custom-input-number"
                value={Qty}
              ></input>
            </div>
          </div>
        </div>
        <div className="my-16 px-4">
          <button className="primary-button"> Buy Now</button>
          <button
            onClick={() =>
              adToCart({
                id,
                title,
                price,
                description,
                image,
                rating,
                category,
                Qty,
              })
            }
            className={
              disable
                ? "secondary-button cursor-not-allowed"
                : "secondary-button"
            }
            disabled={disable}
          >
            Add to cart
          </button>
        </div>
        <div>
          <span className="text-gray-600  text-sm"> Ships from :</span>{" "}
          <span> Amazon </span>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
