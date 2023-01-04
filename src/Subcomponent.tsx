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
        <>
          <TextField
            id="textFieldExample"
            label="This is a veeeeery long label that should be truncated"
            placeholder="Type something"
            width="300px"
            error={true}
            errorMessage="This is an example error message that appears under the text field."
          />
          <TextField
            id="textFieldExample"
            label="Label example"
            placeholder="Type something"
            width="500px"
          />
        </>
      );

    default:
      return <Placeholder />;
  }
};
