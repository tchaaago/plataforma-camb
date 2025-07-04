import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './paginas/Home';
import QuemSomos from './paginas/Quem-Somos';
import Aprendizado from './paginas/Aprendizado';
import MercadoTrabalho from './paginas/Mercado';
import ProducoesAcademicas from './paginas/Producoes';
import FaleConosco from './paginas/Fale-Conosco';
import Page404 from './paginas/Page404';
import PageBase from './paginas/PaginaBase'


function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase/> }>
                    <Route index element={ <Home/> }></Route>
                    <Route path="/quemSomos" element={ <QuemSomos/> }></Route>
                    <Route path="/aprendizado" element={ <Aprendizado/> }></Route>
                    <Route path="/mercado" element={ <MercadoTrabalho/> }></Route>
                    <Route path="/producoes" element={ <ProducoesAcademicas/> }></Route>
                    <Route path="/faleConosco" element={ <FaleConosco/> }></Route>
                    <Route path="*" element={ <Page404/> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes
