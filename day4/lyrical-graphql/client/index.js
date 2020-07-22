//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongList";

const Root = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/song/create">
            <SongCreate />
          </Route>
          <Route path="/">
            <SongList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
