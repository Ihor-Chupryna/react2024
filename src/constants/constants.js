const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const urls = {
    allCars: '/cars',
    carById: (carId) => `/cars/${carId}`
}

export {
    baseURL,
    urls
}