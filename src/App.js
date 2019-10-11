import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { JuliusButton, DojoButton } from './atoms/button'
import MainTemplate from './templates/main'
import CustomPaginationActionsTable from "./tableExample"

const App = () => {

  const [tableRows, setTableRows] = useState([]);
  
  const getFinancialCycles = () => {
    console.log('Capivara');
    var baseUrl = 'http://107.23.28.111:8083/v1/financial_cycles/search';
    var contentType = 'application/json';
    var authorization = 'eyJraWQiOiJVU0VSIiwidHlwIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzbHVnVXNlciI6IjY5RTgzNEIyQjRCMDRFMUNCNjI1QjU5RkY1MEQzREU0IiwiaXNzIjoiZ2Z1Y2hzK2dpZ2FudGVAbXV4aS5jb20uYnIiLCJwZXhwIjoxNjE5ODM4MDAwLCJleHAiOjE1NzA4NTExMDB9.Y2GpvL-Vof-rkCPAxESmPxg2iQKWcuM6yoRA2XLhyWc-d2F7Oko90mUCw8KpNr_i7wP6rv03ks4j09wBYnaCNw';
    var xCustomer = '2B70D53FE85541188816CAB2497586D4';

    var search_parameters = {
        limit: 20,
        offset: 0,
        order_by: '-dtInsert',
        filter: 'cycleType__nin:ACH_CHECK:PRE_AUTHORIZATION_EXPIRATION'
    };
 
    var url = new URL(baseUrl);
    if(search_parameters !== null && search_parameters !== undefined) {
        Object.keys(search_parameters)
        .forEach(key => url.searchParams.append(key, search_parameters[key]));
    }    

    const request_config = {
        headers: {
            'Accept': contentType,
            'Content-Type': contentType,
            'X-Customer': xCustomer,
            'Authorization': authorization
        }
    };


    fetch(url, request_config)
      .then(result => result.json())
      .then((result) => {
        setTableRows(result.objects)
      });

  }

  useEffect(() => {
    getFinancialCycles();
  })

  return (
    <div className="App">
      <MainTemplate />

      <JuliusButton />
      <DojoButton onClick={getFinancialCycles}>TESTE</DojoButton>
      <CustomPaginationActionsTable 
        data={{
              "titles": ["dtInsert", "gatewayStan", "cycleType", "amount", "cycleStatus"],
              "rows": tableRows
          }}
        />
    </div>
  );
  
}

export default App;
