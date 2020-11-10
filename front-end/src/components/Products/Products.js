import React, { Component } from "react";
import { getCart, setCart, getList, setList } from "../../utils/index";
import "./Products.css";
import KindNav from "./KindNav";

import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Products extends Component {
  state = {
    items: [],
    brand: "",
    cartItems: getCart(),
    listItems: getList(),
    singleItemId: 0,
  };
  //   brand(id: "${this.props.match.params.brandId}")
  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brand(id: "${this.props.match.params.brandId}") {
            id
            name
            items {
              id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`,
        },
      });
      this.setState({
        items: response.data.brand.items,
        brand: response.data.brand.name,
        id: response.data.brand.id,
        cartItems: getCart(),
      });
    } catch (err) {
      console.error(err);
    }
  }
  closerLook = (itemId) => {
    this.setState({ singleItemId: itemId }, () => {
      console.log(this.state.singleItemId);
    });
  };

  closeDetail = () => {
    this.setState({ singleItemId: 0 }, () => {
      console.log(this.state.singleItemId);
    });
  };
  filteredBrands = ({ searchTerm, brands }) => {
    return brands.filter((brand) => {
      return (
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };
  addToCart = (item) => {
    const alreadyInCart = this.state.cartItems.findIndex(
      (product) => product.id === item.id
    );
    console.log(alreadyInCart);
    if (alreadyInCart === -1) {
      let updatedItems = this.state.cartItems.concat({
        ...item,
        quantity: 1,
      });
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    }
  };
  addToWishList = (savedItem) => {
    const alreadyOnList = this.state.listItems.findIndex(
      (item) => item.id === savedItem.id
    );
    if (alreadyOnList === -1) {
      let updatedItems = this.state.listItems.concat({
        ...savedItem,
        quantity: 1,
      });
      this.setState({ listItems: updatedItems }, () => setList(updatedItems));
      console.log(this.state.listItems);
    } else {
      console.log("Already on wishlist");
      // SMALL POP UP SAYING ALREADY ON WISHLIST
      console.log(this.state.listItems);
    }
  };

  render() {
    const { items, singleItemId, id } = this.state;

    // this.props.match.params.brandId .  This goes above instead of 4
    return (
      <>
        <div style={{ paddingTop: "0%", marginTop: "-15%" }}>
          {singleItemId > 0 ? (
            ""
          ) : (
            <KindNav
              items={[
                {
                  id: id,
                  three: "Paintings",
                  four: "Illustrations",
                  five: "Sculpture",
                  six: "Furniture",
                },
              ]}
            />
          )}
          {/* (. ͡👁️ ͜ ʖ ͡👁️.) */}
          {/* Closer look */}
          {singleItemId > 0 ? (
            <div style={{ display: "flex" }}>
              {items
                .filter((item) => item.id.includes(singleItemId))
                .map((focusItem) => (
                  <>
                    <img
                      src={`${apiUrl}${focusItem.image[0].url}`}
                      alt="item pic"
                      style={{ minHeight: "100%", width: "70%" }}
                    ></img>
                    <div
                      style={{
                        flexDirection: "row",
                        alignContent: "flex-start",
                        paddingRight: "5%",
                        paddingLeft: "5%",
                        color: "white",
                      }}
                    >
                      <h1
                        style={{
                          width: "100%",
                          alignContent: "flex-start",
                          fontWeight: "bold",
                          marginTop: "-5%",
                          marginBottom: "10%",
                        }}
                      >
                        {focusItem.name}
                      </h1>

                      <h2 style={{ width: "100%", marginBottom: "10%" }}>
                        {focusItem.description}
                      </h2>
                      <div style={{ width: "100%", marginBottom: "10%" }}>
                        ${focusItem.price}
                      </div>

                      <button
                        style={{
                          borderRadius: "15px",
                          border: "none",
                          marginRight: "5%",
                          padding: "2%",
                        }}
                        onClick={() => this.addToCart(focusItem)}
                      >
                        Add to cart
                      </button>
                      <i
                        onClick={() => this.addToWishList(focusItem)}
                        style={{ fontSize: "1.5em" }}
                        className="fas fa-heart"
                      ></i>
                      <button
                        style={{ width: "100%" }}
                        onClick={() => this.closeDetail()}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ))}
            </div>
          ) : (
            <div className="grid2x2">
              {/* Products in total */}
              {items.map((item) => (
                <>
                  <div className="box box1">
                    <img
                      src={`${apiUrl}${item.image[0].url}`}
                      alt="item pic"
                      style={{ minHeight: "70%", width: "90%" }}
                    ></img>
                    <i
                      className="fas fa-plus"
                      onClick={() => this.closerLook(item.id)}
                      style={{
                        fontSize: "35px",
                        color: "hsl(14, 84%, 57%)",
                        backgroundColor: "transparent",
                        position: "absolute",
                        marginLeft: "23%",
                        marginTop: "15%",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}
export default Products;
