import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { JuliusButton, DojoButton } from './atoms/button'
import MainTemplate from './templates/main'
import CustomPaginationActionsTable from "./tableExample"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableRows: []
    };

    this.getFinancialCycles = this.getFinancialCycles.bind(this);
  }


  render() {
    return (
      <div className="App">
        <MainTemplate />

        <DojoButton onClick={this.getFinancialCycles}>TESTE</DojoButton>
        <CustomPaginationActionsTable 
          data={{
                "titles": ["dtInsert", "gatewayStan", "cycleType", "amount", "cycleStatus"],
                "rows": this.state.tableRows
            }}
          />
      </div>
    );
  }

  getFinancialCycles() {
    
    var url = 'http://107.23.28.111:8083/v1/financial_cycles/search?limit=20&offset=0&order_by=-dtInsert&filter=,cycleType__nin:ACH_CHECK%3APRE_AUTHORIZATION_EXPIRATION';
    var contentType = 'application/json';
    var authorization = 'eyJraWQiOiJVU0VSIiwidHlwIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzbHVnVXNlciI6IjY5RTgzNEIyQjRCMDRFMUNCNjI1QjU5RkY1MEQzREU0IiwiaXNzIjoiZ2Z1Y2hzK2dpZ2FudGVAbXV4aS5jb20uYnIiLCJwZXhwIjoxNjE5ODM4MDAwLCJleHAiOjE1NzA4NTExMDB9.Y2GpvL-Vof-rkCPAxESmPxg2iQKWcuM6yoRA2XLhyWc-d2F7Oko90mUCw8KpNr_i7wP6rv03ks4j09wBYnaCNw';
    var xCustomer = '2B70D53FE85541188816CAB2497586D4';
  
    const request_config = {
        headers: {
            'Accept': contentType,
            'Content-Type': contentType,
            'X-Customer': xCustomer,
            'Authorization': authorization
        }
    };
  
    fetch(url, request_config)
      .then((result) => {
          result.json().then(json => {
              console.log(json.objects);
              this.setState({tableRows: json.objects});
          });
      });
  }

}

export default App;
