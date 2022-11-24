import "./Menu.css"
import React from "react"
import { Link } from "react-router-dom"

export default function Menu(_props) {
    return (
        <nav className='menu'>
            <Link to="/restaurantes">
                Restaurantes
            </Link>
            <Link to="/filmes">
                Filmes
            </Link>
            <Link to="/carometro">
                Carômetro
            </Link>

            <Link to="/login">
                Registrar-se
            </Link>

            <Link to="/carometro">
                Entrar
            </Link>
        </nav>
    )
}