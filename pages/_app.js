import React from "react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";

import "../styles/globles.css";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="bg-gray-100">
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
