import "./ComponentListItem.scss";
import { ComponentItem } from "../types";

interface ComponentListItemProps {
  item: ComponentItem;
  onChange: (element: string) => any;
  selected: string;
}

const ComponentListItem = (props: ComponentListItemProps) => {
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
  ); // TODO: consider smaller font size
};

export default ComponentListItem;
