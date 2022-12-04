import { ComponentSubcategory } from "./types";
import Placeholder from "./Placeholder";
import Subcomponent from "./Subcomponent";

interface Props {
  category: string;
  subcategories: ComponentSubcategory[] | undefined;
}

const Component = (props: Props) => {
  const { category, subcategories } = props;

  const subItems = subcategories?.map((subitem, index) => {
    const { name, intro } = subitem;
    return (
      <Subcomponent key={index} name={name} intro={intro} category={category} />
    );
  });

  return (
    <div>
      <h1 id={category}>{category}</h1>
      <div>{subItems}</div>
      {/* This is temporary */}
      {!subcategories?.length && <Placeholder />}
    </div>
  );
};

export default Component;
