import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { calculatePrice } from "../../utils/index";

import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";
import { getCart } from "../../utils/index";
const apiUrl = process.env.API_URL || "http://localhost:1337";

toast.configure();

function Checkout() {
  const cartItems = getCart();

  const [product] = React.useState({ cartItems });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://4pm8l.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong ", { type: "error" });
    }
  }
  return (
    <div className="checkout-container">
      {cartItems.map((item) => (
        <ul>
          <li>{item.name}</li>
          <li>${item.price}</li>
          <li>
            <img
              style={{ width: "50%" }}
              src={`${apiUrl}${item.image[0].url}`}
              alt="item pic"
            ></img>
          </li>
        </ul>
      ))}
      <h3>Subtotal: {calculatePrice(cartItems)}</h3>
      <div className="product"></div>
      <StripeCheckout
        stripeKey="pk_test_51HRR6vLy5lfW1D11d6a8V00UYam21Muy9gQ6301LeBxwkDOzRTDao1Bo7WC6HQQR3kxUfgXRCnDiXg9dsSS6RYZT00v2nJb2v4"
        token={handleToken}
        amount={calculatePrice(cartItems)}
        name="What exactly goes here"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default Checkout;
