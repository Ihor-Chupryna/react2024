import { apiService } from "./apiService";
import { urls } from "../constants/urls";

const commentService = {
    getAll: () => apiService.get(urls.allComments),
    create: (data) =>apiService.post(urls.allComments, data)
}

export {
    commentService
}