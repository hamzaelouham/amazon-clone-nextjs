const initialState = {
  info: {},
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_COUNTRY":
      return {
        ...state,
      };
    case "GETTING_SUCCSS_COUNTRY":
      return {
        ...state,
        info: action.payload,
      };

    default:
      return state;
  }
}
