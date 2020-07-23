import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import DisplayData from "./components/display-data/display-data.component";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DisplayData} />
      </Switch>
    </div>
  );
};

export default App;
