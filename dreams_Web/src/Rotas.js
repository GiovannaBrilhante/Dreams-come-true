import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import CrudRestaurante from "./components/CrudRestaurante/CrudRestaurante"
import NotFound from "./components/NotFound/NotFound"
import CrudFilme from "./components/CrudFilme/CrudFilme"
import CrudCarometro from "./components/CrudCarometro/CrudCarometro"
import Home from "./components/Home/body/Home"
import CrudUsuario from "./components/CrudUsuario/CrudUsuario"
import AuthService from "./services/AuthService"
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"

export default function Rotas() {

    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(()=> {
        const user = AuthService.getCurrentUser()
        if(user) {
            setCurrentUser(user)
        }
    }, [])

    return (

        <Routes>
            <Route exact path='/' element={ <Home/> } />
            {currentUser ? (<Route path='/restaurantes' element={<CrudRestaurante/>} />) : (
                <Route exact path='/restaurantes' 
                    element={
                        <Main title="Cadastro de Restaurantes">
                            <div>Não autorizado! </div>
                        </Main>} />
            )}
            
            <Route path="/filmes" element={<CrudFilme/>} />
            <Route path="/carometro" element={<CrudCarometro/>} />
            <Route path="/usuarios" element={<CrudUsuario/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="*" to='/' />

            <Route /*Not found page*/ path='*' element={<NotFound/>} />
        </Routes>
    )
}