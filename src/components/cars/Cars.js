import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { carService } from "../../services";
import { carsActions } from "../../store/slices";
import { Car } from "../car/Car";


const Cars = () => {
    const {cars, carTrigger} = useSelector(state => state.carsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setCars(data)))

    }, [carTrigger, dispatch]);

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export { Cars };