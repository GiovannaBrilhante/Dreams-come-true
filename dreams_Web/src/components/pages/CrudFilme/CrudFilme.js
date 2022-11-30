import React, { useEffect, useState } from "react"
import "./CrudFilme.css"
import Main from "../../templates/Main"
import UserService from "../../../services/UserService"
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs"

const title = "Cadastro de filmes"
const API_URL = "http://localhost:5006/api/Filmes"

export default function CrudFilme(props) {

    const initialState = {
        filme: { idFilme: 0, name: "", avaliacao: "", ano: 0, categoria: "" }
    }
    const [filme, setFilme] = useState(initialState.filme)
    const [lista, setLista] = useState([])
    const [mens, setMens] = useState(null)

    useEffect(() => {
        UserService.getUsuarioBoard().then(
            (response) => {
                console.log("useEffect getUsuarioBoard: " + response.data)
                setLista(response.data)
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

    const limparRegistro = () => setFilme(initialState.filme)

    const salvarFilme = () => {
        const metodo = filme.idFilme ? "put" : "post"
        const url = filme.idFilme != 0 ? `${API_URL}/${filme.idFilme}` : API_URL
        filme.ano = Number(filme.ano)
        console.log(filme)
        UserService.salvar_filme(metodo, url, filme)
            .then((resp) => {
                const lista = getListaAtualizada(resp.data)

                setFilme(initialState.filme)
                setLista(lista)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const getListaAtualizada = (filme, add = true) => {
        const listaNova = lista.filter((a) => a.idFilme !== filme.idFilme)
        if (add) listaNova.unshift(filme)
        return listaNova
    }

    const atualizaCampo = (event) => {
        const { name, value } = event.target

        setFilme({
            ...filme,
            [name]: value,
        })
    }

    const atualizarFilme = (filme) => setFilme(filme)

    const removerFilme = (filme) => {
        if (!window.confirm("Confirma remoção do filme: " + filme.name))
            return

        UserService.deletarFilme(filme.idFilme)
            .then((_resp) => {
                const lista = getListaAtualizada(filme, false)
                setFilme(initialState.filme)
                setLista(lista)
            })
            .catch((err) => {
                console.dir(err)
            })
    }

    const renderForm = () => {
        return (
            <div className="inclui-container">
                <label> Nome: </label>
                {/*id, name e value tem que ser igual*/}
                <input
                    type="text"
                    id="name"
                    placeholder="Nome do filme"
                    className="form-input"
                    name="name"
                    value={filme.name}
                    onChange={(e) => atualizaCampo(e)}
                />
                <label> Avaliação: </label>
                <input
                    type="text"
                    id="avaliacao"
                    placeholder="Avaliação"
                    className="form-input"
                    name="avaliacao"
                    value={filme.avaliacao}
                    onChange={(e) => atualizaCampo(e)}
                />
                <label> Ano: </label>
                <input
                    type="text"
                    id="ano"
                    placeholder="Ano"
                    className="form-input"
                    name="ano"
                    value={filme.ano}
                    onChange={(e) => atualizaCampo(e)}
                />
                <label> Categoria: </label>
                <input
                    type="text"
                    id="categoria"
                    placeholder="Categoria"
                    className="form-input"
                    name="categoria"
                    value={filme.categoria}
                    onChange={(e) => atualizaCampo(e)}
                />
                <br />
                <button className="btnCancelar"
                    onClick={(e) => limparRegistro(e)}
                >
                    Limpar
                </button>
                <button className="btnSalvar"
                    onClick={(e) => salvarFilme(e)}
                >
                    Salvar
                </button>
            </div>
        )
    }
    const renderTable = () => {
        return (
            <div className='listagem'>
                <table className='listaFilmes' id="tblListaFilmes">
                    <thead>
                        <tr className='cabecTabela'>
                            <th className='tabTituloNome'>Nome do filme</th>
                            <th className='tabTituloAvaliacao'>Avaliação do filme</th>
                            <th className='tabTituloAno'>Ano do filme</th>
                            <th className='tabTituloCategoria'>Categoria do filme</th>
                            <th className="tabTituloAcoes"> Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(lista)
                            ? lista.map(
                                (filme) =>
                                    <tr key={filme.idFilme}>
                                        <td>{filme.name}</td>
                                        <td>{filme.avaliacao}</td>
                                        <td>{filme.ano}</td>
                                        <td>{filme.categoria}</td>
                                        <td>{filme.restaurantes}</td>
                                        <td className="td-buttons">
                                            <button className="btn btn-edit"
                                                onClick={() =>
                                                    atualizarFilme(filme)}
                                            ><BsFillPencilFill />Alterar
                                            </button>
                                            <button className="btn btn-danger"
                                                onClick={() =>
                                                    removerFilme(filme)}
                                            ><BsFillTrash2Fill />Excluir
                                            </button>
                                        </td>
                                    </tr>
                            )
                            : null}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <Main title={title}>
            {(mens != null) ? "Problema com conexão ou autorização (contactar administrador)." :
                <>
                    {renderForm()}
                    {renderTable()}
                </>}
        </Main>
    )
}