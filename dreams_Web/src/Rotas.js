import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import CrudRestaurante from "./components/pages/CrudRestaurante/CrudRestaurante"
import CrudFilme from "./components/pages/CrudFilme/CrudFilme"
import CrudRealidade from "./components/pages/CrudRealidade/CrudRealidade"
import CrudUsuario from "./components/pages/CrudUsuario/CrudUsuario"
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

            {currentUser ? (<Route path="/restaurantes" element={<CrudRestaurante />} />) : (
                <Route exact path='/restaurantes'
                    element={
                        <Main title="Cadastro de restaurantes">
                            <div>Não autorizado! </div>
                        </Main>} />
            )}

            <Route path="/filmes" element={<CrudFilme />} /> 
            <Route path="/realidade" element={<CrudRealidade />} />
            <Route path="/usuarios" element={<CrudUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}