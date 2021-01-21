import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import "./DrawerToggleButton.css";
import { getCart, calculateQuantity } from "../../../utils/index";

const DrawerToggleButton = (props) => {
  const [cartItems, setCartItems] = useState(getCart());

  return (
    <div style={{ color: "white", cursor: "pointer" }} onClick={props.click}>
      <Badge badgeContent={calculateQuantity(cartItems)} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default DrawerToggleButton;
