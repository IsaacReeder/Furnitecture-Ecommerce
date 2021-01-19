import React from "react";
import { Component } from "react";
import { getList, setList, getCart, setCart } from "../../utils/index";

// import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
// const strapi = new Strapi(apiUrl);

// const apiUrl = process.env.API_URL || "http://localhost:1337";

class Wishlist extends Component {
  state = {
    wishlist: getList(),
    cartItems: getCart(),
  };

  deleteFromWishlist = (productToDeleteId) => {
    const filteredItems = this.state.wishlist.filter(
      (product) => product.id !== productToDeleteId
    );
    this.setState({ wishlist: filteredItems }, () => setList(filteredItems));
    console.log("deleted");
  };

  addToCart = (item) => {
    this.deleteFromWishlist(item.id);
    const alreadyInCart = this.state.cartItems.findIndex(
      (product) => product.id === item.id
    );
    console.log(alreadyInCart);
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

  render() {
    const { wishlist } = this.state;
    return (
      <div>
        <h1>Wishlist</h1>
        {wishlist.map((listItem) => (
          <p>
            <img
              src={`${apiUrl}${listItem.image[0].url}`}
              alt="item pic"
              style={{ minHeight: "100%", width: "20%" }}
            ></img>
            <h3>{listItem.name}</h3>
            <button onClick={() => this.addToCart(listItem)}>
              Add to cart
            </button>
            <button onClick={() => this.deleteFromWishlist(listItem.id)}>
              Delete
            </button>
          </p>
        ))}
      </div>
    );
  }
}

export default Wishlist;
