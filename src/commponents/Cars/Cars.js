import React, { useEffect, useState } from 'react';

import { carService } from "../../services/carService";
import { Car } from "../Car/Car";
import { CarForm } from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <div>
            <div style={{textAlign: "center", margin: "15px"}}><CarForm setTrigger={setTrigger}
                                                                        carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/></div>
            {cars.map(value => <Car key={value.id} car={value} setCarForUpdate={setCarForUpdate}
                                    setTrigger={setTrigger}/>)}
        </div>
    );
};

export { Cars };