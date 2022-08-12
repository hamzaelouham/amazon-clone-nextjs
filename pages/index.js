import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { Banner, Products } from "../components/";

export default function Home() {
  const { data: products } = useQuery(["products"], getProducts);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <Products products={products} />
    </main>
  );
}

const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], getProducts);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
