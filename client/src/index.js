import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { getToken } from './utils'
import 'gestalt/dist/gestalt.css'
import App from './components/App'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Checkout from './components/Checkout'
import Items from './components/Pieces'

// import * as serviceWorker from './serviceWorker'
import { unregister } from './serviceWorker'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path='/' />
        <Route component={Signin} path='/signin' />
        <Route component={Signup} path='/signup' />
        <PrivateRoute component={Checkout} path='/checkout' />
        <Route component={Items} path='/:typeId' />
      </Switch>
    </React.Fragment>
  </Router>
)
ReactDOM.render(<Root />, document.getElementById('root'))
// serviceWorker()
unregister()
