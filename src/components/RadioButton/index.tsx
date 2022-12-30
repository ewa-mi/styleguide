import { useState } from "react";

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
    <div style={{ display: "flex" }}>
      <input
        type="radio"
        onChange={onChange}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        checked={radioButtonClicked}
      />
      <label style={{ marginLeft: "4px" }}>{label}</label>
    </div>
  );
};

export default RadioButton;
