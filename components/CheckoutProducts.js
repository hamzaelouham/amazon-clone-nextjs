import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../redux/slices/cartSlice";

function CheckoutProducts({
  id,
  title,
  price,
  image,
  description,
  category,
  rating,
}) {
  const { rate } = rating === undefined ? { rate: 0 } : rating;
  const dispatch = useDispatch();
  const [rates] = useState(parseInt(rate));

  const removeFromCart = (productId) => dispatch(RemoveFromCart(productId));

  return (
    <div className="grid grid-cols-5">
      <img
        src={image}
        height={200}
        width={200}
        className="object-contain"
        alt={title}
      />
      {/*  middel*/}
      <div className="col-span-3 mx-5">
        <p className="my-2">{title}</p>
        <div className="flex">
          {Array(rates)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={() => removeFromCart(id)} className="button mt-auto">
          remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
