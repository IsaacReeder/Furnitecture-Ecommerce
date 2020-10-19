import React from "react";

const Kind = (props) => {
  const { onMouseEnter, onMouseLeave, isHovering, text } = props;
  return (
    <div
      style={{ fontSize: "12vw", height: "20%" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text} {isHovering && "asdf"}
    </div>
  );
};

export default Kind;
