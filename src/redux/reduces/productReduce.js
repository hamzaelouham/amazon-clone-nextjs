const initialState = { products: [] };

export default function productReduce(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_HOME_PRODUCT":
      return {
        ...state,
        loading: true,
      };

    case "SUCCSS_HOME_PRODUCT":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case "FAIL_HOME_PRODUCT":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
