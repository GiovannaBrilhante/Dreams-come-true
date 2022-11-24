import React from "react"
import { Routes, Route } from "react-router-dom"
import CrudRestaurante from "./components/CrudRestaurante/CrudRestaurante"
import NotFound from "./components/NotFound/NotFound"
import CrudFilme from "./components/CrudFilme/CrudFilme"
import CrudCarometro from "./components/CrudCarometro/CrudCarometro"
import Home from "./components/Home/body/Home"

export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/' element={ <Home/> } />
            <Route path='/restaurantes' element={<CrudRestaurante/>} />
            <Route path="/filmes" element={<CrudFilme/>} />
            <Route path="/carometro" element={<CrudCarometro/>} />

            <Route /*Not found page*/ path='*' element={<NotFound/>} />
        </Routes>
    )
}