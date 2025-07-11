import { ArrowLeft } from "lucide-react";
import "./style.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const registerRoutes = ["/admin/docentes-e-depoimentos/registrar"];

  if (registerRoutes.includes(currentPath)) {
    return (
      <aside className="sidebar-alt">
        <Link to="/admin">
          <ArrowLeft size={32} strokeWidth={3} className="arrowLeft" />
        </Link>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <NavLink to="/admin" className="painelLink" end>
        Painel do Administrador
      </NavLink>
      <nav>
        <hr />
        <NavLink to="noticias">Notícias</NavLink>
        <NavLink to="projetos">Projetos</NavLink>
        <NavLink to="acervo">Acervo</NavLink>
        <hr />
        <NavLink to="docentes-e-depoimentos">Docentes e Depoimentos</NavLink>
        <NavLink to="matriz-curricular">Matriz Curricular</NavLink>
        <NavLink to="consulta-por-semestre">Consulta por Semestre</NavLink>
      </nav>
    </aside>
  );
};
