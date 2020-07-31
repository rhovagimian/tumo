//@ts-check
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../relay/environment";

const query = graphql`
  query App_Query {
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

function App() {
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

export default App;
