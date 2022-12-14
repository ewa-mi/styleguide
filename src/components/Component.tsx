import { SubcomponentItem } from "../types";
import Placeholder from "./Placeholder";
import Subcomponent from "./Subcomponent";
import { capitalizeFirstCharacter } from "./shared";

interface Props {
  category: string;
  subcategories: SubcomponentItem[] | undefined;
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
      <h1 id={category}>{capitalizeFirstCharacter(category)} </h1>
      <div>{subItems}</div>
      {!subcategories?.length && <Placeholder />}
    </div>
  );
};

export default Component;
