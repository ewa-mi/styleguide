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

  return (
    <form className={textFieldClasses} style={{ width: width }}>
      <label className="TextField__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="TextField__input"
        style={{ width: width }}
        id={id}
        type="text"
        placeholder={placeholder}
      />
      {error && <div className="TextField__errorMessage">{errorMessage}</div>}
    </form>
  );
};

export default TextField;
