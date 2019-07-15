import React, { Component, Fragment } from 'react';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './main.css';
export default class Header extends Component {
    environment() {
        return (process.env.NODE_ENV === 'production') ? '' : <small><br/>Running on {process.env.NODE_ENV} mode</small>;
    }
    render() {
        return (
            <Navbar expand="lg" className="navbar navbar-dark">
                <Navbar.Brand href="#home">
                    {/* <img src="" alt="Empresa logo" /> */}
                    {this.environment()}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" className="text-light ">Mobile</Nav.Link>
                        <Nav.Link href="/conteudo" eventKey="link-2" className="text-light">Portal</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
        )
    }
}