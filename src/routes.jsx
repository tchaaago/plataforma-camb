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
import { Noticias } from "./paginas/admin/Noticias";
import { DocentesDepoimentos } from "./paginas/admin/DocentesDepoimentos";
import { RegistrarDocentesDepoimentos } from "./paginas/admin/RegistrarDocentesDepoimentos";

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
          <Route path="docentes-e-depoimentos">
            <Route index element={<DocentesDepoimentos />}></Route>
            <Route
              path="registrar"
              element={<RegistrarDocentesDepoimentos />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
