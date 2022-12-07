import React, { useState, useEffect } from "react"
import "./CrudRealidade.css"

import UserService from "../../../services/UserService"
import Main from "../../templates/Main"

const avatarAleatorio = () => {
    // Gera um numero, converte para a base 36 e dps pega os 7 primeiros caracteres
    const codigo = Math.random().toString(36).substring(2, 9)
    const avatarUrl = `https://avatars.dicebear.com/api/big-smile/${codigo}.svg`

    return avatarUrl
}

export default function CrudCarometro() {
    const stateInicial = {
        filme: { idFilme: "", avaliacao: "", name: "", categoria: "" },
        listaRealidades: [],
        listaFilmes: [],
    }

    const titulo = "Aqui seus sonhos viram realidade"
    const [listaRealidades, setRealidades] = useState(stateInicial.listaRealidades)
    const [listaFilmes, setFilmes] = useState(stateInicial.listaFilmes)
    // eslint-disable-next-line no-unused-vars
    const [message, setMessage] = useState("")
    const [filme, setFilme] = useState(stateInicial.filme)

    useEffect(() => {
        UserService.getPublicContent
            .getFilmes()
            .then((resp) => setFilmes(resp.data))
            .catch((err) => {
                console.log(err)
            })
    }, [filme])

    const filtrarRestaurantesPorFilme = async (event) => {
        const nomeFilme = event.target.value
        if (nomeFilme === "") {
            setRealidades(stateInicial.listaRealidades)
            return
        }
        filme.name = nomeFilme
        const listaRestaurantes = await getListaRestauranteDoFilme(nomeFilme)
        if (Array.isArray(listaRestaurantes)) {
            setRealidades(listaRestaurantes)
            setFilme(filme)
        }
    }

    const getListaRestauranteDoFilme = async (nomeFilme) => {
        return UserService.getPublicContent.getRealidades()
            .then((resp) => {
                const listaRestaurantes = resp.data
                return listaRestaurantes.filter(
                    (rest) => rest.nameFilme === nomeFilme
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const renderSelect = () => {
        return (
            <div className="select-container">
                <label> Curso: </label>
                <select className="select-carometro" value={filme.name} onChange={e => { filtrarRestaurantesPorFilme(e) }} required>
                    <option key="" value="" disabled={true}>  -- Escolha um curso -- </option>
                    {listaFilmes.map((filme) =>
                        <option key={filme.id} name="codCurso" value={filme.name}>
                            {filme.avaliacao} : {filme.name} - {filme.categoria}
                        </option>
                    )}
                </select>
            </div>
        )
    }


    const renderCarometro = () => (
        <div className="card-row">
            {listaRealidades.length > 0 ?
                listaRealidades.map((restaurante) => (
                    <div className="card dream draw-border" key={restaurante.idRestaurante} >
                        <img className="card-img" src={restaurante.url} alt={"Avatar: " + restaurante.name} />
                        <span className="card-title">{restaurante.name}</span>
                        <span className="card-description">Nota: {restaurante.avaliacao}</span>
                        <span className="card-description">Filme: {restaurante.nameFilme}</span>
                    </div>
                )) : null}
        </div>
    )

    return (
        <div className="container carometro">
            <h4 className="msgErro">{message}</h4>
            <div className="header">
                <h2>{titulo}</h2>
            </div>
            {renderSelect()}
            <main>
                <div className="card-container">
                    {renderCarometro()}
                </div>
            </main>
        </div>

    )
}


