import React, { Component } from 'react';
import './App.css';
let primaryColor = {color: 'White'}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={primaryColor}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
      </div>
    );
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{display: "inline-block", width: "40%"}}>
        <h2 style={primaryColor}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Apply Filters"/>
        <span style={primaryColor}>Filter</span>
      </div>
    );
  }
}

export default App;
