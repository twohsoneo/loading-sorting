import React from 'react';
import './App.css';
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ItemPage from "./components/ItemPage";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path={"/"} exact component={Home}/>
              <Route path={"/:id"} exact component={ItemPage}/>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
