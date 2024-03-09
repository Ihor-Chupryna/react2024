import { apiService } from "./apiService";
import { urls } from "../constants";

const carService = {
    getAll: () => apiService.get(urls.cars.all),
    create: (data) => apiService.post(urls.cars.all, data),
    update: (id, car) => apiService.put(urls.cars.byId(id), car),
    delete: (id) => apiService.delete(urls.cars.byId(id))
}

export { carService }