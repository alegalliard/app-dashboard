import React, {Component, Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import Parse from '../../Parse/config.js';
import { BrowserRouter as Link } from 'react-router-dom';
import './content.css';
const ParseConn = new Parse();


export default class ContentPage extends Component {
    constructor() {
        super();
        this.state = {
            solicitacoes: []
        }
        this.disableItem = this.disableItem.bind(this);
    }
    componentDidMount() {      
       
        fetch(`${ParseConn.getUrl()}/classes/NewTopRequests`, {
                method: 'GET', 
                headers: ParseConn.getHeaders()
            })
            .then(response => response.json())
            .then(json => {
                this.setState({solicitacoes: json.results})
                console.log(json)
            })
    }
    disableItem() {
        alert('desabilitar')
    }
    fixFileUrl(filePath) {
        return `${ParseConn.getUrl()}/files/${ParseConn.getAppId()}/${filePath.name}`
    }
    render() {
        return (
            <Fragment>
                <h1>Conteúdo do app</h1>
                <p className="lead">Edite os itens que aparecem na lista de solicitações.</p>
                <ListGroup>
                {
                    this.state.solicitacoes.map(solicitacao => {
                        return (
                            <ListGroup.Item className="d-flex align-items-stretch" key={solicitacao.objectId}>                    
                                <div className="p-2 bd-highlight">
                                    <img src={this.fixFileUrl(solicitacao.image)} alt="Imagem da solicitação" className="thumb" />
                                </div>
                                <div className="p-2 flex-grow-1 bd-highlight">
                                    <a href={`/conteudo/${solicitacao.objectId}`}>{solicitacao.alias}</a>
                                </div>
                                <div className="p-2 bd-highlight">
                                    <button onClick={this.disableItem}>Desativar</button>
                                </div>
                            </ListGroup.Item>
                        )
                    })
                }
                </ListGroup>
                
            </Fragment>
        );
    }
}