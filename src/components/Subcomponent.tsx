import "./Subcomponent.scss";
import { capitalizeFirstCharacter } from "./shared";
import Placeholder from "./Placeholder";
import ColorsList from "../styledComponents/Color";
import ButtonsList from "../styledComponents/Button/ButtonsList";
import RadioButtonsList from "../styledComponents/RadioButton/RadioButtonsList";
import TextFieldList from "../styledComponents/TextField/TextFieldList";

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
      return <ColorsList />;

    case "regular button":
      return <ButtonsList />;

    case "radio button":
      return <RadioButtonsList />;

    case "text field":
      return <TextFieldList />;

    default:
      return <Placeholder />;
  }
};
