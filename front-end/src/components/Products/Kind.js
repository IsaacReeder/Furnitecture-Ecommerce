import React from "react";
import { Link } from "react-router-dom";

const Kind = (props) => {
  const { onMouseEnter, onMouseLeave, isHovering, text, id } = props;
  return (
    <div
      key={id}
      style={{
        fontSize: "12vw",
        // height: "20%",
        cursor: "pointer",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={`/${id}`} style={{ textDecoration: "none", color: "black" }}>
        {text} {isHovering && ">>"}
      </Link>
    </div>
  );
};

export default Kind;
