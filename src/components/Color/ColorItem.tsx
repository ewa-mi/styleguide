import classNames from "classnames";
import "./ColorItem.scss";

interface Props {
  label: string;
}

export default (props: Props) => {
  const { label } = props;

  const classes = classNames({
    ColorItem: true,
    [`ColorItem--bg-${label}`]: true,
  });

  return (
    <div>
      <div className={classes}></div>
      <div className="ColorLabel">{label}</div>
    </div>
  );
};
