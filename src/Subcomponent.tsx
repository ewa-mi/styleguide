import Color from "./components/Color";
import Placeholder from "./Placeholder";
import { capitalizeFirstCharacter } from "./shared";

interface Props {
  name: string | undefined;
  intro: string;
  category: string;
}

const Subcomponent = (props: Props) => {
  const { name, intro, category } = props;

  return (
    <div>
      <h4>{name ? capitalizeFirstCharacter(name) : undefined}</h4>
      <p>{intro}</p>
      {renderComponent(name || category)}
    </div>
  );
};

export default Subcomponent;

const renderComponent = (categoryName: string) => {
  switch (categoryName) {
    case "color":
      return <Color />;
    default:
      return <Placeholder />;
  }
};
