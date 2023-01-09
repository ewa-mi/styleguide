import Button from "./index";
import "./index.scss";
import { ButtonSize } from "./types";

const label = "click";
const handleClick = () => console.log("Button clicked");

const ButtonsList = () => {
  return (
    <div className="Buttons">
      <div className="Buttons__list">{renderButtonList("small")}</div>
      <div className="Buttons__list">{renderButtonList("large")}</div>
    </div>
  );
};

export default ButtonsList;

const renderButtonList = (size: ButtonSize) => {
  return (
    <>
      <Button variant="text" size={size} label={label} onClick={handleClick} />
      <Button
        variant="outlined"
        size={size}
        label={label}
        onClick={handleClick}
      />
      <Button
        variant="contained"
        size={size}
        label={label}
        onClick={handleClick}
      />
      <br />
      <Button
        variant="text"
        color="secondary"
        size={size}
        label={label}
        onClick={handleClick}
      />
      <Button
        variant="outlined"
        color="secondary"
        size={size}
        label={label}
        onClick={handleClick}
      />
      <Button
        variant="contained"
        color="secondary"
        size={size}
        label={label}
        onClick={handleClick}
      />
      <br />
      <Button variant="text" size={size} label={label} disabled />
      <Button variant="outlined" size={size} label={label} disabled />
      <Button variant="contained" size={size} label={label} disabled />
    </>
  );
};
