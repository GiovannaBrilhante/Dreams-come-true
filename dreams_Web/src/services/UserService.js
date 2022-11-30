import axios from "axios"
import auth from "./AuthService"

const API_URL = "http://localhost:5006/api/"
//Cadastro do filme: qualquer um
//Cadastro do restaurante: usuarios
//Cadastro dos usuarios: Administradores
//Menu: todos

const getPublicContent = {
    getFilmes: () => {
        return axios.get(API_URL + "Filmes")
    }
}

const getUsuarioBoard = async () => {
    return await axios.get(API_URL + "Usuario", auth.headerAuthorization())
}

const getRestauranteBoard = async () => {
    return await axios.get(API_URL + "Restaurantes", auth.headerAuthorization())
}

const salvar_filme = async (method, url, filme) => {
    return await axios[method](url, filme, auth.headerAuthorization())
}

const deletar_filme = async (id) => {
    return await axios.delete(API_URL + "Filmes/" + id, auth.headerAuthorization())
}

const salvar_restaurante = async (method, url, restaurante) => {
    return await axios[method](url, restaurante, auth.headerAuthorization())
}

const deletar_restaurante = async (id) => {
    return await axios.delete(API_URL + "Restaurantes/" + id, auth.headerAuthorization())
}

const salvar_usuario = async (method, url, usuario) => {
    return await axios[method](url, usuario, auth.headerAuthorization())
}

const deletar_usuario = async (id) => {
    return await axios.delete(API_URL + "Usuario/" + id, auth.headerAuthorization())
}

const UserService = {
    getPublicContent,
    getUsuarioBoard,
    getRestauranteBoard,
    salvar_filme,
    deletar_filme,
    salvar_restaurante,
    deletar_restaurante,
    salvar_usuario,
    deletar_usuario
}

export default UserService