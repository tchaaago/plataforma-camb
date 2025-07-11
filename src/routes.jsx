import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import QuemSomos from "./paginas/Quem-Somos";
import Aprendizado from "./paginas/Aprendizado";
import MercadoTrabalho from "./paginas/Mercado";
import ProducoesAcademicas from "./paginas/Producoes";
import FaleConosco from "./paginas/Fale-Conosco";
import Page404 from "./paginas/Page404";
import PageBase from "./paginas/PaginaBase";
import { Admin } from "./paginas/admin/Admin";
import { Noticias } from "./paginas/admin/noticias/Noticias";
import { DocentesDepoimentos } from "./paginas/admin/docentes-e-depoimentos/DocentesDepoimentos";
import { RegistrarDocentesDepoimentos } from "./paginas/admin/docentes-e-depoimentos/registrarDocentesDepoimentos/RegistrarDocentesDepoimentos";
import { Projetos } from "./paginas/admin/projetos/Projetos";
import { Acervo } from "./paginas/admin/acervo/Acervo";
import { MatrizCurricular } from "./paginas/admin/matriz-curricular/MatrizCurricular";
import { ConsultaPorSemestre } from "./paginas/admin/consulta-por-semestre/ConsultaPorSemestre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/quemSomos" element={<QuemSomos />}></Route>
          <Route path="/aprendizado" element={<Aprendizado />}></Route>
          <Route path="/mercado" element={<MercadoTrabalho />}></Route>
          <Route path="/producoes" element={<ProducoesAcademicas />}></Route>
          <Route path="/faleConosco" element={<FaleConosco />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="noticias" element={<Noticias />}></Route>
          <Route path="projetos" element={<Projetos />}></Route>
          <Route path="acervo" element={<Acervo />}></Route>
          <Route path="docentes-e-depoimentos">
            <Route index element={<DocentesDepoimentos />}></Route>
            <Route
              path="registrar"
              element={<RegistrarDocentesDepoimentos />}
            ></Route>
          </Route>
          <Route
            path="matriz-curricular"
            element={<MatrizCurricular />}
          ></Route>
          <Route
            path="consulta-por-semestre"
            element={<ConsultaPorSemestre />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
