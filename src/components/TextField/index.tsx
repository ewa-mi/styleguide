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

  return (
    <form className="TextField" style={{ width: width }}>
      <label htmlFor={id}>{label}</label>
      <input
        style={{ width: width }}
        className="TextInput"
        id={id}
        type="text"
        placeholder={placeholder}
      />
    </form>
  );
};

export default TextField;
