import "./Subcomponent.scss";
import Color from "./components/Color";
import Placeholder from "./Placeholder";
import { capitalizeFirstCharacter } from "./shared";
import ButtonsList from "./components/Button/ButtonsList";
import RadioButton from "./components/RadioButton";

interface Props {
  name: string | undefined;
  intro: string;
  category: string;
}

const Subcomponent = (props: Props) => {
  const { name, intro, category } = props;

  return (
    <div className="Subcomponent">
      <h4>{name ? capitalizeFirstCharacter(name) : undefined}</h4>
      <p className="Intro">{intro}</p>
      {renderComponent(name || category)}
    </div>
  );
};

export default Subcomponent;

const renderComponent = (categoryName: string) => {
  switch (categoryName) {
    case "color":
      return <Color />;

    case "regular button":
      return <ButtonsList />;

    case "radio button":
      return (
        <RadioButton
          label="Example"
          onChange={() => console.log("Radio button selected")}
        />
      );

    default:
      return <Placeholder />;
  }
};
