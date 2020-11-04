import React from "react";
import { Component } from "react";
import { setList, getList } from "../../utils/index";

const apiUrl = process.env.API_URL || "http://localhost:1337";

class Wishlist extends Component {
  state = {
    wishlist: getList(),
  };
  deleteFromWishlist = (productToDeleteId) => {
    const filteredItems = this.state.wishlist.filter(
      (product) => product.id !== productToDeleteId
    );
    this.setState({ wishlist: filteredItems }, () => setList(filteredItems));
  };
  render() {
    const { wishlist } = this.state;
    return (
      <div>
        {wishlist.map((listItem) => (
          <p>{listItem.name}asdfd</p>
        ))}
        <h2>asdf</h2>
      </div>
    );
  }
}

export default Wishlist;
