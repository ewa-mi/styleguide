import classNames from "classnames";
import "./index.scss";

interface Props {
  label: string;
  value: string;
}

const Color = (props: Props) => {
  const { label, value } = props;

  const classes = classNames({
    Color: true,
    [`Color--bg-${label}`]: true,
  });

  return (
    <div>
      <div className={classes}></div>
      <div className="Color__label">{label}</div>
      <div className="Color__value">{value}</div>
    </div>
  );
};

export default Color;
