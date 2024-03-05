import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    carTrigger: null
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, actions) => {
            state.cars = actions.payload
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        },
        setCarTrigger: (state) => {
            state.carTrigger = !state.carTrigger
        }

    }
});

const {reducer: carsReducer, actions} = carSlice;

const carsActions = {
    ...actions
}

export { carsReducer, carsActions }