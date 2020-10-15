import React, { Component } from "react";

import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class ProductTypes extends Component {
  state = {
    brands: [],
    searchTerm: "",
    loadingBrands: true,
  };
  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              id
              name
              description
              image {
                url
              }
            }
          }`,
        },
      });
      console.log(response);
      this.setState({ brands: response.data.brands, loadingBrands: false });
    } catch (err) {
      console.error(err);
      this.setState({ loadingBrands: false });
    }
  }
  render() {
    const { brands } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          // flexWrap: "wrap",
          flexDirection: "column",
          height: "100vh",
          flexBasis: "100%",
        }}
      >
        {brands.map((brand) => (
          <div style={{ fontSize: "15vw", height: "20%" }}>{brand.name}</div>
        ))}
      </div>
    );
  }
}

export default ProductTypes;
