import './App.css';
import React from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import StockList from "./containers/StockList";
import Stock from "./containers/Stock";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Stocks</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={StockList} />
        <Route path={"/stock/:stock"} exact component={Stock} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
