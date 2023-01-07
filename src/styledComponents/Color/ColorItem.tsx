import classNames from "classnames";
import "./index.scss";

interface Props {
  label: string;
  value: string;
}

const ColorItem = (props: Props) => {
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

export default ColorItem;
