import axios from "axios";

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

