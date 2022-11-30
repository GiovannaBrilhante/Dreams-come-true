import axios from "axios"

const API_URL = "http://localhost:5006/api/"
//Cadastro do filme: usuarios
//Cadastro do restaurante: usuarios
//Menu: todos

const user = JSON.parse(localStorage.getItem('user'))

const getPublicContent = () => {
    return axios.get(API_URL + "filmes", {headers: { Authorization: 'Bearer' + user.token}})
}

const getUsuarioBoard = async () => {
    return await axios.get(API_URL + "filmes", {headers: {Authorization: 'Bearer' + user.token}})
}

const salvar_filme = async (method, url, filme) => {
    return await axios[method](url, filme, {headers: {Authorization: 'Bearer' + user.token}})
}
const UserService = {
    getPublicContent,
    getUsuarioBoard,
    salvar_filme
}

export default UserService