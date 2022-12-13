import ColorItem from "./ColorItem";
import "./ColorList.scss";
import { components } from "../../data/components";
import { SubcomponentItem } from "../../types";

const colorSubcategories = components.find((item) => item.category === "color")
  ?.subcategories[0] as SubcomponentItem;

const colors = colorSubcategories?.content;

export default () => {
  return (
    <div className="ColorList">
      {colors &&
        Object.keys(colors).map((item, index) => (
          <ColorItem label={item} key={index} />
        ))}
    </div>
  );
};
