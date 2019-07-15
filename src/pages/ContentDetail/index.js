import React, {Component, Fragment} from 'react';
import Parse from '../../Parse/config.js';
import {Form, Col, Row} from 'react-bootstrap';
import moment from 'moment';

const ParseConn = new Parse();
export default class ContentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activateLabel: null,
            activateCheck: false
        };

        this.mountImage = this.mountImage.bind(this);
        this.visibility = this.visibility.bind(this);
        
    }
    
    getFromParse() {
        const objectId = window.location.pathname.split('/')[2];
        fetch(`${ParseConn.getUrl()}/classes/NewTopRequests/${objectId}`, {
            method: "GET",
            headers: ParseConn.getHeaders()
        })
        .then(response => response.json())
        .then(json => {
            if( json.code < 200 || json.code > 399 )
                alert('Objeto não encontrado');

            this.setState({data: json});
            this.visibility(json.visible);
        })
    }

    componentDidMount() {
        this.getFromParse();
    }

    mountImage() {
        const image = (this.state.data.image) ? this.state.data.image.url : '';
        return <img src={image} 
                alt="Imagem de ${this.state.slug}" 
                className="card-img-right flex-auto d-none d-md-block w-100" />;
    }

    visibility(json = null) {
        let currentState = (json === null) ? json : !this.state.activateCheck;
        this.setState({
            activateCheck: currentState,
            activateLabel: (!this.state.activateCheck) ? 'Ativado' : 'Desativado'
        })
    }

    render() {
            console.log(this.state)
        return (
            <Fragment>
                <article>
                
                <Form className="container" id={this.state.data.objectId}>  
                    <fieldset className="row">
                        <legend className="col-12">Editar {this.state.data.alias}</legend>
                        <Col sm="12"><small>Criado em: {moment(this.state.data.createdAt, "YYYYMMDD").fromNow()}</small></Col>


                        <Row>
                            <Col sm="2">
                                {this.mountImage()}
                                <Form.Control type="file" />
                            </Col>

                            <Col sm="8">
                                <Form.Group as={Row} controlId="formPlaintextName">
                                    <Form.Label column sm="2">
                                    Rótulo:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control defaultValue={this.state.data.alias} />                                        
                                    </Col>
                                    <Form.Label column sm="2">
                                        ID do serviço:
                                    </Form.Label>
                                    <Col sm="1">
                                        <Form.Control plaintext defaultValue={this.state.data.idRequest} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Formulário atual:
                                    </Form.Label>
                                    <Col sm="1">
                                        <Form.Control plaintext defaultValue={this.state.data.idRequest} />
                                    </Col>
                                    <Col sm="3">
                                        <a href="">Ver formulário</a>
                                    </Col>
                                    
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Visibilidade:
                                    </Form.Label>
                                    <Col sm="2">
                                        <Form.Check inline
                                            id="ativar"
                                            onChange={this.visibility}
                                            checked={this.state.activateCheck}
                                            label={this.state.activateLabel}  />
                                    </Col>
                                </Form.Group>


                                

                                
                            </Col>
                        </Row>
                        
                    </fieldset>
                </Form>

                </article>
            </Fragment>
        )
    }
}