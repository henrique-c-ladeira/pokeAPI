import React from 'react';
import './cardList.style.scss'
import { Card } from '../card/card.component.jsx';

export const CardList = props => (
    <div className='cardList'>
    {props.list.map(card => (
    <div value={card.name} key={card.name}> <Card pokemon={card} /> </div>
    ))}
    </div>
    );
