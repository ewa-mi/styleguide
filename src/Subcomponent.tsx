import "./Subcomponent.scss";
import Color from "./components/Color";
import Placeholder from "./Placeholder";
import { capitalizeFirstCharacter } from "./shared";
import ButtonsList from "./components/Button/ButtonsList";
import RadioButtonsList from "./components/RadioButton/RadioButtonsList";
import TextField from "./components/TextField";

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
      return <RadioButtonsList />;

    case "text field":
      return (
        <TextField
          id="textFieldExample"
          label="Very long label that should be truncated"
          placeholder="Type something"
        />
      );

    default:
      return <Placeholder />;
  }
};
