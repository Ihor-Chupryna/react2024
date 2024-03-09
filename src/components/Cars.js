import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { carActions } from "../store/slices";
import { Car } from "./Car";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger]);


    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export { Cars };