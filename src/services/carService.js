import { apiService } from "./apiService";
import { urls } from "../constants";

const carService = {
    getAll: () => apiService.get(urls.cars.all),
    create: (data) => apiService.post(urls.cars.all, data),
    update: (id, data) => apiService.put(urls.cars.byId(id), data),
    delete: (id) => apiService.delete(urls.cars.byId(id))
}

export { carService }