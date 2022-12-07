import "./Menu.css"
import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

import AuthService from "../../services/AuthService"

export default function Menu(_props) {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => { // Verifica se o usuario esta logado ao renderizar o componente
        const user = AuthService.getCurrentUser()
        if (user)
            setCurrentUser(user)
    }, [])

    return (
        // Renderiza o menu de navegação
        // Com o NavLink, o menu fica destacado quando o usuario esta na pagina
        // usando o activeClassname e um css pra pegar essa classname
        <nav className='menu'>
            <NavLink to="/" activeClassName="active"> {/* activeClassName="active" = className={({ isActive }) => isActive? "active": ''}*/}
                Sonho
            </NavLink>
            <NavLink to="/realidade" activeClassName="active">
                Realidade
            </NavLink>
            <NavLink to="/restaurantes" activeClassName="active">
                Restaurantes
            </NavLink>
            <NavLink to="/filmes" activeClassName="active">
                Filmes
            </NavLink>
            <NavLink to="/usuarios" activeClassName="active">
                Usuários
            </NavLink>

            {/* Troca de acordo entre logado e deslogado*/}
            <div className="enterMethod">
                {currentUser ? (
                    <NavLink to="/logout" activeClassName="active">
                        Logout
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