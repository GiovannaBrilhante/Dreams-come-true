import "./Menu.css"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Menu(props) {
    const [currentUser, setCurrentUser] = useState(undefined)

    return (
        <nav className='menu'>
            <NavLink to="/" activeClassName="active">
                Home
            </NavLink>

            <NavLink to="/restaurantes" activeClassName="active">
                Restaurantes
            </NavLink>

            <NavLink to="/filmes" activeClassName="active">
                Filmes
            </NavLink>
            <NavLink to="/carometro" activeClassName="active">
                Carômetro
            </NavLink>
            <NavLink to="/usuarios" activeClassName="active">
                Usuários
            </NavLink>
            <div className="enterMethod">
                {currentUser ? (
                    <NavLink to="/logout" activeClassName="active">
                        logout
                    </NavLink>
                ) : (
                    <NavLink to="/login" activeClassName="active">
                        Login
                    </NavLink>
                )}
            </div>
        </nav>
    )
}