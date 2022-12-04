import { ComponentSubcategory } from "./types";
import Color from "./components/Color";

const placeholder = (
  <div style={{ border: "1px solid gray", height: "400px" }}>
    COMPONENTS THEMSELVES WILL GO IN HERE
  </div>
);

interface Props {
  category: string;
  subcategories: ComponentSubcategory[] | undefined;
}

const Component = (props: Props) => {
  const { category, subcategories } = props;

  const subItems = subcategories?.map(
    (subcategory: ComponentSubcategory, index) => {
      return (
        // TODO: Make a component from this:
        <div key={index}>
          <h4>{subcategory.name}</h4>
          <p>{subcategory.intro}</p>
          {/* THIS is themporary until the components registration is created */}
          {category === "color" ? <Color /> : placeholder}
        </div>
      );
    }
  );

  return (
    <div>
      <h1 id={category}>{category}</h1>
      <div>{subItems}</div>
      {/* This is temporary */}
      {!subcategories?.length && placeholder}
    </div>
  );
};

export default Component;
