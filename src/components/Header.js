import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import logo from "../images/logo192.png";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";

function Header() {
  const basket = useSelector((state) => state.cart.cartItems);
  const auth = useSelector((state) => state.auth);
  const [searchvalue, setSearchvalue] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleHomeRoute = () => {
    history.push("/");
  };
  const handleCheckoutRoute = () => {
    history.push("/checkout");
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const search = () => {
    dispatch({ type: "SEARCH", payload: searchvalue });
  };

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div
          onClick={() => handleHomeRoute()}
          className="mt-2 cursor-pointer flex items-center flex-grow sm:flex-grow-0"
        >
          <img
            src={logo}
            className="object-fit-contain mr-4"
            height={250}
            width={80}
            alt="logo"
          />
        </div>
        <div className="hidden sm:flex items-center rounded-md cursor-pointer flex-grow h-10 bg-yellow-400 hover:bg-yellow-500">
          <input
            className="focus:outline-none p-2 h-full px-4 w-6 flex-shrink rounded-l-md flex-grow"
            type="text"
            onChange={(e) => setSearchvalue(e.target.value)}
          />
          <SearchIcon className="h-12 p-4" onClick={search} />
        </div>
        {/* right corner*/}

        <div className="text-white wihtespace-nowrap text-xs mx-6 flex items-center space-x-6">
          <div className="link">
            {auth.loggedIn ? (
              <p onClick={() => logout()}>hello {auth.user.name} </p>
            ) : (
              <p onClick={() => history.push("/login")}>sign In</p>
            )}

            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div
            onClick={() => handleCheckoutRoute()}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-black rounded-full text-center font-bold">
              {basket.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="text-white flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-sm">
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-4" />
          All
        </p>
        <p className="link">prime audio</p>
        <p className="link">prime video</p>
        <p className="link">Boooks</p>
        <p className="link hidden lg:inline-flex ">Electornice</p>
      </div>
    </header>
  );
}

export default Header;
