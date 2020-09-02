import React from "react";
import "./product-types.css";
import { Component } from "react";
import { Link } from "react-router-dom";

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
        <React.Fragment>
          <div className="sign-out-container">
            <div className="sign-out"></div>
            <h1 className="verticle-sign-out">Sign-Out</h1>
          </div>
          <div className="container">
            {this.filteredBrands(this.state).map(
              (brand) => (
                console.log(`${apiUrl}${brand.image[0].url}`, this.state),
                (
                  <div className="item-wrangler">
                    <h1>{brand.name}</h1>
                    {/* , {brand.description} */}
                    <img
                      className="item"
                      key={brand.id}
                      src={`${apiUrl}${brand.image[0].url}`}
                    ></img>
                    <Link to={`/${brand.id}`}>See Items</Link>
                  </div>
                )
              )
            )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default productTypes;
