import Header from "./components/Header";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Shipping from "./pages/Shipping";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Notfound from "./components/Notfound";
import Payments from "./pages/Payments";
import PlaceOrder from "./pages/PlaceOrder";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Header />
        <Switch>
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route path="/Not-found" component={Notfound} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/register" component={Register} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/checkout/shipping" component={Shipping} />
          <PrivateRoute exact path="/checkout/payments" component={Payments} />
          <PrivateRoute
            exact
            path="/checkout/place-order"
            component={PlaceOrder}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
