import TextField from "./index";
import "./index.scss";

const TextFieldList = () => {
  return (
    <div className="TextFieldList">
      <TextField
        id="textFieldExample"
        label="Label example"
        placeholder="Type something"
        width="500px"
      />
      <TextField
        id="textFieldExample"
        label="Some label"
        placeholder="Type something"
        width="300px"
        error={true}
        errorMessage="This is an error message that appears under the text field."
      />
    </div>
  );
};

export default TextFieldList;
