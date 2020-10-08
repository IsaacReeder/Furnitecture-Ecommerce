import React from "react";
import "./product-types.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../LayoutElements/Footer";

// Cards
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Strapi from "strapi-sdk-javascript/build/main";
import MainNavigation from "../Navigation/MainNavigation";
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
      <div style={{ paddingTop: "40px" }}>
        <React.Fragment>
          <MainNavigation />}
          <div className="container">
            {this.filteredBrands(this.state).map((brand) => (
              <Card
                style={{
                  minWidth: "40%",
                  minHeight: "40%",
                  // marginTop: "100px",
                  marginBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ display: "flex" }}
                    className="asfd"
                    image={`${apiUrl}${brand.image[0].url}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {brand.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {brand.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/${brand.id}`}>
                    <Button size="small" color="primary">
                      See more
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default productTypes;
