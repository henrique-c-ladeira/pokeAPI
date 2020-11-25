import React, { useState, useEffect } from 'react';
import api from './api';

const App = () => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        api.get('pokemon-form/63')
            .then((response) => {
                const sprite = response.data.sprites.front_default;
                const name = response.data.pokemon.name;
                setPokemon({ name, sprite });
            });
    }, []);

    return (
        <div className="App">
            <img src={pokemon.sprite} alt="" width="300rem" />
            <h1> {pokemon.name} </h1>
        </div>
    );
};

export default App;

