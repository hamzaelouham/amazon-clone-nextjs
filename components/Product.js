import { useState } from "react";
import Link from "next/link";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/solid";
import { addToCart } from "../redux/slices/cartSlice";

const Product = ({
  id,
  title,
  price,
  image,
  description,
  rating,
  category,
}) => {
  const rates = rating ? parseInt(rating.rate) : 2;
  const [quantity] = useState(1);
  const dispatch = useDispatch();

  const [disable, setDisable] = useState(false);
  const adToCart = (product) => {
    dispatch(addToCart(product));
    setDisable(true);
  };

  const makeSlug = (str) => {
    var slug = str.replace(" ", "-");
    if (!slug.includes(" ")) {
      return slug;
    }
    return makeSlug(slug);
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs text-gray-400 italic">
        {category}
      </p>

      <Link href={`/product/${id}/${makeSlug(title)}`}>
        <img
          src={image}
          height={200}
          width={200}
          alt={title}
          className="cursor-pointer"
        />
      </Link>
      <Link href={`/product/${id}/${makeSlug(title)}`}>
        <h4 className="my-3 link">{title}</h4>
      </Link>
      <div className="flex">
        {Array(rates)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} />
      </div>

      <button
        disabled={disable}
        onClick={() =>
          adToCart({
            id,
            title,
            price,
            image,
            description,
            rating,
            category,
            quantity,
          })
        }
        className={
          disable
            ? "mt-auto button opacity-50 cursor-not-allowed"
            : "mt-auto button"
        }
      >
        add to basket
      </button>
    </div>
  );
};

export default Product;
