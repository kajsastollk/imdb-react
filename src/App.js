import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FetchData from './components/FetchData.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IMDB - Rating</h1>
        </header>
        <p className="App-intro">
          Introtext
        </p>
        <FetchData />
      </div>
    );
  }
}

export default App;
