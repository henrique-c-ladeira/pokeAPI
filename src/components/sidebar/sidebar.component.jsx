import React, {useState} from 'react';
import './sidebar.styles.scss'

export const SideBar = ({pokemon}) => {
    const [filter, setFilter] = useState('');

    const search = (event) => setFilter(event.target.value);

    return (
    <div className='sideBar'>
        <input onChange={search} placeholder='search'/>
        {/* <div className='rectangle'/> */}
        {pokemon.filter(pokemon => pokemon.name.toUpperCase().includes(filter.toUpperCase())).map(pokemon => (
            <div key={pokemon.id} >{pokemon.id} - {pokemon.name}</div>
        ))}
    </div>
    );
};