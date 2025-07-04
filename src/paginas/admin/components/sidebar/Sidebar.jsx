import "./style.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Painel do Administrador</h2>
      <hr />
      <ul>
        <li>Notícias</li>
        <li>Projetos</li>
        <li>Acervo</li>
        <hr />
        <li>Docentes e Depoimentos</li>
        <li>Matriz Curricular</li>
        <li>Consulta por Semestre</li>
      </ul>
    </aside>
  );
};
