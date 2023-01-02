import { useState } from "react";
import classNames from "classnames";
import "./index.scss";

interface RadioButtonProps {
  label: string;
  onChange: () => void;
  color?: string;
  disabled?: boolean;
  className?: string;
}

const RadioButton = (props: RadioButtonProps) => {
  const { label, onChange, color = "primary", disabled, className } = props;

  const [radioButtonClicked, setRadioButtonClicked] = useState(false);

  const handleClick = () => setRadioButtonClicked(!radioButtonClicked);

  const inputClasses = classNames({
    RadioButton__input: true,
    [`RadioButton__input--border-${color}`]: color,
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
        id="radio-btn"
        type="radio"
        onChange={onChange}
        onClick={!disabled ? handleClick : undefined}
        checked={radioButtonClicked}
      />
      <label htmlFor="radio-btn" className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
