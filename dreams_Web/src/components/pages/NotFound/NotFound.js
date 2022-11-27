import React from "react"
import "./NotFound.css"
import Main from "../../templates/Main"

export default function NotFoundPage(props) {
    return (
        <Main title={props.title ?? "Pagina não encontrada"}>
            <h1>{props.content ?? "ERROR 404"}</h1>
        </Main>
    )
}