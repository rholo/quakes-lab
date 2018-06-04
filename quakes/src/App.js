import React, { Component } from 'react';
import QuakeList from './screen/QuakeList'
import logo from './logo.svg';
import './App.css';

//router here!

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quakes React</h1>
        </header>
        <p className="App-intro">
          editar <code>src/App.js</code> y nada más!
        </p>
        <QuakeList />
      </div>
    );
  }
}

export default App;
