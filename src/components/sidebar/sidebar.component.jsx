import React from 'react';
import './sidebar.styles.scss'

export const SideBar = ({pokemon}) => (
    <div className='sideBar'>
        {pokemon.map(pokemon => (
            <div>{pokemon.name}</div>
        ))}
    </div>
);