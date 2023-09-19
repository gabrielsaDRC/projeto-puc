import {BrowserRouter, Route, Routes, Switch, HashRouter} from 'react-router-dom';

import Home from './paginas/Home';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro'
import NotFound from './paginas/NotFound';


const Rotas = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact={true} path="/" element={<Login/>} />
                <Route exact={true} path="/home" element={<Home/>} />
                <Route exact={true} path="/cadastro" element={<Cadastro/>} />
                <Route exact={true} path="*" element={<NotFound/>} />
            </Routes>
        </HashRouter>
    )
}

export default Rotas;