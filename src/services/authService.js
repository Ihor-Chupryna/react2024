import { apiService } from "./apiService";
import { urls } from "../constants";

const tokenKey = 'token';

const authService = {
    register(data) {
        return apiService.post(urls.auth.register, data)
    },

    setToken(token) {
        localStorage.setItem(tokenKey, token)
    },

    getToken() {
        return localStorage.getItem(tokenKey)
    },

    async login(data) {
        const {data: {access}} = await apiService.post(urls.auth.login, data);
        this.setToken(access)
    }

}

export { authService }