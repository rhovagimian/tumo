//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./relay/environment";

const query = graphql`
  query Root_Query {
    user {
      ...Header_user
    }
  }
`;

function renderQuery({ error, props }) {
  if (!error && !props) {
    return null;
  }
  const { user } = props;
  return (
    <Router>
      <Header user={user} />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/">
          <div>Welcome to TUMO from home!</div>
        </Route>
      </Switch>
    </Router>
  );
}

function Root() {
  return (
    <div className="container">
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{}}
        render={renderQuery}
      />
    </div>
  );
}

ReactDOM.render(<Root />, document.querySelector("#root"));
