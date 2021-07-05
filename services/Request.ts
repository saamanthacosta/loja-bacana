import axios from 'axios';
import { routes } from '../config/routes';

var API = axios.create({
    baseURL: routes.API.URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

class Request {

    async get(url: string) {
        try {
            return await API.get(url);
        } catch (erro) {
            return Promise.reject(erro.response)
        }

    };

    async post(url: string, obj: any) {
        try {
            return await API.post(url, obj);
        } catch (erro) {
            return Promise.reject(erro.response)
        }
    };

    async delete(url: string, id: number) {
        try {
            return await API.delete(url);
        } catch (erro) {
            return Promise.reject(erro.response)
        }
    };

    async put(url: string, obj: any) {
        try {
            return await API.put(url, obj);
        } catch (erro) {
            return Promise.reject(erro.response)
        }
    };
}

export default new Request();