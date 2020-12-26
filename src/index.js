import Login from 'login/login';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './assets/css/new-style-boutique.css';

import AdminLayout from './layouts/Admin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/dashboard" to="/admin/dashboard" />
      <Redirect from="/product" to="/admin/product" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

