import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { JuliusButton, DojoButton } from './atoms/button'
import MainTemplate from './templates/main'
import CustomPaginationActionsTable from "./tableExample"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainTemplate />

        <JuliusButton />
        <DojoButton>TESTE</DojoButton>
        <CustomPaginationActionsTable rows={["teste", "teste", "teste"]}/>
      </div>
    );
  }
}

export default App;
