import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import CheckoutProuducts from "../../components/CheckoutProducts";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAuth = true; //useSelector((state) => state.auth.loggedIn);
  const total = cartItems.reduce(
    (total, item) => total + item.price * parseInt(item.quantity),
    0
  );

  const router = useRouter();

  return (
    <main className="lg:flex max-w-screen-2xl mx-auto">
      {/* left */}
      <div className="flex-grow m-5 shadow-sm">
        <img
          src="https://links.papareact.com/ikj"
          alt="banner"
          width={1020}
          height={250}
          className="object-contain"
        />
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {cartItems.length === 0
              ? "Your Shopping Cart Is Empty"
              : "Your Shopping Cart"}
          </h1>
          {cartItems.map((item, i) => (
            <CheckoutProuducts
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              category={item.description}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      {/* right */}
      <div className="flex-col shadow-md bg-white p-10">
        {cartItems.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">({cartItems.length} items) </h2>
            subtotal :
            <span className="font-bold">
              <Currency quantity={total} />
            </span>
            <button
              onClick={() => router.push("checkout/shipping")}
              disabled={!isAuth}
              className={
                isAuth
                  ? "button mx-3 mt-2"
                  : "button mx-3 mt-2 cursor-not-allowed"
              }
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default Checkout;
