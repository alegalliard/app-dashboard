import React from "react";
import { BrowserRouter as Router, 
                          Route, 
                          //Link, Redirect
                          Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import Page404 from './pages/Page404';
import ContentPage from './pages/ContentPage';
import ContentDetail from './pages/ContentDetail';


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/logout" component={LogoutPage} />
                <Route path="/conteudo" exact component={ContentPage} />
                <Route path="/conteudo/:id" component={ContentDetail} />
                <Route component={Page404} />
            </Switch>
        </Router>
    );
}
