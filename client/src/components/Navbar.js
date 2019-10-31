import React from 'react'
import { Box, Text, Heading, Image, Button } from 'gestalt'
import { getToken, clearToken, clearCart } from '../utils'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  handleSignout = () => {
    clearToken()
    clearCart()
    this.props.history.push('/')
  }

  render() {
    return getToken() !== null ? (
      <AuthNav handleSignout={this.handleSignout} />
    ) : (
      <UnAuthNav />
    )
  }
}

const AuthNav = ({ handleSignout }) => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='around'
    height={70}
    color='midnight'
    padding={1}
    shape='roundedBottom'
  >
    {/* Checkout Link */}
    <NavLink activeClassName='active' to='/checkout'>
      <Text size='xl' color='white'>
        Checkout
      </Text>
    </NavLink>

    {/** Title And Logo */}
    <NavLink activeClassName='active' exact to='/'>
      <Box display='flex' alignItems='center'>
        <Box margin={2} height={50} width={50}>
          <Image
            alt='PieceHaHa Logo'
            naturalHeight={1}
            naturalWidth={1}
            src='http://hammsarborcare.com/wp-content/uploads/2014/02/1129_tree_logo.png'
          />
        </Box>
        <Heading size='xs' color='orange'>
          Inhabit Furniture and Design
        </Heading>
      </Box>
    </NavLink>

    {/* Singout Button */}
    <Button
      onClick={handleSignout}
      color='transparent'
      text='Sign Out'
      inline
      size='md'
    />
  </Box>
)

const UnAuthNav = () => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='around'
    height={70}
    color='midnight'
    padding={1}
    shape='roundedBottom'
  >
    {/* Sing In Link */}
    <NavLink activeClassName='active' to='/signin'>
      <Text size='xl' color='white'>
        Sign in
      </Text>
    </NavLink>

    {/** Title And Logo */}
    <NavLink activeClassName='active' exact to='/'>
      <Box display='flex' alignItems='center'>
        <Box margin={2} height={50} width={50}>
          <Image
            alt='PieceHaHa Logo'
            naturalHeight={1}
            naturalWidth={1}
            src='./icons/logo.svg'
          />
        </Box>
        <Heading size='xs' color='orange'>
          PieceHaHa
        </Heading>
      </Box>
    </NavLink>

    {/* Sing Up Link */}
    <NavLink activeClassName='active' to='/signup'>
      <Text size='xl' color='white'>
        Sign up
      </Text>
    </NavLink>
  </Box>
)
export default withRouter(Navbar)
