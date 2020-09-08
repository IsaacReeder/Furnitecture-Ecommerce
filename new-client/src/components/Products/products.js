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
          <div
            onClick={this.modalAction}
            style={{
              fontSize: "3em",
              color: "black",
              cursor: "pointer",
              position: "absolute",
              right: "4rem",
              top: "1rem",
            }}
          >
            <i className="fas fa-shopping-cart" />
          </div>
          <Modal open={this.state.showModal} onClose={this.modalAction}></Modal>
        </div>
      </div>
    );
  }
  f;
}

export default Products;
