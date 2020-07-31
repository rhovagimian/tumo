//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

const Root = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
