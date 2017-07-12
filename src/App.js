import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import StartBlock from './components/StartBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/><StartBlock />
        <Main />

      </div>

    );
  }
}

export default App;
