export const Button = ({ color, icon, text }) => {
  return (
    <button style={{ background: color }}>
      {icon}
      {text}
    </button>
  );
};
