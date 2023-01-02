import classNames from "classnames";
import "./index.scss";
import { ButtonSize } from "./types";
import { ButtonColor } from "../sharedTypes";

interface ButtonProps {
  variant?: "text" | "contained" | "outlined";
  color?: ButtonColor;
  size: ButtonSize;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const {
    variant,
    color,
    size,
    label,
    onClick,
    disabled = false,
    className,
  } = props;

  const classes = classNames({
    Button: true,
    [`Button--${variant || "text"}-${
      disabled ? "disabled" : color || "primary"
    }`]: true,
    [`Button--${size}`]: true,
    [`${className}`]: true,
  });

  return (
    <button className={classes} onClick={!disabled ? onClick : undefined}>
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
