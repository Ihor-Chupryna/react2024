import React from 'react';

import './style.css'

const Character = ({character}) => {
    const {name, status, species, gender, image} = character
    return (
        <div className='character'>
            <h4>name: {name}</h4>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt="rick and Morty character photo"/>
        </div>
    );
};

export {Character};