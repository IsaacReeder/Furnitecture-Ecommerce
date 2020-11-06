import React, { Component } from "react";
import Kind from "./Kind";

import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class ProductTypes extends Component {
  state = {
    brands: [],
    searchTerm: "",
    loadingBrands: true,
    isHovered: {},
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
      // console.log(response);
      this.setState({ brands: response.data.brands, loadingBrands: false });
    } catch (err) {
      console.error(err);
      this.setState({ loadingBrands: false });
    }
  }

  handleMouseEnter = (i) => {
    console.log("mouse enter");
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [i]: true } };
    });
  };
  handleMouseExit = (i) => {
    this.setState((prevState) => {
      return { isHovered: { ...prevState.isHovered, [i]: false } };
    });
  };
  render() {
    const { brands, isHovered } = this.state;
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            height: "75vh",
            flexBasis: "100%",
          }}
        >
          {brands.map((brand, i) => (
            <>
              <Kind
                key={brand.id}
                onMouseEnter={() => this.handleMouseEnter(i)}
                onMouseLeave={() => this.handleMouseExit(i)}
                isHovering={isHovered[i]}
                text={brand.name}
                id={brand.id}
              ></Kind>
              {/* <Link to={`${brand.id}`}>asdf</Link> */}
            </>
          ))}
        </div>
      </>
    );
  }
}

export default ProductTypes;
