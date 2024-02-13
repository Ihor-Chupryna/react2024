import { apiService } from "./apiService";
import { urls } from "../constants/urls";

const albumsService = {
    getAll: apiService.get(urls.allAlbums)
}

export { albumsService }