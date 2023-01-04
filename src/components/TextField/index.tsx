import classNames from "classnames";
import "./index.scss";

interface TextFieldProps {
  id: string;
  width?: string | number;
  placeholder?: string;
  label: string;
  errorMessage?: string;
  error?: boolean;
}

const TextField = (props: TextFieldProps) => {
  const {
    id,
    width = "200px",
    placeholder,
    label,
    errorMessage,
    error,
  } = props;

  const textFieldClasses = classNames({
    TextField: true,
    [`TextField--error`]: error,
  });
  console.log("ERR", error);

  return (
    <form className={textFieldClasses} style={{ width: width }}>
      <label htmlFor={id}>{label}</label>
      <input
        style={{ width: width }}
        id={id}
        type="text"
        placeholder={placeholder}
      />
      {error && <div className="ErrorMessage">{errorMessage}</div>}
    </form>
  );
};

export default TextField;
