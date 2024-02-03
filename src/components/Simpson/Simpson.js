import React from 'react';

import './style.css'

const Simpson = ({simpson: { name, surname, age, info, photo }}) => {
    return (
        <div className='simpsons'>
            <h2>name: {name}</h2>
            <h2>surname: {surname}</h2>
            <h2>age: {age}</h2>
            <p>info: {info}</p>
            <img src={photo} alt="simpson photo"/>
            <hr/>
        </div>
    );
};

export {Simpson};