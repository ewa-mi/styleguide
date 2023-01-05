import ColorItem from "./ColorItem";
import "./index.scss";
import { components } from "../../data/components";
import { SubcomponentItem } from "../../types";

type ColorContent = {
  [key: string]: string;
};
const colorSubcategories = components.find((item) => item.category === "color")
  ?.subcategories[0] as SubcomponentItem;

const colors = colorSubcategories?.content as ColorContent;

export default () => {
  return (
    <div className="ColorList">
      {colors &&
        Object.keys(colors).map((item, index) => (
          <ColorItem label={item} key={index} value={colors[item]} />
        ))}
    </div>
  );
};
