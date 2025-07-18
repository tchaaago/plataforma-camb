export const Button = ({ icon, text, className, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {icon}
      {text}
    </button>
  );
};
