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
        <CustomPaginationActionsTable 
          data={{
                "titles": ["title", "title2"],
                "rows": [{"title": "teste", "title2": "aaaa"}, 
                       {"title": "teste", "title2": "aaaa"}, 
                       {"title": "teste", "title2": "aaaaaa"}]
            }}
          />
      </div>
    );
  }
}

export default App;
