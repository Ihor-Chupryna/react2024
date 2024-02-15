import { apiService } from "./apiService";
import { urls } from "../constants";

const postService = {
    getPostById: (postId) => apiService(urls.posts.byId(postId)),
    getPostsByUser: (userId) => apiService.get(`${urls.users.byId(userId)}/posts`),
    getCommentsByPost: (postId) => apiService.get(`${urls.posts.byId(postId)}/comments`)
}

export { postService }