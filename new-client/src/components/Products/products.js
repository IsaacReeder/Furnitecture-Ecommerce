import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import "./Products.css";
import MainNavigation from "../Navigation/MainNavigation";
import { CSSTransition } from "react-transition-group";
// calculatePrice,
import { setCart, getCart } from "../../utils/index";
import Footer from "../LayoutElements/Footer";
// Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Products extends React.Component {
  state = {
    items: [],
    brand: "",
    cartItems: getCart(),
    showModal: false,
    singularProduct: 0,
    singleItemId: 0,
    searchTerm: "",
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
    } catch (err) {
      console.error(err);
    }
  }

  addToCart = (item) => {
    const alreadyInCart = this.state.cartItems.findIndex(
      (product) => product.id === item.id
    );
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

  modalAction = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
    console.log(this.state.showModal);
  };

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

  handleChange = ({ value }) => {
    this.setState({ searchTerm: value });
  };

  filteredItems = ({ searchTerm, items }) => {
    return items.filter((item) => {
      console.log(
        `name is ${item.name.toLowerCase().includes(searchTerm.toLowerCase())}`
      );
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  render() {
    const { items, searchTerm } = this.state;

    return (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <>
          {/* <Header /> */}
          <MainNavigation />
          {this.state.singleItemId > 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                height: "90vh",
                paddingTop: "3%",
                paddingBottom: "1%",
              }}
            >
              {items
                .filter((item) => item.id.includes(`2`))
                .map((singleItem) => (
                  <>
                    {/* Left Side */}
                    <div alt="image container">
                      <img
                        src={`${apiUrl}${singleItem.image[0].url}`}
                        alt="item pic"
                        style={{ minHeight: "70%" }}
                      ></img>
                      <Button
                        onClick={() => this.closeDetail()}
                        size="small"
                        color="primary"
                      >
                        <h4>Close</h4>
                      </Button>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => this.addToCart(singleItem)}
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </div>
                    {/* Right side */}
                    <div
                      alt="details container"
                      style={{
                        display: "flex",
                        flexFlow: "wrap",
                        alignItems: "flex-start",
                        alignContent: "flex-start",
                        alignContent: "spaceBetween",
                        justifyContent: "center",
                        width: "25%",
                      }}
                    >
                      <div
                        style={{
                          flexBasis: "100%",
                          height: "5%",
                          display: "flex",
                          flexDirection: "column",
                          flexBasis: "100%",
                          flex: 1,
                        }}
                      >
                        <h1>{singleItem.name}</h1>
                      </div>
                      <div
                        style={{
                          flexBasis: "100%",

                          height: "5%",
                          display: "flex",
                        }}
                      >
                        <h1>${singleItem.price}</h1>
                      </div>

                      <div
                        style={{
                          flexBasis: "100%",

                          height: "5%",
                          display: "flex",
                        }}
                      >
                        <h2>{singleItem.description}</h2>
                      </div>
                      <div
                        style={{
                          flexBasis: "100%",

                          height: "20%",
                          display: "flex",
                        }}
                      ></div>
                    </div>
                  </>
                ))}
            </div>
          ) : (
            <div className="products-container">
              <div className="map-container">
                {/* SearchField */}
                <form
                  style={{
                    position: "fixed",
                    marginTop: "-4%",
                    marginLeft: "-45%",
                    zIndex: "10000",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      backgroundColor: "white",
                      borderRadius: "2%",
                    }}
                    onChange={this.handleChange}
                    value={searchTerm}
                    color="primary"
                    id="standard-basic"
                    label="Search"
                  />
                </form>
                <SearchIcon
                  fontSize="large"
                  style={{
                    color: "white",
                    position: "fixed",
                    marginTop: "-3.4%",
                    marginLeft: "-14%",
                    zIndex: "10000",
                  }}
                />
                {this.filteredItems(this.state).map((item) => (
                  <Card style={{ margin: "25px" }} key={item.id}>
                    <CardActionArea>
                      <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <div key={item.id} className="products-items">
                          <img
                            src={`${apiUrl}${item.image[0].url}`}
                            alt="item pic"
                            onClick={() => this.closerLook(item.id)}
                          ></img>
                        </div>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          ${item.price}, {item.id}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </div>
            </div>
          )}
          <Footer />
        </>
      </CSSTransition>
    );
  }
}

export default Products;
