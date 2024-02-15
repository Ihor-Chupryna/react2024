const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';

const urls = {
    users: {
        all: users,
        byId: (userId) => `${users}/${userId}`
    },
    posts: {
        byId: (postId) => `${posts}/${postId}`
    }
}

export { baseURL, urls }