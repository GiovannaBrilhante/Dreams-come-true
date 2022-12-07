import React, { Component } from "react"
import "./CrudUsuario.css"
import Main from "../../templates/Main"
const title = "Cadastro de Usuários"
const urlAPI = "http://localhost:5006/api/usuario"
const initialState = {
    usuario: { id: 0, username: "", senha: "", role: "" },
    lista: [],
    message: ""
}

import UserService from "../../../services/UserService"

export default class CrudUsuario extends Component { // Exibe a pagina de cadastro e lista de usuarios
    state = { ...initialState }
    componentDidMount() { // Executa assim que o componente é renderizado
        UserService.getUsuarioBoard().then(  // Atualiza a lista de usuarios, buscando na API
            (response) => {
                console.log("useEffect getUsuarioBoard: " + response.data)
                this.setState({ lista: response.data })
                this.setState({ message: "" })
            },
            (error) => {
                const _mens =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString()
                this.setState({ message: _mens })
                console.log("_mens: " + _mens)
            }
        )
    }

    limpar() {
        this.setState({ usuario: initialState.usuario })
    }


    salvar() { // Salva o usuario no banco de dados
        const usuario = this.state.usuario
        const metodo = usuario.id ? "put" : "post"
        const url = usuario.id != 0 ? `${urlAPI}/${usuario.id}` : urlAPI

        UserService.salvar_usuario(metodo, url, usuario).then( 
            (resp) => {
                const lista = this.getListaAtualizada(resp.data)
                this.setState({ usuario: initialState.usuario, lista })
            },
            (err) => {
                console.dir(err)


                const resMessage = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
                this.setState({ message: resMessage })
            }
        )
    }

    getListaAtualizada(usuario, add = true) { 
        const lista = this.state.lista.filter(a => a.id !== usuario.id)
        if (add) lista.unshift(usuario)
        return lista
    }

    atualizaCampo(event) { // Atualiza o campo do usuario, com o valor digitado
        //clonar usuario a partit do state para não alterar o state diretamente
        const usuario = { ...this.state.usuario }
        usuario[event.target.name] = event.target.value // Encontra o campo e atualiza o valor
        //atualizar o state
        this.setState({ usuario })
    }

    renderForm() {
        return (
            <div className="inclui-container">
                <label> Username: </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Qual seu username"
                    className="form-imput"
                    name="username"
                    value={this.state.usuario.username}
                    onChange={e => this.atualizaCampo(e)}
                />
                <label> Função: </label>
                <input
                    type="text"
                    id="role"
                    placeholder="Qual sua função? "
                    className="form-imput"
                    name="role"
                    value={this.state.usuario.role}
                    onChange={e => this.atualizaCampo(e)}
                />
                <label> Senha: </label>
                <input
                    type="text"
                    id="senha"
                    placeholder="Qual será sua senha? "
                    className="form-imput"
                    name="senha"
                    value={this.state.usuario.senha}
                    onChange={e => this.atualizaCampo(e)}
                />
                <button className="btnSalvar"
                    onClick={e => this.salvar(e)}>
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
                        <tr className='cabecTabela'>
                            <th className='tabTituloUsername'> Username</th>
                            {/* <th className='tabTituloSenha'> Senha</th> */}
                            <th className='tabTituloCargo'> Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(
                            (usuario) =>
                                <tr key={usuario.id}>
                                    <td>{usuario.username}</td>
                                    {/*<td>{usuario.senha}</td>*/}
                                    <td>{usuario.role}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    render() {
        return (
            <Main title={title}>
                {this.renderForm()} { /* Renderiza o formulario de cadastro*/}

                { /* Cuida das mensagens de erro provenientes da API, seja de autorização ou problemas de conexão*/}
                <h4 className="msgErro">{this.state.message ? "Problema com conexão ou autorização (contactar administrador)." : ""}</h4>
                
                {this.renderTable()}  { /* Renderiza a lista*/}
            </Main>
        )
    }
}