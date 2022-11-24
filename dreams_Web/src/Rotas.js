import React from "react"
import { Routes, Route } from "react-router-dom"
import Main from "./components/templates/Main"
import CrudRestaurante from "./components/CrudRestaurante/CrudRestaurante"
import NotFound from "./components/NotFound/NotFound"
import CrudFilme from "./components/CrudFilme/CrudFilme"
import CrudCarometro from "./components/CrudCarometro/CrudCarometro"
import CrudUsuario from "./components/CrudUsuario/CrudUsuario"

export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="Bem Vindo!">
                        <div>Cadastro de alunos, cursos e carômetro</div>
                    </Main> }
            />
            <Route path='/restaurantes' element={<CrudRestaurante/>} />
            <Route path="/filmes" element={<CrudFilme/>} />
            <Route path="/carometro" element={<CrudCarometro/>} />
            <Route path="/usuarios" element={<CrudUsuario/>} />

            <Route /*Not found page*/ path='*' element={<NotFound/>} />
        </Routes>
    )
}