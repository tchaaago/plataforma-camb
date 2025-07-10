import "./style.css";

export const Textarea = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
}) => {
  return (
    <div className="textarea-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};
