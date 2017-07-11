import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            what
          </div>
        </div>
        <Main />

      </div>

    );
  }
}

export default App;
