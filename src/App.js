import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import { Recipes } from './Recipes';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <span style={{float: "right"}}>CookEasy</span>
        </div>
      {/* <Link to="/"></Link> */}
      <Switch>
          <Route exact path="/">
            <div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginTop:"5%", marginLeft:"2%", marginRight: "3%"}}>
            {/* <Home/> */}
            <Recipes/>
            </div>
            </div>
          </Route>
        </Switch>
        </Router>
        </div>
    );
}

export default App;
