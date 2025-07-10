import { ArrowLeft } from "lucide-react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const registerRoutes = ["/admin/docentes-e-depoimentos/registrar"];

  if (registerRoutes.includes(currentPath)) {
    return (
      <aside className="sidebar-alt">
        <Link to="/admin">
          <ArrowLeft />
        </Link>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <h2>Painel do Administrador</h2>
      <hr />
      <nav>
        <Link to="noticias">Notícias</Link>
        <li>Projetos</li>
        <li>Acervo</li>
        <hr />
        <Link to="docentes-e-depoimentos">Docentes e Depoimentos</Link>
        <li>Matriz Curricular</li>
        <li>Consulta por Semestre</li>
      </nav>
    </aside>
  );
};
