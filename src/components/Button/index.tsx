import classNames from "classnames";
import "./index.scss";
import { ButtonSize } from "./types";

interface ButtonProps {
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "disabled";
  size: ButtonSize;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { variant, color, size, label, onClick, disabled = false } = props;

  const classes = classNames({
    Button: true,
    [`Button--${variant || "text"}-${
      disabled ? "disabled" : color || "primary"
    }`]: true,
    [`Button--${size}`]: true,
  });

  return (
    <button className={classes} onClick={!disabled ? onClick : undefined}>
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
