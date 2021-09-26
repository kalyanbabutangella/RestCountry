import "./styles.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Getregion from "./RegionsApi/components/GetRegion";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/region" component={Getregion} />
          <Redirect from="/" to="/region" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
