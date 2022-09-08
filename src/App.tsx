import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Sidepanel from "./Sidepanel/index";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Sidepanel />
        <div className="Main">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Style guide</p>
        </div>
      </div>
    </div>
  );
}

export default App;
