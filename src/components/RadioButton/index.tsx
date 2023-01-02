import { useState } from "react";
import classNames from "classnames";
import "./index.scss";
import { ButtonColor } from "../sharedTypes";

interface RadioButtonProps {
  id: string;
  label: string;
  onChange: () => void;
  color?: ButtonColor;
  disabled?: boolean;
  className?: string;
}

const RadioButton = (props: RadioButtonProps) => {
  const { label, onChange, color = "primary", disabled, className, id } = props;

  const [radioButtonClicked, setRadioButtonClicked] = useState(false);

  const handleClick = () => setRadioButtonClicked(!radioButtonClicked);

  const inputClasses = classNames({
    RadioButton__input: true,
    [`RadioButton__input--border-${color}`]: color,
    [`RadioButton__input--disabled`]: disabled,
  });

  const labelClasses = classNames({
    RadioButtonLabel: true,
    [`RadioButtonLabel--disabled`]: disabled,
  });

  const radioButtonClasses = classNames({
    RadioButton: true,
    [`${className}`]: true,
  });

  return (
    <div className={radioButtonClasses}>
      <input
        className={inputClasses}
        id={id}
        type="radio"
        onChange={onChange}
        onClick={!disabled ? handleClick : undefined}
        checked={radioButtonClicked}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
