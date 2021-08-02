/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { Abc } from './templates/Abc';
import { App } from './templates/App';
import {Page404} from './templates/Page404'

// passo a passo: 1º colocar o browser router, 2º joga o switch e dentro do swicth a rota. O menu fica fora do switch.
// quanto mais específica for a rota, sempre colocar ela primeiro.
// na route a ordem importa, se eu trocar app por abc, apesar de chamar abc embaixo ele carregará a home (app).
//se colca "exact" na home para especificar que é a home
//ao invés do link, você também pode usar "a". A diferença é que o a faz o reload da pagina e o link nao.  É melhor usar o link.
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/abc/:slug?/:id?" component={Abc} />
        <Route path="/" component={App} exact/>
        <Route path="*" component={Page404}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
