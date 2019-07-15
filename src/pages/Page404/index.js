import React, { Component, Fragment } from 'react';

export default class page404 extends Component {
    render() {
        return (
            <Fragment>
                <h1>404 - não encontrado</h1>
                <p>O caminho { window.location.pathname } não existe ou foi removido.</p>
            </Fragment>
        )
    }
}