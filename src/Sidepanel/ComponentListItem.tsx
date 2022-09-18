import "./index.scss";

type Component = {
  category: string;
  subcategories?: any; //TODO: Type this
};
interface ComponentListItemProps {
  item: Component;
}
export default (props: ComponentListItemProps) => {
  const { item } = props;
  const componentCategory =
    item.category.charAt(0).toUpperCase() + item.category.slice(1);

  return <li className="ComponentListItem">{componentCategory}</li>; // TODO: make the font smaller
};
