import axios from "axios";

const apiPorta = "7218"

const apiLocal = `https://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: apiLocal
}); 

export default api;