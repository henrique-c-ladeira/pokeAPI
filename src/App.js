import React from 'react';
import CardList from './components/card-list/card-list.component';
import { Header } from './components/header/header.component';
import SearchField from './components/search-field/search-field.component';
import { usePokemon } from './utils/api/hooks/usePokemon';
import { Container } from './styles';
import './reset.css';

const App = () => {
  const [cardList, loading] = usePokemon();

  return (
    <Container>
      <Header title="<> PokeAPI in React </>" />
      <SearchField />
      {!loading && <CardList list={cardList} />}
    </Container>
  );
};

export default App;
