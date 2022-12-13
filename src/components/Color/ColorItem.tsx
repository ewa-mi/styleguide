import classNames from "classnames";
import "./ColorItem.scss";

interface Props {
  label: string;
  value: string;
}

export default (props: Props) => {
  const { label, value } = props;

  const classes = classNames({
    ColorItem: true,
    [`ColorItem--bg-${label}`]: true,
  });

  return (
    <div>
      <div className={classes}></div>
      <div className="ColorLabel">{label}</div>
      <div className="ColorValue">{value}</div>
    </div>
  );
};
