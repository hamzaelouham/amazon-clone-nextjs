import Banner from "../components/Banner";
import Products from "../components/Products";

export default function Home({ products }) {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <Products products={products} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const data = await (await fetch("https://fakestoreapi.com/products")).json();
  console.log(data);
  return {
    props: { products: data },
  };
};
