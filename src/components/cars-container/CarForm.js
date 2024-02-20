import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useContext } from "react";

import { carValidator } from "../../validators";
import { carService } from "../../services";
import { Context } from "../../hoc";
import css from './carsContainer.module.css';


const CarForm = () => {
    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const {changeTrigger} = useContext(Context)

    const createCar = async (data) => {
        await carService.create(data);
        changeTrigger()
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createCar)} className={css.carFormStyle}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <div>{errors.brand.message}</div>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <div>{errors.price.message}</div>}
                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <div>{errors.year.message}</div>}
                <button disabled={!isValid}>create</button>
            </form>
        </div>
    );
};

export { CarForm };