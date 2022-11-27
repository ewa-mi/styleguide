import "./index.scss";
import ComponentsList from "./ComponentsList";

// TODO: when panel becomes too small, it should turn into the hamburger menu, and then - appear as a sidepanel

export default () => {
  return (
    <div className="Sidepanel">
      <div className="Sidepanel__content">
        <ComponentsList />
      </div>
    </div>
  );
};
