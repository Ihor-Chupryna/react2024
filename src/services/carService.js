import { apiService } from "./apiService";
import { urls } from "../constants/constants";

const carService = {
    getAll: () => apiService.get(urls.allCars),
    create: (data) => apiService.post(urls.allCars, data),
    update: (id, data) => apiService.put(urls.carById(id), data),
    delete: (id) => apiService.delete(urls.carById(id))
}

export {
    carService
}