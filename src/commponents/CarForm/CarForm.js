import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { carService } from "../../services/carService";
import { carValidator } from "../../validators/carValidators";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

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
            setCarForUpdate(null)

        } else await carService.create(data)
        setTrigger(prev => !prev)
        reset()

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price' , {valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'create'}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export { CarForm };