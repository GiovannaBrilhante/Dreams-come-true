import axios from "axios";

const API_URL = "http://localhost:3000/api/";
//Cadastro do filme: usuarios
//Cadastro do restaurante: usuarios
//Menu: todos

const user = JSON.parse(localStorage.getItem('user'));

const getPublicContent = () => {
    return axios.get(API_URL + "filmes", {headers: { Authorization: 'Bearer' + user.token}})
}

const getUsuarioBoard = async () => {
    return await axios.get(API_URL + "filmes", {headers: {Authorization: 'Bearer' + user.token}})
}

const UserService = {
    getPublicContent,
    getUsuarioBoard
}

export default UserService