import React from 'react';
import './card.style.scss'

export const Card = ({pokemon}) => (
    <div className='card'>
        <img src={pokemon.img} alt="" />
        <div> {pokemon.name} </div>
    </div>
    );
