import React from 'react';
import CardList from './components/cardList/cardList.component.jsx';
import { Header } from './components/header/header.component.jsx';
import './App.scss';
import SearchField from './components/search-field/search-field.component';
import { usePokemon } from './utils/api/hooks/usePokemon';

const App = () => {
  const [cardList, loading, error] = usePokemon();

  return (
    <div className="App">
      <Header title='<> PokeAPI in React </>'/>
      <SearchField />
      {!loading && <CardList list={cardList} />}
    </div>
  );
};

export default App;
