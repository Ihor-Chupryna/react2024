import axios from "axios";

import { baseURL } from "../constants/constants";

const apiService = axios.create({baseURL});

export {
    apiService
}
