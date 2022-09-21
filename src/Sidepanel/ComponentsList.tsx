import "./index.scss";
import { useState } from "react";
import ComponentListItem from "./ComponentListItem";
import ListTitle from "./ListTitle";
import { components } from "../data/components";

export default () => {
  const [selected, setSelected] = useState("");

  const renderItems = components.map((item, index) => (
    <ComponentListItem
      item={item}
      key={index}
      onChange={setSelected}
      selected={selected}
    />
  ));
  return (
    <div>
      <ListTitle title="Components" size="h3" />
      <ul className="ComponentsList">{renderItems}</ul>
    </div>
  );
};
