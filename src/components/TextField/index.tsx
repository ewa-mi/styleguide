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
  const { id, width, placeholder, label, errorMessage, error } = props;

  return (
    <form className="TextField">
      <label htmlFor={id}>{label}</label>
      <input
        className="TextInput"
        id={id}
        type="text"
        placeholder={placeholder}
      />
    </form>
  );
};

export default TextField;
