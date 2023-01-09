import logo from "./logo.svg";
import "./App.scss";
import Sidepanel from "./sidepanel";
import { components } from "./data/components";
import Component from "./components/Component";
import { ComponentItem } from "./types";

const App = () => {
  const mappedComponents = components.map((item: ComponentItem, index) => {
    const { category, subcategories } = item;

    return (
      <Component
        key={index}
        category={category}
        subcategories={subcategories}
      />
    );
  });

  return (
    <div className="App">
      <div className="App__content">
        {/* TODO: Raname sidepanel to sidebar? */}
        <Sidepanel />
        <div className="App__main">
          <div className="App__head">
            {/* consider removing this logo */}
            <img src={logo} className="App__logo" alt="logo" />
            <h1>STYLE GUIDE</h1>
          </div>
          <div>{mappedComponents}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
