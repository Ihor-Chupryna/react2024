import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;
    return (
        <div style={{width: "260px", background: "ghostwhite", border: "1px solid black"}}>
            <h2 style={{textAlign: 'center'}}>{mission_name}</h2>
            <h4 style={{textAlign: "center"}}>year: {launch_year}</h4>
            <img src={mission_patch_small} alt="mission photo"/>
        </div>
    );
};

export { Launch };