import React, { Component } from 'react';
import QuakeList from 'screen/QuakeList'
import 'App.css';

//router here!

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quakes React</h1>
        </header>
        <QuakeList />
      </div>
    );
  }
}

export default App;
