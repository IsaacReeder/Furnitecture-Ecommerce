import React from "react";
import "./product-types.css";
import { Component } from "react";

import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class productTypes extends Component {
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

  handleChange = ({ value }) => {
    this.setState({ searchTerm: value });
  };

  filteredBrands = ({ searchTerm, brands }) => {
    return brands.filter((brand) => {
      return (
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };
  render() {
    const { searchTerm, loadingBrands } = this.state;
    return (
      <div>
        <div className="sign-out-container">
          <h2 className="verticle-sign-out">Sign-Out</h2>
          <div className="sign-out"></div>
        </div>
        <div className="container">
          <div className="giffy">Furniture</div>
          <div className="item" key={brand.id}>
            this.filteredBrands(this.state).map((brand) => (
            <img src={`${apiUrl}${brand.image[0].url}`}></img>
            <h2>{brand.name}</h2>
            <h2>{brand.description}</h2>
            <a to={`/${brand.id}`}>See Items</a>
          </div>
          {/* <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div> */}
        </div>
        )
      </div>
    );
  }
}

export default productTypes;
