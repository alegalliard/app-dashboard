import React, { Component, Fragment } from 'react';
import { Nav, Tabs, Tab, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './main.css';
export default class Header extends Component {
    clientName() {
        return `${process.env.REACT_APP_CLIENT_NAME} - App Dashboard`;
    }
    render() {
        return (
            <Navbar expand="lg" className="navbar sticky-top flex-md-nowrap p-0">
                <Navbar.Brand href="#home">
                    <img src="" alt={this.clientName()} />
                </Navbar.Brand>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <Nav.Link href="/home" className="text-light ">Home</Nav.Link>
                    </Tab>
                    <Tab eventKey="conteudo" title="Conteúdo">
                        <Nav.Link href="/conteudo" eventKey="link-2" className="text-light">Conteúdo</Nav.Link>
                    </Tab>
                </Tabs>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    
                </Navbar.Collapse>
            </Navbar>

            
        )
    }
}