import { useState } from "react";
import "./index.scss";

interface RadioButtonProps {
  label: string;
  onChange: () => void;
}

const RadioButton = (props: RadioButtonProps) => {
  const { label, onChange } = props;

  const [radioButtonClicked, setRadioButtonClicked] = useState(false);

  const handleClick = () => {
    if (radioButtonClicked) return setRadioButtonClicked(false);
    if (!radioButtonClicked) return setRadioButtonClicked(true);
  };

  return (
    <div className="RadioButton">
      <input
        id="radio-btn"
        type="radio"
        onChange={onChange}
        onClick={handleClick}
        checked={radioButtonClicked}
      />
      <label htmlFor="radio-btn" style={{ marginLeft: "4px" }}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
