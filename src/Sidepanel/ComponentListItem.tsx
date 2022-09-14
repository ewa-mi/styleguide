import "./index.scss";

interface ComponentListItemProps {
  item: any;
}
export default (props: ComponentListItemProps) => {
  const { item } = props;
  return <li className="ComponentListItem">{item}</li>;
};
