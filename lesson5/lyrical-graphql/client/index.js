//@ts-check
import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

const Root = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/songs/new">
            <SongCreate />
          </Route>
          <Route path="/songs/:id">
            <SongDetail />
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
