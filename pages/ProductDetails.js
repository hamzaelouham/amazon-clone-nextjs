import React from "react";
import Preview from "../components/Preview";
import Details from "../components/Details";
import CartDetails from "../components/CartDetails";

function ProductDetails({}) {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 my-6">
        <Preview imageUrl={product.image} title={product.title} />
        <Details
          title={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating === undefined ? null : rating}
          category={product.category}
          country={product.country}
        />
        <CartDetails product={product} country={country} />
      </div>
    </div>
  );
}

export default ProductDetails;
