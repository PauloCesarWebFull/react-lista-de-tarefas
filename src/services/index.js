import axios from "axios";

export const AXIOS = axios.create({
    baseURL: "https://api-tarefas-455v.onrender.com"
   // baseURL: "http://localhost:3000"
})