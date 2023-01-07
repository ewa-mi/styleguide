import "./index.scss";
import ComponentsList from "./ComponentsList";

// TODO: when panel becomes too small, it should turn into the hamburger menu

const Sidepanel = () => {
  return (
    <div className="Sidepanel">
      <div className="Sidepanel__content">
        <ComponentsList />
      </div>
    </div>
  );
};

export default Sidepanel;
