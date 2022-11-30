import React, { useEffect, useState } from "react"
import "./CrudRestaurante.css"
import Main from "../../templates/Main"
import axios from "axios"

import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs"

const title = "Cadastro de restaurantes"

const API_URL_RESTA = "http://localhost:5147/api/restaurante"
const API_URL_FILME = "http://localhost:5147/api/filme"
const initialState = {
    restaurante: { idRestaurante: 0, name: "", avaliacao: 5, codFilme: 0, url: "" },
    filme: { idFilmes: 0, name: "", avaliacao: 5, ano: 2020, categoria: "" },
    listaRestaurantes: [{
        idRestaurante: 1, name: "Restaurante 1", avaliacao: 5, codFilme: 1,
    }],
    listaFilmes: [
        { idFilme: 1, name: "Para todos os garotos que ja amei", avaliacao: 5, ano: 2017, categoria: "Romance", },
        { idFilme: 2, name: "Para todos os garotos que nao amei", avaliacao: 0, ano: 2022, categoria: "Romantico", }],
}


export default function CrudRestaurante() {
    const [restaurante, setRestaurante] = useState(initialState.restaurante)
    const [listaRestaurantes, setListaRestaurantes] = useState(
        initialState.listaRestaurantes
    )
    const [listaFilmes, setListaFilmes] = useState(initialState.listaFilmes)

    useEffect(() => {
        /* 
        axios(API_URL_RESTA)
            .then((resp) => {
                setListaRestaurantes(resp.data)
            })
            .catch((err) => {
                console.dir(err)
            })
        axios(API_URL_FILME)
            .then((resp) => {
                setListaFilmes(resp.data)
            })
            .catch((err) => {
                console.dir(err)
            })*/
    })

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
            })
    }

    const getListaAtualizada = (restaurante, add = true) => {
        const lista = listaRestaurantes.filter(
            (a) => a.id !== restaurante.id
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
                    name="codFilme"
                    value={restaurante.codFilme}
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
                            <th className="tabTituloAvaliacao">URL</th>
                            <th className="tabTituloAcoes title">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(listaRestaurantes)
                            ? listaRestaurantes.map((rest) => (
                                <tr key={rest.id}>
                                    <td>{rest.name}</td>
                                    <td>{rest.codFilme}</td>
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
            {renderTable()}
        </Main>
    )
}
