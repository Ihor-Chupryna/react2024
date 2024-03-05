import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { carService } from "../../services";
import { carsActions } from "../../store/slices";

const CarForm = () => {
    const {
        reset, register,
        setValue,
        handleSubmit
    }
        = useForm({
        mode: "all"
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.carsReducer);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue()]);

    const create = async (car) => {
        await carService.create(car)
        await carService.getAll().then(({data}) => dispatch(carsActions.setCars(data)))
        reset()
    }

    const update = async (car) => {
        await carService.update(carForUpdate.id, car)
        await carService.getAll().then(({data}) => dispatch(carsActions.setCars(data)))
        await dispatch(carsActions.setCarForUpdate(null))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>{carForUpdate ? 'update' : 'create'}</button>
            </form>
        </div>
    );
};

export { CarForm };