const baseURL = 'https://rickandmortyapi.com/api';

const episode = '/episode';
const character = '/character'

const urls = {
    episode: {
        all: episode,
        byId(id) {
            return `${episode}/${id}`
        }
    },
    character: {
        byId(id) {
            return `${character}/${id}`;
        }
    }
}

export { baseURL, urls }