import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
// import { withRouter } from "react-router-dom";
import {
  getCart,
  // calculatePrice,
  clearCart,
  calculateAmount,
} from "../../utils/index";
import Cart from "../Cart/Cart";
import Success from "./Success";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Checkout extends React.Component {
  state = {
    cartItems: getCart(),
    address: "",
    postalCode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: "",
    orderProcessing: false,
    modal: false,
    success: false,
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() });
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleConfirmOrder = async (event) => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    this.setState({ modal: true });
  };

  handleSubmitOrder = async () => {
    const { cartItems, city, address, postalCode } = this.state;

    const amount = calculateAmount(cartItems);
    // Process order
    this.setState({ orderProcessing: true });
    let token;
    try {
      const response = await this.props.stripe.createToken();
      token = response.token.id;
      await strapi.createEntry("orders", {
        amount,
        items: cartItems,
        city,
        postalCode,
        address,
        token,
      });
      this.setState({ orderProcessing: false, modal: false });
      clearCart();
      this.showToast("Your order has been successfully submitted!", true);
    } catch (err) {
      this.setState({ orderProcessing: false, modal: false });
      this.showToast(err.message);
    }
  };

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  };

  showToast = (toastMessage, redirect = false) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(
      () =>
        this.setState(
          { toast: false, toastMessage: "" },
          // if true passed to 'redirect' argument, redirect home
          () => redirect && this.props.history.push("/")
        ),
      5000
    );
  };

  closeModal = () => this.setState({ modal: false });

  render() {
    // prettier-ignore
    const {  cartItems } = this.state;
    // toast, toastMessage, modal, orderProcessing
    return (
      <div>
        <h1>Checkout</h1>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <>
                <img
                  style={{ width: "10%" }}
                  src={`${apiUrl}${item.image[0].url}`}
                  alt="item pic"
                ></img>
                <h3>{item.name}</h3>
                <h3>
                  Quantity {item.quantity} - $
                  {(item.quantity * item.price).toFixed(2)}
                </h3>
                <h3
                  style={{ borderBottom: "1px solid black", cursor: "pointer" }}
                >
                  <div onClick={() => this.deleteItemFromCart(item.id)}>
                    <h4>Remove</h4>
                  </div>
                </h3>
              </>
            ))}
          </div>
        ) : (
          <>
            <h1>Your cart is empty</h1>
            <h1>Shop</h1>
            <h1>Sign out</h1>
          </>
        )}
        <form>
          <CardElement id="stripe__input" onReady={(input) => input.focus()} />
          <button id="stripe__button" type="submit">
            Submit
          </button>
        </form>

        {this.success && <Success />}
      </div>
    );
  }
}
export default Checkout;
