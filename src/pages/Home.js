import Banner from "../components/Banner";
import Products from "../components/Products";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/homeProductAction";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      {loading ? <Loading /> : <Products products={products} />}
    </main>
  );
}

export default Home;
