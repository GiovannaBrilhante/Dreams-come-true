import React from "react"
import "./NotFound.css"
import Main from "../../templates/Main"
import SadDivertidamente from "../../../assets/images/404_tristeza.png"

/* Renderiza a pagina de ERRO 404, quando o usuario acessa uma rota ou lugar que não existe*/
export default function NotFoundPage(props) {
    return (
        <Main title={props.title ?? "Pagina não encontrada"}> 
            <h1>{props.content ?? "Erro 404 - Não foi possível encontrar a página."}</h1>
            <img src={SadDivertidamente} className="not-found-page"/>
        </Main>
    )
}