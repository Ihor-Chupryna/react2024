import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import { carService } from "../../services/carService";

const CarForm = ({setTrigger, carForUpdate}) => {
    const {register, handleSubmit, reset, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);


    const submit = async (data) => {
        if (carForUpdate) {
            await carService.update(carForUpdate.id, data)
        } else await carService.create(data)
        setTrigger(prev => !prev)
        reset()

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export { CarForm };