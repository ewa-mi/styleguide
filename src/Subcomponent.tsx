import Color from "./components/Color";
import Placeholder from "./Placeholder";

interface Props {
  name: string | undefined;
  intro: string;
  category: string;
}

const Subcomponent = (props: Props) => {
  const { name, intro, category } = props;

  return (
    <div>
      <h4>{name}</h4>
      <p>{intro}</p>
      {/* THIS is themporary until the components registration is created */}
      {category === "color" ? <Color /> : <Placeholder />}
    </div>
  );
};

export default Subcomponent;
