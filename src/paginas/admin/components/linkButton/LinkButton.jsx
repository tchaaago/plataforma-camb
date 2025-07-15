import { Link } from "react-router-dom";
import "./style.css";

export const LinkButton = ({ text, icon, link, className }) => {
  return (
    <Link to={link} className={`linkButton ${className}`}>
      {icon}
      <span>{text}</span>
    </Link>
  );
};
