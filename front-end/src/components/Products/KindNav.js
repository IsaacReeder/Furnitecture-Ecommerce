import React from "react";
import { Link } from "react-router-dom";

const KindNav = ({ items, id }) => {
  const typeContainer = {
    display: "flex",
    flexDirection: "row",
    order: "1",
    justifyContent: "space-around",
    paddingLeft: "25%",
    paddingRight: "25%",
  };

  return (
    <div style={typeContainer}>
      {items.map((item) => (
        <>
          <Link
            to={`/3`}
            style={{
              color: item.id === 3 ? "white" : "black",
              textDecoration: "none",
              fontSize: "1.5vw",
            }}
          >
            <h3>{item.three}</h3>
          </Link>
          <Link
            to={`/4`}
            style={{
              color: item.id === 4 ? "white" : "black",
              textDecoration: "none",
              fontSize: "1.5vw",
            }}
          >
            <h3>{item.four}</h3>
          </Link>
          <Link
            to={`/5`}
            style={{
              color: item.id === 5 ? "white" : "black",
              textDecoration: "none",
              fontSize: "1.5vw",
            }}
          >
            <h3>{item.five}</h3>
          </Link>
          <Link
            to={`/6`}
            style={{
              color: item.id === 6 ? "white" : "black",
              textDecoration: "none",
              fontSize: "1.5vw",
            }}
          >
            <h3>{item.six}</h3>
          </Link>
        </>
      ))}
    </div>
  );
};

export default KindNav;
