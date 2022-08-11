import jwt_decode from "jwt-decode";

let user = null;
const id = null;

const initialState = { loggedIn: user === null ? false : true, user };

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
      };
    case "LOGIN_SUCCUSS":
      user = jwt_decode(action.payload);

      return {
        ...state,
        user,
        loggedIn: true,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        errors: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("Auth");

      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    default:
      return state;
  }
}

export function registerReducer(state = { id }, action) {
  switch (action.type) {
    case "RESGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_SUCCUSS":
      return {
        ...state,
        id: action.payload,
      };

    case "REGISTER_FAIL":
      return {
        ...state,
        errors: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("ID");
      return {
        ...state,
        id: null,
      };
    default:
      return state;
  }
}
