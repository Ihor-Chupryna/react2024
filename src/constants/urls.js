const baseURL = 'https://jsonplaceholder.typicode.com'

const urls = {
    allUsers: '/users',
    userById: (userId)=> `/users/${userId}`
}

export {
    baseURL,
    urls
}