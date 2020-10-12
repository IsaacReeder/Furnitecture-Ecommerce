import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { setCart, getCart } from "../../utils/index";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

const SingleProduct = (props) => {
  //   const { items, singleItemId } = props; note: un-comment this line and change line 24 to .includes(singleItemId) to return to props
  const items = getCart();
  //   const { addToCart } = props;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "90vh",
          paddingTop: "3%",
          paddingBottom: "1%",
        }}
      >
        {items
          .filter((item) => item.id.includes(`2`))
          .map((singleItem) => (
            <>
              {/* Left Side */}
              <div alt="image container" style={{ backgroundColor: "yellow" }}>
                <img
                  src={`${apiUrl}${singleItem.image[0].url}`}
                  alt="item pic"
                  style={{ minHeight: "70%" }}
                ></img>
                <Button
                  onClick={() => this.closeDetail()}
                  size="small"
                  color="primary"
                >
                  Close it
                </Button>
              </div>
              {/* Right side */}
              <div
                alt="details container"
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  justifyContent: "center",
                  border: "1px solid black",
                  height: "80%vh",
                  width: "25%",
                  // alignContent: "center",
                  // backgroundColor: "gray",
                }}
              >
                <div
                  style={{
                    flexBasis: "100%",
                    // backgroundColor: "green",
                    height: "5%",
                    display: "flex",
                    flexDirection: "column",
                    flexBasis: "100%",
                    flex: 1,
                  }}
                >
                  <h1>{singleItem.name}</h1>
                </div>
                <div
                  style={{
                    flexBasis: "100%",
                    // backgroundColor: "yellow",
                    height: "5%",
                    display: "flex",
                  }}
                >
                  <h1> ${singleItem.price}</h1>
                </div>
                <div
                  style={{
                    flexBasis: "100%",
                    // backgroundColor: "yellow",
                    height: "5%",
                    display: "flex",
                  }}
                >
                  <h1>Quantity: {singleItem.quantity}</h1>
                </div>
                <div
                  style={{
                    flexBasis: "100%",
                    // backgroundColor: "blue",
                    height: "5%",
                    display: "flex",
                    border: "1px solid black",
                    alignContent: "center",
                  }}
                >
                  {/* quantity button that adds to cart. | - | + | */}
                  {/* <button
                    onClick={() => this.addToCart(singleItem)}
                    size="small"
                    color="white"
                  > */}
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="add"
                    onClick={() => this.addToCart(singleItem)}
                  >
                    <AddIcon />
                  </Fab>

                  {/* </button> */}
                </div>
                <div
                  style={{
                    flexBasis: "100%",
                    // backgroundColor: "blue",
                    height: "5%",
                    display: "flex",
                  }}
                >
                  <h3>{singleItem.description}</h3>
                </div>
                <div
                  style={{
                    flexBasis: "100%",
                    // backgroundColor: "blue",
                    height: "5%",
                    display: "flex",
                  }}
                >
                  {/* {singleItem.quantity == 0 ? "SOLD OUT" : ""} */}
                </div>
                <div
                  style={{
                    flexBasis: "100%",
                    // backgroundColor: "blue",
                    height: "5%",
                    display: "flex",
                  }}
                >
                  <p></p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default SingleProduct;
