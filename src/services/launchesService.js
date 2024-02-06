import { axiosService } from "./axiosService";
import { urls } from "../constants/urls";

const launchesService = {
    getAll: () => axiosService(urls.allLaunches)
}

export {
    launchesService
}