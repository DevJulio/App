import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Index from "./pages/Index";
import List from "./pages/List";
import Edicao from "./pages/Edicao";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index}></Route>
                <Route path="/Cadastro" component={Cadastro}></Route>
                <Route path="/List" component={List}></Route>
                <Route path="/Edicao" component={Edicao}></Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes