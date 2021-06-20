import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../card/card.component';

import './card-list.style.scss';

const CardList = ({ searchField, list }) => (
  <div className="cardList">
    {list.filter(
      (elem) => elem.name.toUpperCase().includes(searchField.toUpperCase()),
    )
      .map((card) => (
        <div value={card.name} key={card.name}>
          <Card pokemon={card} />
        </div>
      ))}
  </div>
);

const mapStateToProps = (state) => ({
  searchField: state.searchField.searchField,
});

export default connect(mapStateToProps)(CardList);
