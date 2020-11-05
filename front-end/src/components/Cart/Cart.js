import React, { Component } from "react";
import {
  setCart,
  getCart,
  calculatePrice,
  calculateShipping,
} from "../../utils/index";
// import { Link } from "react-router-dom";
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
  // componentDidMount() {
  //   fetch("https://api.ipify.org?format=jsonp?callback=?", {
  //     method: "GET",
  //     headers: {},
  //   })
  //     .then((res) => {
  //       return res.text();
  //     })
  //     .then((ip) => {
  //       console.log("ip", ip);
  //     });
  // }
  render() {
    return (
      <>
        <div className="products-cart">
          <div className="cart-left-section">
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
              </>
            ))}
          </div>
          <div className="cart-right-section">
            <h2 style={{ paddingTop: "25%" }}>Summary</h2>

            <h3> Subtotal: {calculatePrice(this.state.cartItems)}</h3>
            <h4
              style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}
            >
              Estimated shipping & Handling: ${this.state.cartItems.length * 5}
            </h4>
            <h3
              style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}
            >
              Total:$
              {calculateShipping(this.state.cartItems)}
            </h3>
            <div className="modal-close-button">
              <button onClose={this.props.onClose} />
            </div>
            {/* <button className="checkout-button">
              <Link to={`/checkout`}>
                <h1>Checkout</h1>
              </Link>
            </button> */}
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
