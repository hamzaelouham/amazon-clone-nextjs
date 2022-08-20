import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globles.css";
import "../styles/style.css";
import { loadCartFromLocalStorge } from "../redux/slices/cartSlice";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("basket"));

    store.dispatch(loadCartFromLocalStorge(cart));
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <div className="bg-gray-100">
            <Header />
            <Component {...pageProps} />
          </div>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}
