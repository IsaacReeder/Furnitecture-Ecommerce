import React from "react";

export default function Button({ onClose }) {
  return (
    <div
      style={{
        fontSize: "3em",
        color: "black",
        cursor: "pointer",
        position: "absolute",
        right: ".5rem",
        top: "0",
      }}
    >
      <i className="fas fa-times" onClick={onClose} />
    </div>
  );
}
