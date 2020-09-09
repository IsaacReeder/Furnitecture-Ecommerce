import React, { Component } from "react";
import { setCart, getCart, calculatePrice } from "../../utils/index";
import Button from "../FormElements/Button";
import "./Cart.css";

const apiUrl = process.env.API_URL || "http://localhost:1337";
// const strapi = new Strapi(apiUrl);

class Cart extends Component {
  state = {
    cartItems: getCart(),
    onClose: this.props.onClose,
  };
  deleteItemFromCart = (productToDeleteId) => {
    const filteredItems = this.state.cartItems.filter(
      (product) => product.id !== productToDeleteId
    );
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
  };
  componentDidMount() {
    fetch("https://api.ipify.org?format=jsonp?callback=?", {
      method: "GET",
      headers: {},
    })
      .then((res) => {
        return res.text();
      })
      .then((ip) => {
        console.log("ip", ip);
      });
  }
  render() {
    return (
      <>
        <div className="products-cart">
          <div className="cart-left-section">
            Bag
            {/* <h4>Items: {this.state.cartItems.length}</h4> */}
            {this.state.cartItems.map((product) => (
              <>
                <img
                  style={{ width: "50%" }}
                  src={`${apiUrl}${product.image[0].url}`}
                  alt="item pic"
                ></img>
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  Quantity {product.quantity} - $
                  {(product.quantity * product.price).toFixed(2)}
                </div>
                <h3
                  style={{ borderBottom: "1px solid black", cursor: "pointer" }}
                >
                  <div onClick={() => this.deleteItemFromCart(product.id)}>
                    <h4>Remove</h4>
                  </div>
                </h3>
                <br />
                {/* <h3>
                  {this.state.cartItems.length === 0 && (
                    <h3>Please select some items</h3>
                  )}
                </h3> */}
              </>
            ))}
          </div>
          <div className="cart-right-section">
            <h2 style={{ paddingTop: "25%" }}>Summary</h2>

            <h3> Subtotal: {calculatePrice(this.state.cartItems)}</h3>
            <h4
              style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}
            >
              Estimated shipping & Handling: $$$$
            </h4>
            <h3
              style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}
            >
              Total:
            </h3>
            <div className="modal-close-button">
              <Button onClose={this.props.onClose} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
