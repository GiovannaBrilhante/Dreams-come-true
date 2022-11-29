import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import CrudRestaurante from "./components/pages/CrudRestaurante/CrudRestaurante"
import CrudFilme from "./components/pages/CrudFilme/CrudFilme"
import CrudCarometro from "./components/pages/CrudCarometro/CrudCarometro"
import Home from "./components/pages/Home/Home"
import NotFoundPage from "./components/pages/NotFound/NotFound"

import AuthService from "./services/AuthService"
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"
import Main from "./components/templates/Main"

export default function Rotas() {

    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (user) {
            setCurrentUser(user)
        }
    }, [])

    return (

        <Routes>
            <Route exact path='/' element={<Home />} />

            {currentUser ? (<Route path="/filmes" element={<CrudFilme />} />) : (
                <Route exact path='/filmes'
                    element={
                        <Main title="Cadastro de filmes">
                            <div>Não autorizado! </div>
                        </Main>} />
            )}

            <Route path="/carometro" element={<CrudCarometro />} />
            <Route path='/restaurantes' element={<CrudRestaurante />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" to='/' />

            <Route /*Not found page*/ path='*' element={<NotFoundPage />} />
        </Routes>
    )
}