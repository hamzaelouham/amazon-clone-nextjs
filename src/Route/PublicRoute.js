import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.auth.loggedIn);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}
