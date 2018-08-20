import React, { Component } from 'react';
import Quakes from 'screen/Quakes';
import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quakes React</h1>
        </header>
        <Quakes />
      </div>
    );
  }
}

export default App;
