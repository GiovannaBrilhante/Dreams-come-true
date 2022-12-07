import axios from "axios"
import auth from "./AuthService"

const API_URL = "http://localhost:5006/api/" // URL da API

const headerAuthorization = () => { // Headers para autenticação JWT, com o token do usuario 
    return {
        headers: {
            Authorization: "Bearer " + auth.getCurrentUser()?.token
        }
    }
}

// Rotas e metodos publicos da API
const getPublicContent = {
    getFilmes: () => {
        return axios.get(API_URL + "Filmes") // Pega todos os filmes(sonhos)
    },
    getRealidades: () => {
        return axios.get(API_URL + "Restaurantes") // Pega todos os restaurantes(realidades)
    }
}

// Rotas e metodos privados da API
// Todos os metodos privados necessitam de autenticação JWT
// Rotas GET
const getUsuarioBoard = async () => { // Rota get para pegar os dados dos usuarios
    return await axios.get(API_URL + "usuario", headerAuthorization())
}

const getRestauranteBoard = async () => { // Rota get para pegar os dados dos restaurantes
    return await axios.get(API_URL + "Restaurantes", headerAuthorization())
}
// Rotas POST, PUT, DELETE
const salvar_filme = async (method, url, filme) => { // Rota para salvar ou alterar um filme
    return await axios[method](url, filme, headerAuthorization())
}

const deletar_filme = async (id) => { // Rota para deletar um filme por id
    return await axios.delete(API_URL + "Filmes/" + id, headerAuthorization())
}

const salvar_restaurante = async (method, url, restaurante) => { // Rota para salvar um restaurante
    return await axios[method](url, restaurante, headerAuthorization())
}

const deletar_restaurante = async (id) => { // Rota para deletar um restaurante por id
    return await axios.delete(API_URL + "Restaurantes/" + id, headerAuthorization())
}

const salvar_usuario = async (method, url, usuario) => { // Rota para salvar um usuario
    return await axios[method](url, usuario, headerAuthorization())
}

const deletar_usuario = async (id) => { // Rota para deletar um usuario por id
    return await axios.delete(API_URL + "Usuario/" + id, headerAuthorization())
}

// Exporta o objeto UserService com todas as suas funções (Semelhante ao metodos de um classe)
const UserService = { // Rotas da API
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