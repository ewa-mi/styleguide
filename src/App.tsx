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
      <div className="App-content">
        {/* TODO: Raname sidepanel to sidebar and maybe make in sticky on scroll 
        https://dev.to/clairecodes/how-to-make-a-sticky-sidebar-with-two-lines-of-css-2ki7 */}
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
};

export default App;
