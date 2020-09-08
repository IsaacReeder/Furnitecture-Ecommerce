import React, { Component } from "react";
import { getCart, calculatePrice } from "../../utils/index";

class Cart extends Component {
  state = {
    cartItems: getCart(),
  };
  render() {
    return (
      <>
        <div className="products-cart">
          Shopping Cart
          <h4>Items: {this.state.cartItems.length}</h4>
          {this.state.cartItems.map((product) => (
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
                  {this.state.cartItems.length === 0 && (
                    <h3>Please select some items</h3>
                  )}
                </h3>
              </div>
            </div>
          ))}
          <h3> Total: {calculatePrice(this.state.cartItems)}</h3>
        </div>
      </>
    );
  }
}
export default Cart;
