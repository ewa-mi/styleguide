import Button from "./index";
import "./index.scss";

const label = "click";

type ButtonSize = "small" | "large";

const RegularButtons = () => {
  return (
    <div className="RegularButtonList">
      <div className="SmallRegularButtonList">{renderButtonList("small")}</div>
      <div>{renderButtonList("large")}</div>
    </div>
  );
};

export default RegularButtons;

const renderButtonList = (size: ButtonSize) => {
  return (
    <>
      <Button variant="text" color="primary" size={size} label={label} />
      <Button variant="outlined" color="primary" size={size} label={label} />
      <Button variant="contained" color="primary" size={size} label={label} />
      <br />
      <Button variant="text" color="secondary" size={size} label={label} />
      <Button variant="outlined" color="secondary" size={size} label={label} />
      <Button variant="contained" color="secondary" size={size} label={label} />
      <br />
      <Button variant="text" color="disabled" size={size} label={label} />
      <Button variant="outlined" color="disabled" size={size} label={label} />
      <Button variant="contained" color="disabled" size={size} label={label} />
    </>
  );
};
