import classNames from "classnames";
import "./ColorItem.scss";

interface Props {
  colorValue: string;
}

export default (props: Props) => {
  const { colorValue } = props;

  const classes = classNames({
    ColorItem: true,
    [`ColorItem--bg-${colorValue}`]: true,
  });

  return <div className={classes} />;
};
