import "./index.scss";
import ComponentListItem from "./ComponentListItem";
import ListTitle from "./ListTitle";
import { components } from "./../data/sidepanelItems";

export default () => {
  const renderItems = components.map((item, index) => (
    <ComponentListItem item={item} key={index} />
  ));
  return (
    <div>
      <ListTitle title="Components" size="h3" />
      <ul className="ComponentsList">{renderItems}</ul>
    </div>
  );
};
