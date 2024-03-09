import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";

import { carService } from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    error: null,
    loading: false
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
           return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteByIdCar',
    async ({id}, thunkAPI)=>  {
        try {
            await carService.delete(id);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const update = createAsyncThunk(
    'cqrSlice/update',
    async ({id, car}, thunkAPI) => {
        try {
            const {data} = await carService.update(id, car)
            return data
        } catch (e) {
           return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })

            .addCase(update.fulfilled, (state, action) => {
                state.carForUpdate = action.payload
            })

            .addMatcher(isFulfilled(create, update, deleteById), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isPending(getAll, create, update, deleteById), state => {
                state.loading = true
            })
            .addMatcher(isFulfilled(getAll, create, update, deleteById), state => {
                state.loading = false
                state.error = null;
            })
            .addMatcher(isRejected(getAll, create, update, deleteById), (state, action) => {
                state.error = action.payload
                state.loading = false
            })

});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    update,
    create,
    deleteById
}

export { carReducer, carActions }