import { apiService } from "./apiService";
import { urls } from "../constants";

const userService = {
    getAll: apiService.get(urls.users.all),
    getById: (userId) => apiService(urls.users.byId(userId))
}

export {
    userService
}