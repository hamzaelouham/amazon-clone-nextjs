import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default function Home() {
  const {
    data,
    // isLoading,
    // isFetching,
  } = useQuery("products", getProducts);

  console.log(data);

  if (!data) return <h2>no data</h2>;
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <Products products={data} />
    </main>
  );
}

const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("products", getProducts);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
