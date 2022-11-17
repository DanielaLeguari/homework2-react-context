import axios from "axios";

const url = 'http://vemser-dbc.dbccompany.com.br:39000/vemser/dbc-pessoa-api';

export const api = axios.create({
    baseURL: url
})

//para todas requisições estou autenticada durante 24 hras
export const setAuthToken = (token : string | undefined) => {
    api.defaults.headers.common["Authorization"] = token ? `Bearer ${token}`: token;
}