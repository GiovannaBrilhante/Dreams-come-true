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
<<<<<<< HEAD

            <Link to="/login">
                Registrar-se
            </Link>

            <Link to="/carometro">
                Entrar
=======
            <Link to="/usuarios">
                Usuários
>>>>>>> 30e8c70aa4aa7303d5eccd3bc0a60a208e53b203
            </Link>
        </nav>
    )
}