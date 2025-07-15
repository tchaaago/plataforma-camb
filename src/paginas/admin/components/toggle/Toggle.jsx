import "./style.css";

export const Toggle = ({ options, selected, onChange, name = "toggle" }) => {
  return (
    <div className="toggle-wrapper">
      {options.map((option) => (
        <label key={option.value} className="inputCircle">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
