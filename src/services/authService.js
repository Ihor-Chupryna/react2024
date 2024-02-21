import { apiService } from "./apiService";
import { urls } from "../constants";

const tokenKey = 'token';

const authService = {
    setToken(token) {
        localStorage.setItem(tokenKey, token)
    },

    getToken() {
        return localStorage.getItem(tokenKey)
    },

    deleteToken() {
        localStorage.removeItem(tokenKey)
    },

    register(data) {
        return apiService.post(urls.auth.register, data)
    },

    async login(data) {
        const {data: {access}} = await apiService.post(urls.auth.login, data);
        this.setToken(access)
    },

    aboutMe() {
        return apiService.get(urls.auth.me)
    }


}

export { authService }