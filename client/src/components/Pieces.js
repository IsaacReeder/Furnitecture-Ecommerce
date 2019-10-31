import React from 'react'
import Strapi from 'strapi-sdk-javascript/build/main'
import {
  Box,
  Heading,
  Text,
  Card,
  Button,
  Image,
  Mask,
  IconButton
} from 'gestalt'
import { Link } from 'react-router-dom'
import { calculatePrice, setCart, getCart } from '../utils/index'
const apiUrl = process.env.API_URL || 'http://localhost:1337/'
const strapi = new Strapi(apiUrl)

class Pieces extends React.Component {
  state = {
    pieces: [],
    brand: '',
    cartItems: []
  }

  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            brand(id: "${this.props.match.params.brandId}") {
              _id
              name
              pieces {
                _id
                name
                description
                image {
                  url
                }
                price
              }
            }
          }`
        }
      })
      this.setState({
        pieces: response.data.brand.pieces,
        brand: response.data.brand.name,
        cartItems: getCart()
      })
    } catch (err) {
      console.log(err)
    }
  }

  addToCart = piece => {
    const alreadyInCart = this.state.cartItems.findIndex(
      item => item._id === piece._id
    )

    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...piece,
        quantity: 1
      })
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems))
    } else {
      const updatedItems = [...this.state.cartItems]
      updatedItems[alreadyInCart].quantity += 1
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems))
    }
  }

  deleteItemFromCart = itemToDeleteId => {
    const filteredItems = this.state.cartItems.filter(
      item => item._id !== itemToDeleteId
    )
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems))
  }

  render() {
    const { brand, pieces, cartItems } = this.state
    return (
      <Box
        marginTop={4}
        deisplay='flex'
        justifyContent='center'
        alignItems='start'
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: 'wrap-reverse'
          }
        }}
      >
        {/* Pieces Section */}
        <Box display='flex' direction='column' alignItems='center'>
          {/* Pieces Heading */}
          <Box margin={2}>
            <Heading color='orchid'>{brand}</Heading>
          </Box>
          {/* Pieces */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: '#bdcdd9'
              }
            }}
            wrap
            shape='rounded'
            display='flex'
            justifyContent='center'
            padding={4}
          >
            {pieces.map(piece => (
              <Box paddingY={4} margin={2} width={210} key={piece._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit='cover'
                        alt='Brand'
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${piece.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    direction='column'
                  >
                    <Box marginBottom={2}>
                      <Text bold size='xl'>
                        {piece.name}
                      </Text>
                    </Box>
                    <Text>{piece.description}</Text>
                    <Text color='orchid'>${piece.price}</Text>
                    <Box marginTop={2}>
                      <Text bold size='xl'>
                        <Button
                          onClick={() => this.addToCart(piece)}
                          color='blue'
                          text='Add to Cart'
                        />
                        <Link to={`/${piece._id}`}>See Pieces</Link>
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        {/* User Cart Area */}
        <Box alignSelf='end' marginTop={2} marginLeft={8}>
          <Mask shape='rounded' wash>
            <Box
              display='flex'
              direction='column'
              alignItems='center'
              padding={2}
            >
              {/* User Cart Heading */}
              <Heading align='center' size='sm'>
                Your Cart
              </Heading>
              <Text color='gray' italic>
                {cartItems.length} items selected
              </Text>

              {/* Cart Items */}
              {cartItems.map(item => (
                <Box key={item._id} display='flex' alignItems='center'>
                  <Text>
                    {item.name} X {item.quantity} - $
                    {(item.quantity * item.price).toFixed(2)}
                  </Text>
                  <IconButton
                    accessibilityLabel='Delete Item'
                    icon='cancel'
                    size='sm'
                    iconColor='red'
                    onClick={() => this.deleteItemFromCart(item._id)}
                  />
                </Box>
              ))}

              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                direction='column'
              >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color='red'>Please select some items</Text>
                  )}
                </Box>
                <Text size='lg'>Total: {calculatePrice(cartItems)}</Text>
                <Text>
                  <Link to='/checkout'>Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    )
  }
}

export default Pieces
