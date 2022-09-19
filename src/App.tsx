import React, { ReactNode } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Sidepanel from "./Sidepanel/index";
import { Component, Subcategory } from "./types";
import { components } from "./data/components";

function App() {
  const mappedComponents = components.map((item: Component, index) => {
    const subItems = item.subcategories?.map((el: Subcategory) => {
      return (
        // TODO: Make a component from this:
        <div key={index}>
          <h4>{el.name}</h4>
          <p>{el.intro}</p>
        </div>
      );
    });
    return (
      <>
        <h1>{item.category}</h1>
        <div>{subItems}</div>
        {/* this will be updated later on: */}
        <div style={{ border: "1px solid gray", height: "400px" }}>
          COMPONENTS THEMSELVES WILL GO IN HERE
        </div>
      </>
    );
  });

  return (
    <div className="App">
      <div className="App-content">
        {/* TODO: Raname sidepanel to sidebar and make in sticky on scroll https://dev.to/clairecodes/how-to-make-a-sticky-sidebar-with-two-lines-of-css-2ki7 */}
        <Sidepanel />
        <div className="Main">
          <div className="Head">
            {/* consider removing this logo */}
            <img src={logo} className="App-logo" alt="logo" />
            <h1>STYLE GUIDE</h1>
          </div>
          <div>{mappedComponents}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
