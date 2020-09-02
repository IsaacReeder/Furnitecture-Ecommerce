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
        <React.Fragment>
          {/* <div className="sign-out-container">
          <h2 className="verticle-sign-out">Sign-Out</h2>
          <div className="sign-out"></div>
        </div>
        <div className="container">
          <div className="giffy">Furniture</div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div> */}
          {this.filteredBrands(this.state).map(
            (brand) => (
              console.log(`${apiUrl}${brand.image[0].url}`, this.state),
              (
                // <Box paddingY={4} margin={2} width={200} key={brand.id}>
                // <img src={`${apiUrl}${brand.image[0].url}`}></img>
                // {brand.name}
                // <Text>{brand.description}</Text>
                // <Link to={`/${brand.id}`}>See Items</Link>
                <div className="container" key={brand.id}>
                  {/* <div className="item"> */}
                  <img
                    className="item"
                    src={`${apiUrl}${brand.image[0].url}`}
                  ></img>
                  <h1>
                    {brand.name}, {brand.description}
                  </h1>
                  <a to={`/${brand.id}`}>TO</a>
                </div>
              )
              // </div>
            )
          )}
          {/* <Spinner show={loadingBrands} accessibilityLabel="Loading Spinner" /> */}
        </React.Fragment>
      </div>
    );
  }
}

export default productTypes;
