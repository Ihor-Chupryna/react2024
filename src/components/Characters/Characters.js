import React from 'react';

import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            id:1,
            name:'Morty Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Human',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id:2,
            name:'Morty Smith',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        },
        {
            id:3,
            name:'Abadango Cluster Princess',
            status: 'Alive',
            species: 'Alien',
            gender: 'Female',
            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
        },
        {
            id:4,
            name:'Abradolf Lincler',
            status: 'unknown',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg'
        },
        {
            id:5,
            name:'Adjudicator Rick',
            status: 'Dead',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg'
        },
        {
            id:6,
            name:'Amish Cyborg',
            status: 'Dead',
            species: 'Alien',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg'
        }
    ]
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            {characters.map(value => <Character key={value.id} character={value} />)}
        </div>
    );
};

export {Characters};