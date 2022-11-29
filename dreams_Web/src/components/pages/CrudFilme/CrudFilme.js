import React, { useEffect, useState } from "react"
import "./CrudFilme.css"
import Main from "../../templates/Main"
import UserService from "../../../services/UserService"

const title = "Cadastro de filmes"

export default function CrudFilme() {
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
                            <th className='tabTituloRestaurantes'>Restaurantes do filme</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map(
                            (filme) =>
                                <tr key={filme.id}>
                                    <td>{filme.name}</td>
                                    <td>{filme.avaliacao}</td>
                                    <td>{filme.ano}</td>
                                    <td>{filme.categoria}</td>
                                    <td>{filme.restaurantes}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <Main title={title}>
            {(mens != null) ? "Problema com conexão ou autorização (contactar administrador)." : renderTable()}
        </Main>
    )
}