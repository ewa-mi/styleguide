import "./ComponentListItem.scss";
import { ComponentItem } from "../types";
import { capitalizeFirstCharacter } from "../components/shared";

interface ComponentListItemProps {
  item: ComponentItem;
  onChange: (element: string) => any;
  selected: string;
}

const ComponentListItem = (props: ComponentListItemProps) => {
  const { item, onChange, selected } = props;
  const { category } = item;

  const componentCategory = capitalizeFirstCharacter(category);
  const isSelected = selected === componentCategory;
  const linkStyle = `ComponentListItem__link ${
    isSelected && "ComponentListItem__link--selected"
  }`;

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
