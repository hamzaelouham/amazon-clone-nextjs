import React from "react";
import Preview from "../../components/Preview";
import Details from "../../components/Details";
import CartDetails from "../../components/CartDetails";

function ProductDetails({ product }) {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 my-6">
        <Preview imageUrl={product.image} title={product.title} />
        <Details
          title={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating === undefined ? null : 2}
          category={product.category}
          country={product.country}
        />
        <CartDetails product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;

const getProductById = async (id) =>
  await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();

export const getServerSideProps = async () => {
  const pageId = 1; // pageId could be dynamic

  // fetch page data using id
  const product = await getProductById(pageId);

  return {
    props: {
      product,
    },
  };
};
