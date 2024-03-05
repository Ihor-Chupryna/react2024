import { useDispatch } from "react-redux";

import { carsActions } from "../../store/slices";
import { carService } from "../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const setCar = () => {
        dispatch(carsActions.setCarForUpdate(car))
    }

    async function deleteCar() {
        await carService.delete(id)
        dispatch(carsActions.setCarTrigger())
    }

    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={setCar}>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export { Car };