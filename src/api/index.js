import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    headers: {
        "Content-Type" : "application/json"
    },
    timeout: 10000
})

export default instance;