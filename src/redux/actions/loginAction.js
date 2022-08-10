import Axios from "axios";

export const login = (info) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const { data } = await Axios.post("http://localhost:5000/api/login", info);
    if (data.token) {
      localStorage.setItem("Auth", data.token);
      dispatch({ type: "LOGIN_SUCCUSS", payload: data.token });
    } else {
      dispatch({
        type: "LOGIN_FAIL",
        payload: data,
      });
    }
  } catch (error) {
    /* 
    dispatch({
      type: "LOGIN_FAIL",
      payload: " something error",
    });
    */
  }
};

export const register = (info) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  try {
    const { data } = await Axios.post(
      "http://localhost:5000/api/register",
      info
    );

    if (data.id) {
      localStorage.setItem("ID", data.id);
      dispatch({ type: "REGISTER_SUCCUSS", payload: data.id });
    } else {
      dispatch({
        type: "REGISTER_FAIL",
        payload: data,
      });
    }
  } catch (error) {
    /*
    dispatch({
      type: "REGISTER_FAIL",
     // payload: "some  errors",
    });
     */
  }
};

/*

try {
    const { data } = await Axios.post(
      "http://localhost:4000/api/register",
      info
    );

    dispatch({ type: "REGISTER_SUCCUSS", payload: data._id });
  } catch (error) {
    const errorMsg = error.config;
    console.log(errorMsg);
    dispatch({
      type: "REGISTER_FAIL",
      payload: errorMsg,
    });
  }



*/
