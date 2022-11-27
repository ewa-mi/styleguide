import logo from "./logo.svg";
import "./App.scss";
import Sidepanel from "./Sidepanel";
import { Component, Subcategory } from "./types";
import { components } from "./data/components";
import Color from "./components/Color";

const placeholder = (
  <div style={{ border: "1px solid gray", height: "400px" }}>
    COMPONENTS THEMSELVES WILL GO IN HERE
  </div>
);

function App() {
  const mappedComponents = components.map((item: Component, index) => {
    const subItems = item.subcategories?.map((el: Subcategory, index) => {
      return (
        // TODO: Make a component from this:
        <div key={index}>
          <h4>{el.name}</h4>
          <p>{el.intro}</p>
          {/* THIS is themporary until the components registration is created */}
          {item.category === "color" ? <Color /> : placeholder}
        </div>
      );
    });

    return (
      <div key={index}>
        <h1 id={item.category}>{item.category}</h1>
        <div>{subItems}</div>
        {/* This is temporary */}
        {!item.subcategories?.length && placeholder}
      </div>
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
