import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
//import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function Product({
  id,
  title,
  price,
  image,
  description,
  rating,
  category,
}) {
  const { rate } = rating === undefined ? { rate: 0 } : rating;
  const [rates] = useState(parseInt(rate));
  const [Qty] = useState(1);

  const [disable, setDisable] = useState(false);
  const router = useRouter();
  //const dispatch = useDispatch();

  const handleRoute = () => {
    router.push(`/product/${id}`);
  };

  const adToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    setDisable(true);
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs text-gray-400 italic">
        {category}
      </p>

      <img src={image} height={200} width={200} alt={title} />

      <h4 onClick={() => handleRoute()} className="my-3 link">
        {title}
      </h4>

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
            Qty,
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
}
