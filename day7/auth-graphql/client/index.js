//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const Root = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
