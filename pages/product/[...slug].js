import React from "react";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { getProductById } from "../../src/queries/";
import Preview from "../../components/Preview";
import Details from "../../components/Details";
import CartDetails from "../../components/CartDetails";

export default function ProductDetails({ id }) {
  const { data: product } = useQuery(["getProductById"], () =>
    getProductById(id)
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

export const getServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  const { slug } = query;
  const id = slug[0];
  await queryClient.prefetchQuery(["getProductById"], () => getProductById(id));

  return {
    props: { dehydratedState: dehydrate(queryClient), id },
  };
};
