import { Link } from "react-router-dom";
import "./style.css";

export const LinkButton = ({ text, icon, link }) => {
  return (
    <Link to={link} className="linkButton">
      {icon}
      <span>{text}</span>
    </Link>
  );
};
