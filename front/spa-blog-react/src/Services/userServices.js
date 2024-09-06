import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000"

export function signup(data) {
    delete data.confpassword
    const body = {
        ...data,
        foto: "https://i.pinimg.com/564x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg",
        background: "qualquer coisa"
    }
    const response = axios.post(`${baseURL}/user/criar`, body)

    return response
}

export function signin(data) {
    const response = axios.post(`${baseURL}/auth`, data)
    return response
}

export function userLogged() {
    const response = axios.get(`${baseURL}/user/findId/`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        }
    })

    return response.data.user
}
