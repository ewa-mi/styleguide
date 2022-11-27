import ColorItem from "./ColorItem";
import "./ColorList.scss";

const colorValues = [
  "black",
  "white",
  "primary",
  "secondary",
  "error",
  "warning",
  "disabled",
];

export default () => {
  return (
    <div className="ColorList">
      {colorValues.map((item, index) => (
        <ColorItem colorValue={item} key={index} />
      ))}
    </div>
  );
};
