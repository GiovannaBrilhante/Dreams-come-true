import React, { useEffect, useState } from "react"
import "./CrudRestaurante.css"
import Main from "../../templates/Main"
import axios from "axios"

import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs"

const title = "Cadastro de Alunos"

const API_URL_RESTA = "http://localhost:5147/api/restaurante"
//const API_URL_FILME = "http://localhost:5147/api/filme"
const initialState = {
    restaurante: { id: 0, name: "", avaliacao: 5, codFilme: 0 },
    filme: { id: 0, name: "", avaliacao: 5, ano: 0, categoria: "" },
    listaRestaurantes: [{
        idRestaurante: 1, name: "Restaurante 1", avaliacao: 5, codFilme: 1,
    }],
    listaFilmes: [{
        idFilme: 1, name: "Para todos os garotos que ja amei", avaliacao: 5, ano: 1972, categoria: "Romance",
    }],
}


export default function CrudRestaurante() {
    const [restaurante, setRestaurante] = useState(initialState.restaurante)
    const [listaRestaurantes, setListaRestaurantes] = useState(
        initialState.listaRestaurantes
    )
    const [listaFilmes, setListaFilmes] = useState(initialState.listaFilmes)
    setListaFilmes(initialState.listaFilmes)


    useEffect(() => {/*
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
        const restaurante = restaurante
        const metodo = restaurante.id ? "put" : "post"
        const url = restaurante.id
            ? `${API_URL_RESTA}/${restaurante.id}`
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
        const restaurante = { ...restaurante }
        //usar o atributo NAME do input identificar o campo a ser atualizado
        restaurante[event.target.name] = event.target.value
        //atualizar o state
        setRestaurante(restaurante)
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
                <label> Nome: </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Nome do aluno"
                    className="form-input"
                    name="name"
                    value={restaurante.nome}
                    onChange={(e) => atualizaCampo(e)}
                />
                <label> Curso: </label>
                <select
                    name="idFilme"
                    value={restaurante.codFilme}
                    onChange={(e) => {
                        atualizaFilme(e)
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
                <br />
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
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloFilme">Filme</th>
                            <th className="tabTituloAvaliacao">Avaliacao</th>
                            <th className="tabTituloAcoes title">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(listaRestaurantes)
                            ? listaRestaurantes.map((rest) => (
                                <tr key={rest.id}>
                                    <td>{rest.name}</td>
                                    <td>{rest.avaliacao}</td>
                                    <td>{rest.codFilme}</td>
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
