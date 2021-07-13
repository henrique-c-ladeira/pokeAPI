import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../card/card.component';

import { Container } from './card-list.styled';

const CardList = ({ searchField, list }) => (
  <Container>
    {list.filter(
      (elem) => elem.name.toUpperCase().includes(searchField.toUpperCase()),
    )
      .map((card) => (
        <div value={card.name} key={card.name}>
          <Card pokemon={card} />
        </div>
      ))}
  </Container>
);

const mapStateToProps = (state) => ({
  searchField: state.searchField.searchField,
});

export default connect(mapStateToProps)(CardList);
