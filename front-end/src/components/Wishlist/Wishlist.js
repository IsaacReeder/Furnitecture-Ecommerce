import React from "react";
import { Component } from "react";
import { setList, getList } from "../../utils/index";

// const apiUrl = process.env.API_URL || "http://localhost:1337";

class Wishlist extends Component {
  state = {
    wishlist: getList(),
  };
  deleteFromWishlist = (productToDeleteId) => {
    const filteredItems = this.state.wishlist.filter(
      (product) => product.id !== productToDeleteId
    );
    this.setState({ wishlist: filteredItems }, () => setList(filteredItems));
    console.log("deleted");
  };
  render() {
    const { wishlist } = this.state;
    return (
      <div>
        <h1>Wishlist</h1>
        {wishlist.map((listItem) => (
          <p>
            <h3>{listItem.name}</h3>
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
