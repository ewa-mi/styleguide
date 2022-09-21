import "./index.scss";

//TODO: consider to make more generic component from this, like Header.tsx or Title.tsx
type ListTitleSize = "h1" | "h2" | "h3" | "h4";

interface ListTitleProps {
  title: string;
  size: ListTitleSize | undefined;
}

export default (props: ListTitleProps) => {
  const { title, size } = props;
  if (!title) return null;

  const getListTitle = (size: ListTitleSize | undefined) => {
    switch (size) {
      case "h1":
        return <h1>{title}</h1>;
      case "h2":
        return <h2>{title}</h2>;
      case "h3":
        return <h3>{title}</h3>;
      default:
        return <h4>{title}</h4>;
    }
  };

  return <div className="ListTitle">{getListTitle(size)}</div>;
};
