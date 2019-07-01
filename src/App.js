import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
