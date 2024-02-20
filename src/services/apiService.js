import axios from "axios";

import { baseURL } from "../constants";
import { authService } from "./authService";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(value => {
    const token = authService.getToken();

    if (token) {
        value.headers.Authorization = `Bearer ${token}`
    }

    return value
});

export { apiService }