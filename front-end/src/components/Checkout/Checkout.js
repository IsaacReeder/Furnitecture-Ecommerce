import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { calculatePrice } from "../../utils/index";
import Cart from "../Cart/Cart";

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
      {/* {cartItems.map((item) => (
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
      ))} */}
      <div style={{ fontSize: "3vw", marginTop: "-5em" }}>Checkout</div>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: "1",
          }}
        ></div>
        <div className="products-cart">
          {cartItems.map((product) => (
            <div
              style={{
                display: "flex",
                border: ".5px solid rgb(202, 201, 201)",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  flex: "0 32%",
                  height: "100%",
                }}
              >
                <img
                  style={{ width: "110%" }}
                  src={`${apiUrl}${product.image[0].url}`}
                  alt="item pic"
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "0 32%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  height: "100px",
                  alignContent: "space-between",
                  paddingTop: "5%",
                  paddingLeft: "5%",
                }}
              >
                <div style={{ flex: "1", fontSize: "2vw" }}>{product.name}</div>

                <div style={{ flex: "1", fontSize: "1vw" }}>
                  Quantity: {product.quantity}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "0 32%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                  paddingTop: "5%",
                }}
              >
                <i
                  className="fas fa-trash"
                  style={{ fontSize: "30px", cursor: "pointer", flex: "1" }}
                  onClick={() => this.deleteItemFromCart(product.id)}
                ></i>
                <div style={{}}>
                  $ {(product.quantity * product.price).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "1.5vw" }}>
          Subtotal: {calculatePrice(cartItems)}
        </div>
      </div>
      {/* <h3>Subtotal: {calculatePrice(cartItems)}</h3> */}

      <StripeCheckout
        stripeKey="pk_test_51HRR6vLy5lfW1D11d6a8V00UYam21Muy9gQ6301LeBxwkDOzRTDao1Bo7WC6HQQR3kxUfgXRCnDiXg9dsSS6RYZT00v2nJb2v4"
        style={{ marginBottom: "3rem" }}
        token={handleToken}
        amount={calculatePrice(cartItems)}
        name="Furnitecture"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default Checkout;
