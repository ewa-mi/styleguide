import "./index.scss";
import { Component } from "../types";

interface ComponentListItemProps {
  item: Component;
  onChange: (element: string) => any;
  selected: string;
}
export default (props: ComponentListItemProps) => {
  const { item, onChange, selected } = props;
  const componentCategory =
    item.category.charAt(0).toUpperCase() + item.category.slice(1);
  const isSelected = selected === componentCategory;
  const linkStyle = `ComponentLink ${isSelected && "ComponentLinkSelected"}`;

  return (
    <li className="ComponentListItem">
      <a
        className={linkStyle}
        href={`#${item.category}`}
        onClick={() => onChange(componentCategory)}
      >
        {componentCategory}
      </a>
    </li>
  ); // TODO: consider to make the font smaller
};
