import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./Home";
import { Recipes } from './Recipes';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <span style={{float: "right"}}>CookEasy</span>
        </div>
        <Switch>
          <Route exact path="/" component={Home}>
            <div><div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginTop:"5%", marginLeft:"2%", marginRight: "3%"}}>
            <Home/>
            </div></div>
          </Route>
          <Router path="/recipes" component={Recipes}/>
        </Switch>
        </Router>
        </div>
    );
}

export default App;
