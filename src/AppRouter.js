import React from 'react';
import Init from './pages/Axeleratum.js';
import Gestion from './pages/Kasia.js';
import DespachoUno from './pages/Despacho/DespachoLegalUno.js';
import DespachoDos from './pages/Despacho/DespachoLegalDos.js';
import EmpresaDos from './pages/Empresa/EmpresaDos.js'
import EmpresaUno from './pages/Empresa/EmpresaUno.js'
import EmpresaDesa from './pages/Empresa/EmpresaDesa.js'
import MaterialidadUno from './pages/Materialidad/MaterialidadUno.js'
import MaterialidadDos from './pages/Materialidad/MaterialidadDos.js'


import {Route, Switch} from 'react-router-dom';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Init}/>
            <Route exact path="/kasia" component={Gestion}/>
            <Route exact path="/despachoUno" component={DespachoUno}/>
            <Route exact path="/despachoDos" component={DespachoDos}/>
            <Route exact path="/empresaUno" component={EmpresaUno}/>
            <Route exact path="/empresaDos" component={EmpresaDos}/>
            <Route exact path="/desa" component={EmpresaDesa}/>
            <Route exact path="/materialidadUno" component={MaterialidadUno}/>
            <Route exact path="/materialidadDos" component={MaterialidadDos}/>



        </Switch>
    );
};

export default AppRouter;
