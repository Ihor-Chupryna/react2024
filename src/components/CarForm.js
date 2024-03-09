import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { carActions } from "../store/slices";

const CarForm = () => {
    const {reset, register, setValue, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate, error, loading} = useSelector(state => state.carReducer);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    const createCar = (data) => {
        dispatch(carActions.create({car: data}))
        reset()
    }

    const updateCar = async (data) => {
        await dispatch(carActions.update({id: carForUpdate.id, car: data}))
        dispatch(carActions.setCarForUpdate(null))
        reset()
    }

    return (
        <div>
            {loading && <h2>Loading...</h2>}
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : createCar)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate ? 'update' : 'create'}</button>
            </form>
            {error && <div>{error}</div>}
        </div>

    );
};


export { CarForm };