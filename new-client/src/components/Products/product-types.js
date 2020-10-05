import React from "react";
import "./product-types.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/R01logo2.gif";
import Footer from "../LayoutElements/Footer";

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
    // const { searchTerm, loadingBrands } = this.state;
    return (
      <div>
        <React.Fragment>
          <div className="sign-out-container">
            <div className="sign-out"></div>
            <h3 className="verticle-sign-out">Sign-Out</h3>
          </div>
          {/* The below gif is an example, not the final asset. 
              It is not an original work.
              it will be replaced at a later stage */}
          {/* <img className="middle-pic" src={logo} alt="loading..." /> */}
          <div className="container">
            {this.filteredBrands(this.state).map((brand) => (
              <div className="item-wrangler" key={brand.id}>
                <h1>{brand.name}</h1>
                {/* , {brand.description} */}
                <img
                  className="item"
                  alt="brand pic"
                  key={brand.id}
                  src={`${apiUrl}${brand.image[0].url}`}
                ></img>
                <Link to={`/${brand.id}`}>
                  <h1>See Items</h1>
                </Link>
              </div>
            ))}
          </div>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default productTypes;
