const search = (data) => (dispatch) => {
  dispatch({
    type: "SEARCH",
    payload: data,
  });
};
