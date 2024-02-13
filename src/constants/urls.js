const baseURL = 'https://jsonplaceholder.typicode.com'

const urls = {
    allComments: '/comments',
    postById: (postId) => `/posts/${postId}`,
    allAlbums: '/albums',
    allTodos: '/todos'
}

export { baseURL, urls }