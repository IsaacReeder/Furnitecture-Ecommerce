import React, { Component } from "react";
import "./SingleProduct.css";
import Strapi from "strapi-sdk-javascript/build/main";
import { getCart } from "../../utils/index";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class SingleProduct extends Component {
  state = {
    items: [],
    brand: "",
    cartItems: getCart(),
  };
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
        cartItems: getCart(),
      });

      console.log(this.items, this.brand);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { items } = this.state;
    const singularItem = this.props.match.params.brandId;
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {items.map((item) => (
          <div alt="image container" style={{ backgroundColor: "yellow" }}>
            {item.id === singularItem && (
              <p>{`${apiUrl}${item.image[0].url}`}</p>
            )}
            <p>{item.id}</p>
          </div>
        ))}

        <div alt="details container" style={{ backgroundColor: "gray" }}>
          asdf
        </div>
      </div>
    );
  }
}
export default SingleProduct;
