import React, { useEffect, useState } from "react"
import "./CrudRestaurante.css"
import Main from "../../templates/Main"
import axios from "axios"
import UserService from "../../../services/UserService"

import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs"

const title = "Cadastro de restaurantes"

const API_URL_RESTA = "http://localhost:5006/api/restaurante"
const initialState = {
    restaurante: { idRestaurante: 0, name: "", avaliacao: "", nameFilme: "", url: "" },
    listaRestaurantes: [],
    listaFilmes: [],
    mens: []
}


export default function CrudRestaurante() {
    const [restaurante, setRestaurante] = useState(initialState.restaurante)
    const [listaRestaurantes, setListaRestaurantes] = useState(initialState.listaRestaurantes)
    const [listaFilmes, setListaFilmes] = useState(initialState.listaFilmes)
    const [message, setMessage] = useState("")
    const [mens, setMens] = useState(initialState.mens)

    //pra que [] ?
    useEffect(() => {
        UserService.getUsuarioBoard().then(
            (response) => {
                console.log("useEffect getUsuarioBoard: " + response.data)
                setListaRestaurantes(response.data)
                setListaFilmes(response.data)
                setMens(null)
            },
            (error) => {
                const _mens =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString()
                setMens(_mens)
                console.log("_mens: " + _mens)
            }
        )
    }, [])

    const limparForm = () => setRestaurante(initialState.restaurante)

    const salvar = () => {
        const metodo = restaurante.idRestaurante ? "put" : "post"
        const url = restaurante.idRestaurante
            ? `${API_URL_RESTA}/${restaurante.idRestaurante}`
            : API_URL_RESTA

        axios[metodo](url, restaurante)
            .then((resp) => {
                const restaurantes = getListaAtualizada(resp.data)
                setRestaurante(initialState.restaurante)
                setListaRestaurantes(restaurantes)
            })
            .catch((err) => {
                console.dir(err)

                const resMessage = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
                setMessage(resMessage)
            })
    }

    const getListaAtualizada = (restaurante, add = true) => {
        const lista = listaRestaurantes.filter(
            (a) => a.idRestaurante !== restaurante.idRestaurante
        )
        if (add) lista.unshift(restaurante)
        return lista
    }

    const atualizaCampo = (event) => {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const newRestaurante = { ...restaurante }
        //usar o atributo NAME do input identificar o campo a ser atualizado
        newRestaurante[event.target.name] = event.target.value
        //atualizar o state
        setRestaurante(newRestaurante)
    }

    const atualizaFilme = (event) => {
        const filme = { ...filme }
        restaurante.idFilme = Number(event.target.value)
        setRestaurante(restaurante)
    }

    const carregar = (restaurante) => {
        setRestaurante(restaurante)
    }

    const remover = (restaurante) => {
        const url = API_URL_RESTA + "/" + restaurante.id
        if (!window.confirm("Confirma remoção do restaurante: " + restaurante.ra)) return

        axios["delete"](url, restaurante)
            .then((_resp) => {
                const lista = getListaAtualizada(restaurante, false)
                setRestaurante(initialState.restaurante)
                setListaRestaurantes(lista)
            })
            .catch((err) => {
                console.dir(err)

                const resMessage = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
                setMessage(resMessage)
            })
    }

    const renderForm = () => {
        return (
            <div className="inclui-container">
                <label> Restaurante: </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Nome"
                    className="form-input"
                    name="name"
                    value={restaurante.name}
                    onChange={(e) => atualizaCampo(e)}
                />

                <label> Filme: </label>
                <select
                    name="nameFilme"
                    value={restaurante.nameFilme}
                    onChange={(e) => {
                        atualizaCampo(e)
                    }}
                    required
                >
                    <option disabled={true} key="" value="">
                        {" "} -- Escolha uma opção -- {" "}
                    </option>
                    {listaFilmes.map((filme) => (
                        <option
                            key={filme.idFilme}
                            name="idFilme"
                            value={filme.idFilme}
                        >
                            {filme.name} - {filme.ano}
                        </option>
                    ))}
                </select>

                <label> Avaliação: </label>
                <select
                    name="avaliacao"
                    value={restaurante.avaliacao}
                    onChange={(e) => {
                        atualizaCampo(e)
                    }}
                    required
                >
                    <option key="5.0" value="5.0">
                        5.0
                    </option>
                    <option key="4.0" value="4.0">
                        4.0
                    </option>
                    <option key="3.0" value="3.0">
                        3.0
                    </option>
                    <option key="2.0" value="2.0">
                        2.0
                    </option>
                    <option key="1.0" value="1.0">
                        1.0
                    </option>
                </select>

                <br />
                <label> URL: </label>
                <input
                    type="text"
                    id="url"
                    placeholder="URL"
                    className="form-input"
                    name="url"
                    value={restaurante.url}
                    onChange={(e) => atualizaCampo(e)}
                />
                <button
                    className="btn btnSalvar"
                    onClick={(e) => salvar(e)}
                >
                    Salvar
                </button>
                <button
                    className="btn btnCancelar"
                    onClick={(e) => limparForm(e)}
                >
                    Cancelar
                </button>
            </div>
        )
    }

    const renderTable = () => {
        return (
            <div className="listagem">
                <table className="listaAlunos styled-table" id="tblListaAlunos">
                    <thead>
                        <tr className="cabecTabela title">
                            <th className="tabTituloNome">Restaurante</th>
                            <th className="tabTituloFilme">Filme</th>
                            <th className="tabTituloAvaliacao">Avaliacao</th>
                            <th className="tabTituloUrl">URL</th>
                            <th className="tabTituloAcoes title">Ações</th>
                            <th className="tabTituloAcoes title">Visitados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(listaRestaurantes)
                            ? listaRestaurantes.map((rest) => (
                                <tr key={rest.id}>
                                    <td>{rest.nameFilme}</td>
                                    <td>{rest.name}</td>
                                    <td>{rest.avaliacao}</td>
                                    <td>{rest.url}</td>
                                    <td className="td-buttons">
                                        <button
                                            className="btn btn-edit"
                                            onClick={() =>
                                                carregar(rest)
                                            }
                                        >
                                            <BsFillPencilFill /> Alterar
                                        </button>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                remover(rest)
                                            }
                                        >
                                            <BsFillTrash2Fill /> Excluir
                                        </button>
                                    </td>
                                    <td><input type="checkbox" /></td>
                                </tr>
                            ))
                            : null}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <Main title={title}>
            {renderForm()}
            <h4 className="msgErro">{message}</h4>
            {renderTable()}
        </Main>
    )
}
