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

    limpar(){
        this.setState({ usuario: initialState.usuario})
    }

    salvar(){
        const usuario = this.state.usuario
        const metodo = "post"

        axios[metodo] (urlAPI, usuario).then(resp => {
            const lista = this.getListaAtualizada(resp.data)
            this.setState({ usuario: initialState.usuario, lista})
        })
    }

    getListaAtualizada(usuario) {
        const lista = this.state.lista.filter(a => a.id !== usuario.id)
        lista.unshift(usuario)
        return lista
    }

    atualizaCampo(event){
        //clonar usuario a partit do state para não alterar o state diretamente
        const usuario = {...this.state.usuario}
        //atualizar o state
        this.setState({ usuario})
    }

    renderForm(){
        return(
            <div className="inclui-container">
                <label> Username: </label>
                <input 
                    type="text"
                    id="username"
                    placeholder= "Qual seu username"
                    className="form-imput"
                    name="username"
                    value={this.state.usuario.username}
                    onChange={ e => this.atualizaCampo(e)}
                />
                <label> Função: </label>
                <input 
                    type="text"
                    id="cargo"
                    placeholder= "Qual sua função? "
                    className="form-imput"
                    name="cargo"
                    value={this.state.usuario.cargo}
                    onChange={ e => this.atualizaCampo(e)}
                />
                <label> Senha: </label>
                <input 
                    type="text"
                    id="senha"
                    placeholder= "Qual será sua senha? "
                    className="form-imput"
                    name="senha"
                    value={this.state.usuario.senha}
                    onChange={ e => this.atualizaCampo(e)}
                />
                <button className="btnSalvar"
                    onClick={ e => this.salvar(e)}>
                        Salvar
                </button>
                <button className="btnCancelar"
                    onClick={e => this.limpar(e)} >
                        Cancelar
                </button>
            </div>
        )
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
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}