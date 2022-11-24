import React, { Component } from "react"
import axios from "axios"
import "./CrudUsuario.css"
import Main from "../templates/Main"

const title = "Cadastro de Usuários"
const urlAPI = "https://localhost:7037/api/usuario" 
const initialState = {
    usuario : { id: 0, username: "", senha: "", cargo: ""},
    lista: []
}

export default class CrudUsuario extends Component {
    state = {...initialState}

    componentDidMount(){
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data})
        })
    }
    renderTable() {
        return (
            <div className="listagem" >
                <table className='listaUsuarios' id='tblListaUsuarios'>
                    <thead>
                        <tr className = 'cabecTabela'>
                            <th className='tabTituloUsername'> Username</th>
                            {/* <th className='tabTituloSenha'> Senha</th> */} 
                            <th className='tabTituloCargo'> Cargo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(
                            (usuario) => 
                                <tr key={usuario.id}>
                                    <td>{usuario.username}</td>
                                    {/*<td>{usuario.senha}</td>*/}
                                    <td>{usuario.cargo}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    render() {
        return (
            <Main title = {title}>
                {this.renderTable()}
            </Main>
        )
    }
}