import React, { useEffect, useState } from 'react'

import { launchesService } from "../../services/launchesService";
import { Launch } from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        launchesService.getAll().then(({data}) => setLaunches(data))
    }, []);

    return (
        <div style={{background:'grey'}}>
            <h1 style={{padding:'15px', textAlign:'center', color:'black'}}>SpaceX</h1>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", rowGap:"10px"}}>{launches.filter(value => value.launch_year < 2020)
                .map(value => <Launch key={value.flight_number} launch={value}/>)}</div>
        </div>
    );
};

export { Launches };