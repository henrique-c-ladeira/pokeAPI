import React from 'react';
import api from './api';
import {CardList} from './components/cardList/cardList.component.jsx';
import {Header} from './components/header/header.component.jsx'
import { SideBar } from './components/sidebar/sidebar.component.jsx';
import './App.scss'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            cardList: [],
        };
    }

    componentDidMount() {
        api.get('pokemon?limit=151')
            .then((response) => {
                const dataList = response.data.results;
                const cardList = dataList.map((data) => {
                    const id = data.url.split('/')[6];
                    return {
                        id,
                        name: data.name,
                        img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                    };
                });
                this.setState({ cardList });
            });
    }

    // handlePokemon = (event) => {
    //     api.get(`pokemon-form/${event.target.value}`)
    //         .then((response) => {
    //             const sprite = response.data.sprites.front_default;
    //             const name = response.data.pokemon.name;
    //             this.setState({
    //                 pokemon: {
    //                     name,
    //                     sprite,
    //                 },
    //             });
    //         });
    // };

    render() {
        return (
            <div className="App">
                <SideBar pokemon={this.state.cardList}/>
                <div>
                    <Header title='<> PokeAPI in React </>'/>
                    <CardList list={this.state.cardList} />
                </div>
            </div>
        );
    }
}


export default App;
