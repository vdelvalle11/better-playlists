import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let firstName = 'Victor'
    let lastName = 'Del Valle'
    let red = '#FF1212'
    let nameStyle = {color: red}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is <span style={nameStyle}>{firstName} {lastName}</span> and I am learning react!
          </p>
          <p>
          I am only adding this to test my atom setup
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
