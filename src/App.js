import React, { Fragment } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/_main/Header';
import Sidenav from './components/_main/Sidenav';

import AppRoutes from './routes';

function App() {
  return (
    <div className="App text-left">
        <Container fluid>
            <Row>
              
                <Col sm={2} className="bg-dark full-height">
                  <Sidenav />
                </Col>
                <Col sm={10} className="p-0">
                  <Header />
                  <AppRoutes />
                </Col>
            </Row>
        </Container>
        
    </div>
  );
}

export default App;
