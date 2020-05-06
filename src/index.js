import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import NewPage from "./components/NewPage"

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )

      .then(res => setCoinData(res.data))

      .catch(err => console.log(err));
  }, []);
  return (

    <div className="App">
      
        <Route exact path='/'>
          <Navbar />
        </Route>
        
        <Route exact path='/'>
          <Charts coinData={coinData} />
        </Route>
        
        
      


    </div>

  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router> <App /> </Router>, rootElement);
