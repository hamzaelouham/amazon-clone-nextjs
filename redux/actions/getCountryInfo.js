import Axios from "axios";

export const getCountyInfo = () => async (dispatch) => {
  dispatch({ type: "REQUEST_COUNTRY" });
  try {
    const { data } = await Axios.get("http://ip-api.com/json");

    dispatch({ type: "GETTING_SUCCSS_COUNTRY", payload: data });
  } catch (error) {
    dispatch({
      type: "GETTING_COUNTRY_FAIL",
      payload: error,
    });
  }
};
