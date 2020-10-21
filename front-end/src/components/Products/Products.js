import React, { Component } from "react";
import { getCart } from "../../utils/index";
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
    singleItemId: 0,
  };
  //   brand(id: "${this.props.match.params.brandId}")
  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
              brand(id: "4") {
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
        cartItems: getCart(),
      });
      console.log(this.items);
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

  render() {
    const { items, singleItemId } = this.state;
    const { id } = 4;
    // this.props.match.params.brandId .  This goes above instead of 4
    return (
      <>
        <div style={{ padding: "10%" }}>
          <KindNav
            items={[
              {
                id: 4,
                one: "Sculpture",
                two: "Furniture",
                three: "Drawings",
                four: "Paintings",
              },
            ]}
          />
          {/* (. ͡👁️ ͜ ʖ ͡👁️.) */}
          {/* why hello there. */}
          {singleItemId > 0 ? (
            <div>
              {items
                .filter((item) => item.id.includes(singleItemId))
                .map((focusItem) => (
                  <>
                    <img
                      src={`${apiUrl}${focusItem.image[0].url}`}
                      alt="item pic"
                      style={{ minHeight: "100%", width: "70%" }}
                    ></img>
                    <button onClick={() => this.closeDetail()}>Back</button>
                  </>
                ))}
            </div>
          ) : (
            <div className="grid2x2">
              {items.map((item) => (
                <>
                  <div className="box box1">
                    <img
                      src={`${apiUrl}${item.image[0].url}`}
                      alt="item pic"
                      style={{ minHeight: "70%", width: "100%" }}
                    ></img>
                    <i
                      className="fas fa-plus"
                      onClick={() => this.closerLook(item.id)}
                      style={{
                        fontSize: "50px",
                        color: "hsl(14, 84%, 57%)",
                        backgroundColor: "transparent",
                        position: "absolute",
                        marginLeft: "30%",
                        marginTop: "23%",
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
