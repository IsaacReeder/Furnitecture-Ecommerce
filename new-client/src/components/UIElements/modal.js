import React from "react";
import Cart from "../Cart/Cart";

const modal_styles = {
  position: "fixed",
  top: "50%",
  left: " 50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "25%",
  zIndex: 1000,
};

const overlay_styles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="cart-wrangler">
        <div style={overlay_styles} />
        <div style={modal_styles}>
          <Cart onClose={onClose} />
          {children}
        </div>
      </div>
    </>
  );
}
