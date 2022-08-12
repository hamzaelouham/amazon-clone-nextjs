import React from "react";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";

import "../styles/globles.css";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient.current}>
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
