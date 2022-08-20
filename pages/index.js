import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getProducts } from "../src/queries/";
import { Banner, Products } from "../components/";

export default function Home() {
  const { data } = useQuery(["products"], () => getProducts());

  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <Products products={data} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], () => getProducts());

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
