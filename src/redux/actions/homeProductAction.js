import Axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: "REQUEST_HOME_PRODUCT" });

  try {
    const { data } = await Axios.get("https://fakestoreapi.com/products");

    dispatch({ type: "SUCCSS_HOME_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);

    dispatch({
      type: "FAIL_HOME_PRODUCT",
      payload: error,
    });
  }
};
