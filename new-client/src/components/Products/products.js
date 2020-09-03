import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
// prettier-ignore
// calculatePrice,
import {  setCart, getCart } from "../../utils/index";
// import { Link } from "react-router-dom";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Products extends React.Component {
  state = {
    items: [],
    brand: "",
    cartItems: [],
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
    const alreadyInCart = this.state.cartItems.findIndex((item) => item.id);

    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
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

  deleteItemFromCart = (itemToDeleteId) => {
    const filteredItems = this.state.cartItems.filter(
      (item) => item.id !== itemToDeleteId
    );
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
  };
  //Bring over search bar

  render() {
    // const { brand, items, cartItems } = this.state;
    const { items } = this.state;
    console.log(items);
    return (
      <div>
        <h1>Products page</h1>
        {items.map((item) => (
          <div>
            <div key={item.id}></div>
            <img src={`${apiUrl}${item.image[0].url}`} alt="item pic"></img>
            <h1>
              {item.name}, {item.description}, ${item.price}
            </h1>
            <button onClick={() => this.addToCart(item)}></button>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
