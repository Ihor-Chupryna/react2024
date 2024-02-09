import { apiService } from "./apiService";
import { urls } from "../constants/urls";

const userService = {
    getAll: ()=> apiService.get(urls.allUsers),
    create: (data)=> apiService.post(urls.allUsers, data)
}

export {
    userService
}