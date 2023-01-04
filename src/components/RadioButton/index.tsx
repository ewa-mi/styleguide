import { useState } from "react";
import classNames from "classnames";
import "./index.scss";
import { ButtonColor } from "../sharedTypes";

interface RadioButtonProps {
  id: string;
  label: string;
  onChange: () => void | undefined;
  color?: ButtonColor;
  disabled?: boolean;
  className?: string;
}

const RadioButton = (props: RadioButtonProps) => {
  const {
    label,
    onChange,
    color = "primary",
    disabled = false,
    className,
    id,
  } = props;

  const [radioButtonClicked, setRadioButtonClicked] = useState(false);

  const handleClick = () =>
    !disabled && setRadioButtonClicked(!radioButtonClicked);

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
        onChange={!disabled ? onChange : () => ""}
        onClick={handleClick}
        checked={radioButtonClicked}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
