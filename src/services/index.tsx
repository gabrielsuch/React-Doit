import axios from "axios"


export const api = axios.create({
    baseURL: "https://doit-backend.herokuapp.com"
})