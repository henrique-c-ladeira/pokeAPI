import React, {useState} from 'react';
import './sidebar.styles.scss'

export const SideBar = ({pokemon}) => {
    const [filterText, setFilterText] = useState('');

    const search = (event) => setFilterText(event.target.value);

    return (
    <div className='sideBar'>
        <input onChange={search} placeholder='Search for pokemon'/>
        {/* <div className='rectangle'/> */}
        {pokemon
            .filter(pokemon => pokemon.name.toUpperCase().includes(filterText.toUpperCase()))
            .map(pokemon => (
            <div key={pokemon.id} ><img alt='' src={pokemon.sprite} /> <span>{pokemon.name}</span></div>
        ))}
    </div>
    );
};