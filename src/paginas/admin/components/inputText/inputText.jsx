import "./style.css";

export const InputText = ({
  id,
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  error,
  disabled = false,
  required = false,
}) => {
  return (
    <div className="input-text-wrapper">
      {label && (
        <label htmlFor={id} className="input-text-label">
          {label} {required && <span className="input-text-required">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange && onChange(e)}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-text-input ${error ? "input-text-error" : ""}`}
      />
      {error && <span className="input-text-error-message">{error}</span>}
    </div>
  );
};
