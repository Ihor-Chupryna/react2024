import { configureStore } from "@reduxjs/toolkit";

import { carsReducer } from "./slices";

const store = configureStore({
    reducer: {
        carsReducer
    }
});

export { store }