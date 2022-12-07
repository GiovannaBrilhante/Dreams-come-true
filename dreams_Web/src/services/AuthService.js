import axios from "axios"

const API_URL = "http://localhost:5006/api/home/login" // Rota de autenticação

const login = async (username, senha) => { // Realize a autenticação do usuario e obtem o token, salvando em cache
    const response = await axios // Manda o post com o username e senha para a API
        .post(API_URL, {
            username,
            senha,
        })
    console.log("response: " + JSON.stringify(response.data.token))
    if (response.data.token) // Se o token existir, salva o token no cache
        localStorage.setItem("user", JSON.stringify(response.data))
    return response.data
}

const logout = () => {
    localStorage.removeItem("user") // Remove o token(user) do cache
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user")) // Retorna o token(user) do cache para ser usado
}

// Exporta o objeto AuthService com todas as suas funções (Semelhante ao metodos de um classe)
const AuthService = {
    login, // Realiza o login
    logout, // Sai da conta
    getCurrentUser // Retorna o usuario
}

export default AuthService