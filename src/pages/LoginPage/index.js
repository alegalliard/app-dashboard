import React, {Component, Fragment } from 'react';
//import Parse from '../../Parse/config.js';


export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Fragment>                
                <div id="login">
                    <h3 className="text-center text-white pt-5">Login form</h3>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Usuário:</label><br />
                                            <input type="text" name="username" id="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Senha:</label><br />
                                            <input type="text" name="password" id="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="remember-me" className="text-info">
                                                <span>Lembrar-me me</span> 
                                                <span>
                                                    <input id="remember-me" name="remember-me" type="checkbox" />
                                                </span></label><br />
                                            <button type="submit" className="btn btn-info btn-md"> Entrar</button>
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <button className="text-info">Cadastrar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Fragment>
        );
    }
}