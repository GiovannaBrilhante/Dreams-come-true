import "./Menu.css"
import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

import AuthService from '../../services/AuthService'

export default function Menu(props) {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (user)
            setCurrentUser(user)
    }, [])

    return (
        <nav className='menu'>
            <NavLink to="/" activeClassName="active">
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