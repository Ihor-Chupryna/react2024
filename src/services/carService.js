import { apiService } from "./apiService";
import { urls } from "../constants";

const carService = {
    getAll: (page = '1') => apiService(urls.cars.all, {params: {page}}),
    create: (data) => apiService.post(urls.cars.all, data)
}

export { carService }