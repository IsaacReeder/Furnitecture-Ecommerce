import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import "./products.css";
// prettier-ignore
// calculatePrice,
import {  setCart, getCart, calculatePrice } from "../../utils/index";
import Modal from "../UIElements/modal";
// import { Link } from "react-router-dom";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Products extends React.Component {
  state = {
    items: [],
    brand: "",
    cartItems: getCart(),
    showModal: false,
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            id
            name
            items {
              id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`,
        },
      });
      this.setState({
        items: response.data.brand.items,
        brand: response.data.brand.name,
        cartItems: getCart(),
      });
    } catch (err) {
      console.error(err);
    }
  }

  addToCart = (item) => {
    const alreadyInCart = this.state.cartItems.findIndex(
      (product) => product.id === item.id
    );
    if (alreadyInCart === -1) {
      let updatedItems = this.state.cartItems.concat({
        ...item,
        quantity: 1,
      });
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    }
  };

  deleteItemFromCart = (productToDeleteId) => {
    const filteredItems = this.state.cartItems.filter(
      (product) => product.id !== productToDeleteId
    );
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
  };
  modalAction = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
    console.log(this.state.showModal);
  };

  //Bring over search bar

  render() {
    const button_styles = {
      position: "relative",
      zIndex: 1,
    };
    const { brand, items, cartItems } = this.state;
    // const { items } = this.state;
    // console.log(items);
    return (
      <div className="products-container">
        <h1 className="products-title">The goods</h1>
        {/* Cart Items */}
        <div className="products-cart">
          Cart
          <h4>Items: {cartItems.length}</h4>
          {cartItems.map((product) => (
            <div key={product.id}>
              {/* arry.push(item.name) */}
              <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>
                  {product.name} x {product.quantity} - $
                  {(product.quantity * product.price).toFixed(2)}
                  <button
                    onClick={() => this.deleteItemFromCart(product.id)}
                  ></button>
                </h3>
                <h3>
                  {cartItems.length === 0 && <h3>Please select some items</h3>}
                </h3>
              </div>
            </div>
          ))}
          <h3> Total: {calculatePrice(cartItems)}</h3>
        </div>

        <div className="map-container">
          {items.map((item) => (
            <div key={item.id} className="products-items">
              <div key={item.id}></div>
              <img src={`${apiUrl}${item.image[0].url}`} alt="item pic"></img>
              <h3>
                {item.name}, ${item.price}
              </h3>
              <button onClick={() => this.addToCart(item)}>Add to cart</button>
              <button>Details</button>
            </div>
          ))}
        </div>
        <div style={button_styles}>
          <button onClick={this.modalAction}>Open modal</button>
          <Modal open={this.state.showModal}>Cart goes here</Modal>
        </div>
      </div>
    );
  }
  f;
}

export default Products;
