import React from 'react';

import { carService } from "../../services/carService";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car

    const deleteCar = async () => {
        await carService.delete(id).then(({data}) => console.log(data))
        setTrigger(prev => !prev)
    }

    return (
        <div style={{border: "1px solid black", margin: "5px", padding: "5px"}}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}> delete</button>
        </div>
    );
};

export { Car };