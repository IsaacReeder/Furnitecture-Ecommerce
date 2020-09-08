import React, { Component } from "react";
import { setCart, getCart, calculatePrice } from "../../utils/index";
import "./Cart.css";

class Cart extends Component {
  state = {
    cartItems: getCart(),
  };
  deleteItemFromCart = (productToDeleteId) => {
    const filteredItems = this.state.cartItems.filter(
      (product) => product.id !== productToDeleteId
    );
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
  };
  render() {
    return (
      <>
        <div className="products-cart">
          <div className="cart-left-section">
            Bag
            <h4>Items: {this.state.cartItems.length}</h4>
            {this.state.cartItems.map((product) => (
              <div key={product.id}>
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  Quantity {product.quantity} - $
                  {(product.quantity * product.price).toFixed(2)}
                </div>
                <h3>
                  <div onClick={() => this.deleteItemFromCart(product.id)}>
                    <h4>Remove</h4>
                  </div>
                </h3>
                <br />
                <h3>
                  {this.state.cartItems.length === 0 && (
                    <h3>Please select some items</h3>
                  )}
                </h3>
              </div>
            ))}
          </div>
          <div className="cart-right-section">
            <h3> Total: {calculatePrice(this.state.cartItems)}</h3>
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
