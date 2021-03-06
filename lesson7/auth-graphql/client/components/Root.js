//@ts-check
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../relay/environment";

const query = graphql`
  query Root_Query {
    user {
      ...Header_user
      ...RequireAuth_user
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
        <Route path="/dashboard">
          <Dashboard user={user} />
        </Route>
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

export default Root;
