import React, { Component } from "react";
import {
  setCart,
  getCart,
  calculatePrice,
  // calculateShipping,
} from "../../utils/index";
import { Link } from "react-router-dom";
import "./Cart.css";

const apiUrl = process.env.API_URL || "http://localhost:1337";
// const strapi = new Strapi(apiUrl);

class Cart extends Component {
  state = {
    cartItems: [],
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
  componentDidMount() {
    this.setState({
      cartItems: getCart(),
    });
  }
  render() {
    const { cartItems } = this.state;
    return (
      <div
        style={{
          display: "flex",
          padding: "5%",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10%",
            flex: "1",
          }}
        >
          <div style={{ fontSize: "3vw" }}>Your shopping cart</div>
        </div>
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

                <div
                  style={{ flex: "1", fontSize: "1.2vw", overflow: "hidden" }}
                >
                  {product.description}
                </div>
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
        <Link
          to={`/checkout`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50px",
            backgroundColor: "black",
            color: "white",
            background: "black",
            textDecoration: "none",
            marginBottom: "10%",
            marginTop: "5%",
            flex: "1",
            zIndex: "1000",
          }}
        >
          Checkout
        </Link>
      </div>
    );
  }
}

export default Cart;
