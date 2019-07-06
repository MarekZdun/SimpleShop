import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
import Cart from './components/Cart'
import SearchResult from './components/SearchResult'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/products/:id' component={ProductDetails}></Route>
            <Route path='/productlist' component={ProductList}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/searchresult' component={SearchResult}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
