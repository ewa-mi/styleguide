import RadioButton from "./index";
import "./index.scss";

const handleChange = () => console.log("Radio button selected");

const ButtonsList = () => {
  return (
    <div className="RadioButtonsContainer">
      <div className="RadioButtonsList">
        <RadioButton
          label="The radio button with the primary color. Try it out!"
          onChange={handleChange}
        />
        <RadioButton
          label="This button has the secondary color. Select to see."
          onChange={handleChange}
          color="secondary"
        />
        <RadioButton
          label="This one is disabled, try to select it."
          onChange={handleChange}
          disabled
        />
      </div>
    </div>
  );
};

export default ButtonsList;
