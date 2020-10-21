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
  const white = {
    textDecoration: "none",
    color: "white",
  };
  const black = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div style={typeContainer}>
      {items.map((item) => (
        <>
          <Link
            to={`/4`}
            style={{
              color: item.id == 4 ? "white" : "black",
              textDecoration: "none",
            }}
          >
            <h3>{item.one}</h3>
          </Link>
          <Link
            to={`/5`}
            style={{
              color: item.id == 4 ? "white" : "black",
              textDecoration: "none",
            }}
          >
            <h3>{item.two}</h3>
          </Link>
          <Link
            to={`/5`}
            style={{
              color: item.id == 4 ? "white" : "black",
              textDecoration: "none",
            }}
          >
            <h3>{item.three}</h3>
          </Link>
          <Link
            to={`/6`}
            style={{
              color: item.id == 4 ? "white" : "black",
              textDecoration: "none",
            }}
          >
            <h3>{item.four}</h3>
          </Link>
        </>
      ))}
    </div>
  );
};

export default KindNav;

// function KindNav(props) {
//   const { items } = props;
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         order: "1",
//         justifyContent: "space-around",
//         paddingLeft: "25%",
//         paddingRight: "25%",
//         // maxWidth: "50%",
//       }}
//     >
//       {this.items.map((item) => (
//         <div></div>
//       ))}
//       <Link to={`/4`} style={{ textDecoration: "none", color: "black" }}>
//         <h3>a</h3>
//       </Link>
//       <Link to={`/5`} style={{ textDecoration: "none", color: "black" }}>
//         <h3>a</h3>
//       </Link>{" "}
//       <Link to={`/5`} style={{ textDecoration: "none", color: "black" }}>
//         <h3>a</h3>
//       </Link>{" "}
//       <Link to={`/6`} style={{ textDecoration: "none", color: "black" }}>
//         <h3>a</h3>
//       </Link>
//     </div>
//   );
// }

// export default KindNav;
