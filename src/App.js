import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/">Home</Link>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
     
        </div>
    );
}

export default App;
