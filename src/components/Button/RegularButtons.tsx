import Button from "./index";
import "./index.scss";

const label = "click";

const RegularButtons = () => {
  return (
    <div className="RegularButtonList">
      {/* small */}
      <div className="SmallRegularButtonList">
        <Button variant="text" color="primary" size="small" label={label} />
        <Button variant="outlined" color="primary" size="small" label={label} />
        <Button
          variant="contained"
          color="primary"
          size="small"
          label={label}
        />
        <br />
        <Button variant="text" color="secondary" size="small" label={label} />
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          label={label}
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          label={label}
        />
        <br />
        <Button variant="text" color="disabled" size="small" label={label} />
        <Button
          variant="outlined"
          color="disabled"
          size="small"
          label={label}
        />
        <Button
          variant="contained"
          color="disabled"
          size="small"
          label={label}
        />
      </div>
      {/* large */}
      <div>
        <Button variant="text" color="primary" size="large" label={label} />
        <Button variant="outlined" color="primary" size="large" label={label} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          label={label}
        />
        <br />
        <Button variant="text" color="secondary" size="large" label={label} />
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          label={label}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          label={label}
        />
        <br />
        <Button variant="text" color="disabled" size="large" label={label} />
        <Button
          variant="outlined"
          color="disabled"
          size="large"
          label={label}
        />
        <Button
          variant="contained"
          color="disabled"
          size="large"
          label={label}
        />
      </div>
    </div>
  );
};

export default RegularButtons;
