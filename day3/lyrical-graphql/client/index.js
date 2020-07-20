//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import SongList from "./components/SongList";

const Root = () => {
  return <SongList />;
};

ReactDOM.render(<Root />, document.querySelector("#root"));
