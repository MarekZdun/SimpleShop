import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
