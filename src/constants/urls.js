const baseURL = 'https://jsonplaceholder.typicode.com/'

const urls = {
    users: {
        all: '/users',
        byId: (userId) => `/users/${userId}`
    },
    posts: {
        all: '/Posts',
        byId: (postId) => `/posts/${postId}`
    }
}

export {
    baseURL,
    urls
}