import React, { useEffect, useState } from 'react';
import api from './api';
import CardList from './components/cardList/cardList.component.jsx';
import { Header } from './components/header/header.component.jsx';
import './App.scss';
import SearchField from './components/search-field/search-field.component';

const App = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    api.get('pokemon?limit=151')
      .then((response) => {
        const dataList = response.data.results;
        const cardList = dataList.map((data) => {
          const id = data.url.split('/')[6];
          return {
            id,
            name: data.name,
            img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
        setCardList(cardList);
      });
  }, []);

  return (
    <div className="App">
      <Header title='<> PokeAPI in React </>'/>
      <SearchField />
      <CardList list={cardList} />
    </div>
  );
};

export default App;
