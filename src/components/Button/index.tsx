import classNames from "classnames";
import "./index.scss";

interface ButtonProps {
  variant: "text" | "contained" | "outlined";
  color: "primary" | "secondary" | "disabled";
  size: "small" | "large";
  label: string;
}

export default (props: ButtonProps) => {
  const { variant, color, size, label } = props;

  const classes = classNames({
    Button: true,
    [`Button--${variant}-${color}`]: true,
    [`Button--${size}`]: true,
  });

  return <button className={classes}>{label.toUpperCase()}</button>;
};
