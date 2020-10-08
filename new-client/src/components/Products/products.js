import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import "./products.css";
import MainNavigation from "../Navigation/MainNavigation";
import { CSSTransition } from "react-transition-group";
// calculatePrice,
import { setCart, getCart } from "../../utils/index";
import Footer from "../LayoutElements/Footer";
import { Link } from "react-router-dom";
// Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

  // One button toggles boolean true, and adds an integer to singluarItem. another button passes in 0 to singularItem and toggles false

  closerLook = (itemId) => {
    this.setState({ singleItemId: itemId }, () => {
      console.log(this.state.singleItemId);
    });
    // this.setState((prevState) => ({
    //   singularProduct: !prevState.singularProduct,
    // }));
    // console.log(this.state.singularProduct, this.state.singleItemId);
  };

  closeDetail = () => {
    this.setState({ singleItemId: 0 }, () => {
      console.log(this.state.singleItemId);
    });
  };

  //Bring over search bar

  render() {
    const button_styles = {
      position: "relative",
      zIndex: 1,
    };
    // const { brand, items, cartItems } = this.state;
    const { items } = this.state;
    return (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <>
          {/* <Header /> */}
          <MainNavigation />
          {this.state.singleItemId > 0 ? <h1>zzzzzas</h1> : <h1>asdf</h1>}
          <button></button>
          <div className="products-container">
            <div className="map-container">
              {items.map((item) => (
                <Card style={{ margin: "25px" }}>
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
                  <CardActions>
                    <Button
                      onClick={() => this.addToCart(item)}
                      size="small"
                      color="primary"
                    >
                      Add to cart
                    </Button>

                    <Button
                      onClick={() => this.closerLook(item.id)}
                      size="small"
                      color="primary"
                    >
                      Closer lಠ ಠk
                    </Button>
                    <Button
                      onClick={() => this.closeDetail()}
                      size="small"
                      color="primary"
                    >
                      Close it
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
          <Footer />
        </>
      </CSSTransition>
    );
  }
}

export default Products;
