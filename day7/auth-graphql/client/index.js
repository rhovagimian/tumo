//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const Root = () => {
  return (
    <div className="container">
      <App />
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
