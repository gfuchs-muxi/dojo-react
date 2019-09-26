import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { JuliusButton, DojoButton } from './atoms/button'
import MainTemplate from './templates/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainTemplate />

        <JuliusButton />
        <DojoButton>TESTE</DojoButton>
      </div>
    );
  }
}

export default App;
