import React from "react";
import { useQuery } from "@tanstack/react-query";
import Preview from "../../components/Preview";
import Details from "../../components/Details";
import CartDetails from "../../components/CartDetails";

export default function ProductDetails({ _data, id }) {
  const { data: product } = useQuery(
    ["getProductById"],
    () => getPageById(id),
    {
      initialData: _data,
    }
  );

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

const getProductById = async (id) =>
  await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
  ).json();

export const getServerSideProps = async ({ query }) => {
  const { slug } = query;
  const id = slug[0];
  const _data = await getProductById(id);

  return {
    props: {
      _data,
      id,
    },
  };
};
